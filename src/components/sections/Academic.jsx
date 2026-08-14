import Reveal from "../common/Reveal";
import Timeline from "../common/Timeline";
import { academicTimeline } from "../../data/site";

export default function Academic({ c }) {
  return (
    <section id="academic" className={`py-14 border-t ${c.border} scroll-mt-20`}>
      <Reveal>
        <p className={`font-mono text-sm ${c.accent} mb-2`}>/academic</p>
        <h2 className="text-2xl font-bold mb-8">Academic Excellence</h2>
      </Reveal>
      <Timeline items={academicTimeline} c={c} />
    </section>
  );
}
