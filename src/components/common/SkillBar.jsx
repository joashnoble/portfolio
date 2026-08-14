export default function SkillBar({ name, level, c }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between text-sm mb-1.5">
        <span className={c.text}>{name}</span>
        <span className={`font-mono text-xs ${c.muted}`}>{level}%</span>
      </div>
      <div className={`h-1.5 rounded-full ${c.trackBg}`}>
        <div className="h-1.5 rounded-full bg-emerald-500" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}
