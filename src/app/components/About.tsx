import { motion } from "motion/react";
import { Code2, Globe, Server, Smartphone, Zap, Shield } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    desc: "React, TypeScript, Next.js, Tailwind CSS — crafting responsive, performant UIs.",
    color: "from-indigo-500 to-blue-500",
    bg: "bg-indigo-100 dark:bg-indigo-900/30",
    text: "text-indigo-600 dark:text-indigo-400",
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Node.js, Python, REST & GraphQL APIs, microservices, database design.",
    color: "from-violet-500 to-purple-500",
    bg: "bg-violet-100 dark:bg-violet-900/30",
    text: "text-violet-600 dark:text-violet-400",
  },
  {
    icon: Globe,
    title: "Cloud & DevOps",
    desc: "AWS, Docker, Kubernetes, CI/CD pipelines, infrastructure as code.",
    color: "from-purple-500 to-pink-500",
    bg: "bg-purple-100 dark:bg-purple-900/30",
    text: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    desc: "React Native cross-platform apps with native performance & great UX.",
    color: "from-sky-500 to-cyan-500",
    bg: "bg-sky-100 dark:bg-sky-900/30",
    text: "text-sky-600 dark:text-sky-400",
  },
  {
    icon: Zap,
    title: "Performance & SEO",
    desc: "Core Web Vitals, lighthouse optimization, semantic HTML, and accessibility.",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-100 dark:bg-amber-900/30",
    text: "text-amber-600 dark:text-amber-400",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    desc: "OWASP best practices, HIPAA, PCI DSS, OAuth 2.0, and data encryption.",
    color: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
    text: "text-emerald-600 dark:text-emerald-400",
  },
];

export function About() {
  return (
    <section className="py-20 px-6 lg:px-8 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
              <Code2 className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            What I{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #4f46e5 0%, #a855f7 100%)" }}
            >
              Specialize In
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From pixel-perfect interfaces to battle-tested backends — I cover the full spectrum of modern web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map(({ icon: Icon, title, desc, bg, text, color }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-card border border-border rounded-3xl p-6 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300 relative overflow-hidden"
            >
              {/* Gradient accent top */}
              <div
                className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className={`w-12 h-12 rounded-2xl ${bg} flex items-center justify-center mb-4`}>
                <Icon className={`w-6 h-6 ${text}`} />
              </div>
              <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
