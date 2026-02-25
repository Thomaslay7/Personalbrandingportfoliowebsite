import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-card overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-primary/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-blue-500 to-blue-500 flex items-center justify-center shadow-md">
                <span className="text-white text-sm font-bold">TD</span>
              </div>
              <span className="text-lg font-bold">Thomas Diky</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Fullstack Developer · Open for Freelance
            </p>
            <a
              href="mailto:hello@thomasdiky.dev"
              className="text-sm text-primary hover:underline"
            >
              hello@thomasdiky.dev
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-3">
            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
              Connect with me
            </div>
            <div className="flex items-center gap-2">
              {[
                { href: "https://github.com", icon: Github, label: "GitHub" },
                {
                  href: "https://linkedin.com",
                  icon: Linkedin,
                  label: "LinkedIn",
                },
                {
                  href: "https://twitter.com",
                  icon: Twitter,
                  label: "Twitter",
                },
                {
                  href: "mailto:hello@thomasdiky.dev",
                  icon: Mail,
                  label: "Email",
                },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="p-2.5 rounded-xl bg-background border border-border hover:border-primary/40 hover:bg-primary/5 hover:text-primary text-muted-foreground transition-all shadow-sm"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex flex-col items-center gap-1.5 group text-muted-foreground hover:text-primary transition-colors"
            aria-label="Back to top"
          >
            <div className="p-3 rounded-xl border border-border group-hover:border-primary/40 group-hover:bg-primary/5 transition-all">
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </div>
            <span className="text-xs">Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
