import Reveal from "../common/Reveal";
import { skillCategories } from "../../data/site";

export default function Skills({ c }) {
  return (
    <section id="skills" className={`py-14 border-t ${c.border} scroll-mt-20`}>
      <Reveal>
        <p className={`font-mono text-sm ${c.accent} mb-2`}>/skills</p>

        <h2 className="text-2xl font-bold mb-2">Engineering Expertise</h2>

        <p className={`text-sm ${c.muted} max-w-2xl mb-8`}>
          Technologies and engineering practices I use to build, maintain,
          integrate, and improve production web applications.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, i) => {
          const Icon = category.icon;

          return (
            <Reveal key={category.title} delay={i * 80}>
              <div
                className={`h-full rounded-xl border ${c.border} ${c.cardBg} p-6`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${c.accentBg}`}
                  >
                    <Icon size={18} className={c.accent} />
                  </div>

                  <h3 className="font-semibold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1.5 rounded-full text-sm border ${c.border} ${c.accentBg} ${c.accent}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}