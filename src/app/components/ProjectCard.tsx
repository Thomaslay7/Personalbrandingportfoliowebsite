import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { useState } from "react";
import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const tagColors: Record<string, string> = {
  React: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
  TypeScript:
    "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  "Node.js":
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  PostgreSQL:
    "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
  AWS: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  Docker: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300",
  MongoDB:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  Python:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
  GraphQL: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
  "React Native":
    "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
};

function getTagClass(tag: string) {
  return tagColors[tag] || "bg-secondary text-secondary-foreground";
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const getImagePath = (imageName: string) => {
    // If it's already a full URL (http/https), return as is
    if (imageName.startsWith('http')) {
      return imageName;
    }
    // For local assets in public folder
    return `/assets/${imageName}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
    >
      <Link
        to={`/project/${project.id}`}
        className="group block bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 relative"
      >
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
          {!imageLoaded && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-muted via-muted-foreground/10 to-muted animate-pulse"
              initial={{ opacity: 1 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          )}
          <img
            src={getImagePath(project.image)}
            alt={project.title}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              setImageLoaded(true);
              (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=450&fit=crop`;
            }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Year badge */}
          <div className="absolute top-4 left-4 px-3 py-1 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full text-white text-xs font-semibold">
            {project.year}
          </div>

          {/* Hover CTA */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-3 flex items-center gap-2 text-white font-semibold shadow-xl">
              View Case Study
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1 flex-1">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                {project.description}
              </p>
            </div>
            <div className="p-2 rounded-xl bg-primary/5 border border-primary/10 text-primary opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-full text-xs font-semibold ${getTagClass(tag)}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-border">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-medium">{project.role}</span>
              <span>•</span>
              <span>{project.duration}</span>
            </div>
            {project.link && (
              <div className="flex items-center gap-1 text-xs text-primary">
                <ExternalLink className="w-3 h-3" />
                <span>Live</span>
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
