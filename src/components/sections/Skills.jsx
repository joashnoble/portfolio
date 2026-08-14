import Reveal from "../common/Reveal";
import SkillBar from "../common/SkillBar";
import { skillCategories } from "../../data/site";

export default function Skills({ c }) {
  return (
    <section id="skills" className={`py-14 border-t ${c.border} scroll-mt-20`}>
      <Reveal>
        <p className={`font-mono text-sm ${c.accent} mb-2`}>/skills</p>
        <h2 className="text-2xl font-bold mb-8">Skills</h2>
      </Reveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, i) => {
          const Icon = category.icon;
          return (
            <Reveal key={category.title} delay={i * 80}>
              <div className={`rounded-xl border ${c.border} ${c.cardBg} p-6`}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${c.accentBg}`}>
                    <Icon size={18} className={c.accent} />
                  </div>
                  <h3 className="font-semibold">{category.title}</h3>
                </div>
                {category.skills.map((skill) => <SkillBar key={skill.name} name={skill.name} level={skill.level} c={c} />)}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
