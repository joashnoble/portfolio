import { Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import { NAV, SOCIALS, profile } from "../../data/site";

export default function Header({
  c,
  dark,
  menuOpen,
  setMenuOpen,
  setTheme,
  activeSection,
  onNavigate,
}) {
  const navLink = (id, label) => {
    const active = activeSection === id;

    return (
      <button
        key={id}
        type="button"
        onClick={() => {
          onNavigate(id);
          setMenuOpen(false);
        }}
        aria-current={active ? "page" : undefined}
        className={`text-left font-mono text-sm transition-colors ${
          active ? c.accent : `${c.muted} ${c.hoverText}`
        }`}
      >
        /{label}
      </button>
    );
  };

  return (
    <>
      <aside className={`hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:w-56 lg:border-r ${c.border} ${c.pageBg} px-6 py-10 gap-8`}>
        <div>
          <p className={`font-mono text-xs ${c.muted}`}>~/portfolio</p>
          <img
            src={dark ? "/images/logo-dark.png" : "/images/logo-light.png"}
            alt={profile.name}
            className="h-8 object-contain"
          />
        </div>
        <nav className="flex flex-col gap-3">{NAV.map((n) => navLink(n.id, n.label))}</nav>
        <div className="mt-auto flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={`${c.muted} ${c.hoverText} transition-colors`}><Github size={18} /></a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${c.muted} ${c.hoverText} transition-colors`}><Linkedin size={18} /></a>
          </div>
          <button onClick={() => setTheme(dark ? "light" : "dark")} className={`flex items-center gap-2 text-xs font-mono ${c.muted} ${c.hoverText} transition-colors`}>
            {dark ? <Sun size={14} /> : <Moon size={14} />} {dark ? "Light mode" : "Dark mode"}
          </button>
          <p className={`font-mono text-xs ${c.muted}`}>{profile.location}</p>
        </div>
      </aside>

      <div className={`lg:hidden sticky top-0 z-40 flex items-center justify-between px-4 py-3 border-b ${c.border} ${c.pageBg}`}>
        <img
            src={dark ? "/images/logo-dark.png" : "/images/logo-light.png"}
            alt={profile.name}
            className="h-8 object-contain"
          />
        <div className="flex items-center gap-1">
          <button onClick={() => setTheme(dark ? "light" : "dark")} className={`p-2 rounded-md ${c.muted} ${c.hoverText}`} aria-label="Toggle theme">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setMenuOpen((value) => !value)} className={`p-2 rounded-md ${c.muted} ${c.hoverText}`} aria-label="Toggle menu">
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={`lg:hidden sticky top-[49px] z-30 flex flex-col gap-4 px-4 py-4 border-b ${c.border} ${c.pageBg}`}>
          {NAV.map((n) => navLink(n.id, n.label))}
          <div className="flex items-center gap-3 pt-2">
            <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={`${c.muted} ${c.hoverText}`}><Github size={18} /></a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${c.muted} ${c.hoverText}`}><Linkedin size={18} /></a>
          </div>
        </div>
      )}
    </>
  );
}
