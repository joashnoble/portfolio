export default function Footer({ c }) {
  return (
    <footer className={`border-t ${c.border}`}>
      <div className="lg:pl-56">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono">
          <p className={c.muted}>© {new Date().getFullYear()} Joash Jezreel Lucas Noble. All rights reserved.</p>
          <p className={c.muted}>Built with React &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
