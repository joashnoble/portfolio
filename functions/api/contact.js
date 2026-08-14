// Cloudflare Pages Function.
// This file's path (functions/api/contact.js) IS the route: a POST to
// /api/contact on your deployed site runs this automatically — no router,
// no config needed.
//
// Requires two environment variables, set in the Cloudflare dashboard under
// your Pages project → Settings → Environment variables (see README):
//   RESEND_API_KEY     — your Resend API key (mark it "Encrypt")
//   DESTINATION_EMAIL   — the address you want contact-form messages sent to

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function jsonResponse(body, status = 200) {
    return new Response(JSON.stringify(body), {
        status,
        headers: { "Content-Type": "application/json" },
    });
}

export async function onRequestPost({ request, env }) {
    let data;
    try {
        data = await request.json();
    } catch {
        return jsonResponse({ message: "Invalid request body." }, 400);
    }

    const { name = "", email = "", message = "", company = "" } = data;

    // Honeypot: real visitors never see or fill this field. If it's
    // filled, silently pretend success so the bot doesn't retry.
    if (company.trim().length > 0) {
        return jsonResponse({ message: "Message sent successfully." });
    }

    const errors = {};
    if (!name || typeof name !== "string" || name.trim().length === 0) {
        errors.name = ["Name is required."];
    }
    if (!email || typeof email !== "string" || !EMAIL_RE.test(email)) {
        errors.email = ["A valid email address is required."];
    }
    if (!message || typeof message !== "string" || message.trim().length === 0) {
        errors.message = ["Message is required."];
    }
    if (Object.keys(errors).length > 0) {
        return jsonResponse({ errors }, 422);
    }

    if (!env.RESEND_API_KEY || !env.DESTINATION_EMAIL) {
        return jsonResponse(
            { message: "Contact form isn't configured yet — missing RESEND_API_KEY or DESTINATION_EMAIL." },
            500
        );
    }

    try {
        const resendRes = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${env.RESEND_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // Without a verified custom domain in Resend, you can only send
                // from onboarding@resend.dev, and only to the email address you
                // signed up to Resend with. See the README for upgrading this
                // once you have a domain.
                from: "Portfolio Contact <onboarding@resend.dev>",
                to: [env.DESTINATION_EMAIL],
                reply_to: email,
                subject: `New portfolio message from ${name}`,
                text: `From: ${name} <${email}>\n\n${message}`,
            }),
        });

        if (!resendRes.ok) {
            const errText = await resendRes.text();
            console.error("Resend API error:", resendRes.status, errText);
            return jsonResponse({ message: "Failed to send message. Please try again." }, 502);
        }

        return jsonResponse({ message: "Message sent successfully." });
    } catch (err) {
        console.error("Contact form error:", err);
        return jsonResponse({ message: "Server error. Please try again." }, 500);
    }
}
