import Reveal from "../common/Reveal";
import { services } from "../../data/site";

export default function Services({ c }) {
  return (
    <section id="services" className={`py-14 border-t ${c.border} scroll-mt-20`}>
      <Reveal>
        <p className={`font-mono text-sm ${c.accent} mb-2`}>/services</p>
        <h2 className="text-2xl font-bold mb-8">Services</h2>
      </Reveal>
      <div className="grid sm:grid-cols-2 gap-6">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.title} delay={i * 60}>
              <div>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${c.accentBg}`}>
                  <Icon size={18} className={c.accent} />
                </div>
                <h3 className="font-semibold text-sm mb-1">{service.title}</h3>
                <p className={`text-sm ${c.muted}`}>{service.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
