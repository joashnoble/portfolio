const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

async function handleContact(request, env) {
  let data;

  try {
    data = await request.json();
  } catch {
    return jsonResponse(
      { message: "Invalid request body." },
      400
    );
  }

  const {
    name = "",
    email = "",
    message = "",
    company = "",
  } = data;

  // Honeypot
  if (
    typeof company === "string" &&
    company.trim().length > 0
  ) {
    return jsonResponse({
      message: "Message sent successfully.",
    });
  }

  // Validation
  const errors = {};

  if (
    !name ||
    typeof name !== "string" ||
    name.trim().length === 0
  ) {
    errors.name = ["Name is required."];
  }

  if (
    !email ||
    typeof email !== "string" ||
    !EMAIL_RE.test(email)
  ) {
    errors.email = ["A valid email address is required."];
  }

  if (
    !message ||
    typeof message !== "string" ||
    message.trim().length === 0
  ) {
    errors.message = ["Message is required."];
  }

  if (Object.keys(errors).length > 0) {
    return jsonResponse({ errors }, 422);
  }

  // Environment variables
  if (!env.RESEND_API_KEY || !env.DESTINATION_EMAIL) {
    console.error("Contact form configuration error: missing environment variables.");

    return jsonResponse(
      {
        message:
          "Contact form isn't configured yet. Please try again later.",
      },
      500
    );
  }

  try {
    const resendRes = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: [env.DESTINATION_EMAIL],
          reply_to: email,
          subject: `New portfolio message from ${name}`,
          text: `From: ${name} <${email}>\n\n${message}`,
        }),
      }
    );

    if (!resendRes.ok) {
      const errText = await resendRes.text();

      console.error(
        "Resend API error:",
        resendRes.status,
        errText
      );

      return jsonResponse(
        {
          message:
            "Failed to send message. Please try again.",
        },
        502
      );
    }

    return jsonResponse({
      message: "Message sent successfully.",
    });
  } catch (err) {
    console.error("Contact form error:", err);

    return jsonResponse(
      {
        message: "Server error. Please try again.",
      },
      500
    );
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Contact API
    if (
      url.pathname === "/api/contact" &&
      request.method === "POST"
    ) {
      return handleContact(request, env);
    }

    // React/Vite static files
    return env.ASSETS.fetch(request);
  },
};