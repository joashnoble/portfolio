import Reveal from "./Reveal";

export default function Timeline({ items, c }) {
  return (
    <div className={`relative border-l-2 ${c.timelineLine} ml-3`}>
      {items.map((item, i) => (
        <Reveal key={i} delay={i * 80}>
          <div
            className={`relative pl-8 ${
              i !== items.length - 1 ? "pb-10" : ""
            }`}
          >
            <span
              className={`absolute -left-[17px] top-0 w-8 h-8 rounded-full ${c.pageBg} border-2 border-emerald-500 flex items-center justify-center`}
            >
              <span className="w-3 h-3 rounded-full bg-emerald-300" />
            </span>

            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
              <h3 className={`font-semibold ${c.text}`}>{item.title}</h3>

              {item.period && (
                <span className={`text-xs font-mono ${c.muted}`}>
                  {item.period}
                </span>
              )}
            </div>

            <p className={`text-sm mb-3 ${c.accent}`}>{item.org}</p>

            <ul className="space-y-1.5">
              {item.points.map((point, j) => (
                <li
                  key={j}
                  className={`text-sm pl-4 relative ${c.text}`}
                >
                  <span
                    className={`absolute left-0 top-2 w-1 h-1 rounded-full ${c.mutedDot}`}
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}