import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import profileImage from "@/assets/profile-1.png";

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "50+", label: "Projects Built" },
  { value: "30+", label: "Happy Clients" },
  { value: "99%", label: "Client Satisfaction" },
];

const techs = [
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Go",
  "Rust",
  "Google Cloud Platform",
  "Docker",
  "Flutter",
  "Firebase",
  "Next.js",
  "Strapi",
  "Laravel",
  "n8n",
  "Java",
  "Kotlin",
  "Swift",
];

export function Hero() {
  const handleHireMe = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-violet-500/5 blur-[140px]" />
        {/* Grid pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.06]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              Available for freelance work
            </motion.div>

            {/* Main heading */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-muted-foreground text-lg tracking-wide"
              >
                Hi there, I'm
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
                style={{ lineHeight: 1.1 }}
              >
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #4f46e5 0%, #3b82f6 50%, #0ea5e9 100%)",
                  }}
                >
                  Thomas Diky
                </span>
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-foreground/80"
              >
                Fullstack Developer
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              Building scalable, high-performance web applications with modern
              technologies. Specialized in React, Node.js, and cloud
              architecture that drives real business results.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={handleHireMe}
                className="group relative px-8 py-4 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)",
                }}
              >
                <span className="relative flex items-center gap-2 text-white font-semibold">
                  Hire Me
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <a
                href="#projects"
                className="group px-8 py-4 rounded-xl border-2 border-primary/20 hover:border-primary/50 bg-primary/5 hover:bg-primary/10 transition-all duration-300 text-foreground font-semibold flex items-center gap-2"
              >
                View Work
                <Sparkles className="w-4 h-4 text-primary" />
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <span className="text-sm text-muted-foreground">Find me on</span>
              <div className="flex items-center gap-2">
                {[
                  { href: "https://github.com", icon: Github, label: "GitHub" },
                  {
                    href: "https://linkedin.com",
                    icon: Linkedin,
                    label: "LinkedIn",
                  },
                  {
                    href: "mailto:merrythomas909@gmail.com",
                    icon: Mail,
                    label: "Email",
                  },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="p-2.5 rounded-xl bg-card border border-border hover:border-primary/40 hover:bg-primary/5 transition-all text-muted-foreground hover:text-primary shadow-sm"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Floating card */}
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500 via-blue-500 to-blue-500 blur-2xl opacity-20 scale-105" />

              {/* Profile image card */}
              <div className="relative w-80 h-96 lg:w-96 lg:h-[480px] rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Thomas Diky"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-transparent to-transparent" />

                {/* Name badge at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                    <div className="text-white font-bold text-lg">
                      Thomas Diky
                    </div>
                    <div className="text-white/70 text-sm">
                      Fullstack Developer
                    </div>
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-emerald-300 text-xs">
                        Available for hire
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating experience pill */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl px-4 py-3 shadow-xl"
              >
                <div className="text-2xl font-extrabold text-primary">8+</div>
                <div className="text-xs text-muted-foreground">
                  Years of
                  <br />
                  Experience
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div
                className="text-3xl font-extrabold bg-clip-text text-transparent mb-1"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #4f46e5 0%, #0ea5e9 100%)",
                }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech stack pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <span className="text-sm text-muted-foreground self-center">
            Tech stack:
          </span>
          {techs.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3 + index * 0.07, duration: 0.3 }}
              className="px-4 py-2 bg-card border border-border text-sm rounded-full hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all cursor-default shadow-sm"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
