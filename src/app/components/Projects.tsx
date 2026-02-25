import { motion } from "motion/react";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { Layers } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-28 px-6 lg:px-8 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
              <Layers className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Featured{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #4f46e5 0%, #a855f7 100%)" }}
            >
              Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A selection of projects that showcase my expertise in building scalable,
            user-focused applications that deliver real business value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
