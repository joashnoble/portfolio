import Reveal from "../common/Reveal";
import Timeline from "../common/Timeline";
import { experienceTimeline } from "../../data/site";

export default function Experience({ c }) {
  return (
    <section id="experiences" className={`py-14 border-t ${c.border} scroll-mt-20`}>
      <Reveal>
        <p className={`font-mono text-sm ${c.accent} mb-2`}>/experiences</p>
        <h2 className="text-2xl font-bold mb-8">Experiences</h2>
      </Reveal>
      <Timeline items={experienceTimeline} c={c} />
    </section>
  );
}
