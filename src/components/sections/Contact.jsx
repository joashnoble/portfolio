import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Reveal from "../common/Reveal";
import { CONTACT_ENDPOINT, CONTACT_INFO, profile } from "../../data/site";

const initialFormData = { name: "", email: "", message: "", company: "" };

export default function Contact({ c, dark }) {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState("idle");
  const [fieldErrors, setFieldErrors] = useState({});

  const updateField = (field, value) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setFieldErrors({});

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.status === 422) {
        const data = await response.json();
        setFieldErrors(data.errors || {});
        setStatus("error");
        return;
      }

      if (!response.ok) throw new Error("Request failed");

      setStatus("sent");
      setFormData(initialFormData);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className={`py-14 border-t ${c.border} scroll-mt-20`}>
      <Reveal>
        <p className={`font-mono text-sm ${c.accent} mb-2`}>/contact</p>
        <h2 className="text-2xl font-bold mb-2">Contact</h2>
        <p className={`text-sm mb-6 ${c.muted}`}>Send a message and I'll get back to you.</p>

        <div className="flex flex-col gap-2 mb-8 text-sm">
          <a href={`mailto:${CONTACT_INFO.email}`} className={`flex items-center gap-2 ${c.text} ${c.hoverAccent} transition-colors w-fit`}>
            <Mail size={15} className={c.accent} /> {CONTACT_INFO.email}
          </a>
          <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`} className={`flex items-center gap-2 ${c.text} ${c.hoverAccent} transition-colors w-fit`}>
            <Phone size={15} className={c.accent} /> {CONTACT_INFO.phone}
          </a>
          <div className={`flex items-center gap-2 ${c.muted}`}>
            <MapPin size={15} className={c.accent} /> {profile.location}
          </div>
        </div>

        {status === "sent" && (
          <div className={`text-sm font-mono px-4 py-2.5 rounded-md mb-5 ${c.accentBg} ${c.accent}`}>
            Thanks — your message has been sent!
          </div>
        )}
        {status === "error" && Object.keys(fieldErrors).length === 0 && (
          <div className="text-sm font-mono px-4 py-2.5 rounded-md mb-5 bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-400">
            Something went wrong sending your message. Please try again, or email me directly.
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={formData.company}
            onChange={(event) => updateField("company", event.target.value)}
            className="absolute -left-[9999px] w-px h-px opacity-0"
          />

          <div>
            <label className={`block text-xs font-mono mb-1.5 ${c.muted}`}>Full name</label>
            <input
              required
              type="text"
              value={formData.name}
              onChange={(event) => updateField("name", event.target.value)}
              className={`w-full border ${c.border} ${c.inputBg} rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`}
            />
            {fieldErrors.name && <p className="text-xs text-red-500 mt-1">{fieldErrors.name[0]}</p>}
          </div>

          <div>
            <label className={`block text-xs font-mono mb-1.5 ${c.muted}`}>Email address</label>
            <input
              required
              type="email"
              value={formData.email}
              onChange={(event) => updateField("email", event.target.value)}
              className={`w-full border ${c.border} ${c.inputBg} rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`}
            />
            {fieldErrors.email && <p className="text-xs text-red-500 mt-1">{fieldErrors.email[0]}</p>}
          </div>

          <div>
            <label className={`block text-xs font-mono mb-1.5 ${c.muted}`}>Message</label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(event) => updateField("message", event.target.value)}
              className={`w-full border ${c.border} ${c.inputBg} rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500`}
            />
            {fieldErrors.message && <p className="text-xs text-red-500 mt-1">{fieldErrors.message[0]}</p>}
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className={`self-start inline-flex items-center gap-2 text-sm font-mono px-5 py-2.5 rounded-md
              transition-all duration-300 ease-in-out
              hover:-translate-y-0.5 hover:shadow-md
              hover:bg-emerald-600 hover:text-white
              disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none
              ${dark ? "bg-neutral-100 text-neutral-900" : "bg-neutral-900 text-white"}`}
          >
            <Mail size={14} />
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
        </form>
      </Reveal>
    </section>
  );
}
