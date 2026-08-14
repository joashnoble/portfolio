import Reveal from "../common/Reveal";
import { AVATAR_URL, about, profile } from "../../data/site";

export default function About({ c }) {
  return (
    <section id="about" className={`py-14 border-t ${c.border} scroll-mt-20`}>
      <Reveal>
        <p className={`font-mono text-sm ${c.accent} mb-2`}>/about</p>
        <h2 className="text-2xl font-bold mb-1">About</h2>
        <p className={`text-sm mb-8 ${c.muted}`}>{about.subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <img src={AVATAR_URL} alt={profile.name} className={`w-28 h-28 rounded-full object-cover border ${c.border} flex-shrink-0`} />
          <div className="space-y-4">
            {about.paragraphs.map((paragraph, i) => <p key={i} className="text-sm leading-relaxed">{paragraph}</p>)}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
