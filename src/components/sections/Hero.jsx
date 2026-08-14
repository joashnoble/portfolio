import { Download, Github, Linkedin, MapPin } from "lucide-react";
import Reveal from "../common/Reveal";
import { RESUME_URL, SOCIALS, heroSkills, profile } from "../../data/site";

export default function Hero({ c }) {
  return (
    <Reveal>
      <section id="hero" className="mb-20 max-w-2xl">
        <p className={`font-mono text-sm ${c.accent} mb-3`}>{profile.title}</p>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          {profile.name}
        </h1>

        <p className={`text-lg mb-5 max-w-md ${c.muted}`}>
          {profile.tagline}
        </p>

        <div className={`flex items-center gap-1.5 text-sm font-mono ${c.muted} mb-6`}>
          <MapPin size={14} /> {profile.location}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={RESUME_URL}
            download
            className={`inline-flex items-center gap-2 text-sm font-mono px-4 py-2.5 rounded-md border ${c.border} hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md`}
          >
            <Download size={15} /> Download resume
          </a>

          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={`p-2.5 rounded-md border ${c.border} hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md`}
          >
            <Github size={16} />
          </a>

          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={`p-2.5 rounded-md border ${c.border} hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md`}
          >
            <Linkedin size={16} />
          </a>
        </div>
        
        {/* Technology logos */}
        <div className="mt-14">
          <div className="flex flex-wrap justify-center sm:justify-start gap-10">
            {heroSkills.map((skill) => (
              <img
                key={skill.name}
                src={skill.logo}
                alt={skill.name}
                title={skill.name}
                className="h-6 object-contain"
              />
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}