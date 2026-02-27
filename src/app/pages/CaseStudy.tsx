import { useParams, Link, Navigate } from "react-router";
import { motion } from "motion/react";
import { useEffect } from "react";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  Calendar,
  Clock,
  Briefcase,
} from "lucide-react";
import { projects } from "../data/projects";
import { Footer } from "../components/Footer";

export default function CaseStudy() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  // Helper function to resolve image path
  const getImagePath = (imageName: string) => {
    // If it's already a full URL (http/https), return as is
    if (imageName.startsWith('http')) {
      return imageName;
    }
    // For local assets, use relative path
    return `/src/assets/${imageName}`;
  };

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10 group"
          >
            <div className="p-1.5 rounded-lg border border-border group-hover:border-primary/40 group-hover:bg-primary/5 transition-all">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          {/* Header */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #a855f7 100%)",
              }}
            >
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Meta grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { icon: Calendar, label: "Year", value: project.year },
              { icon: Briefcase, label: "Role", value: project.role },
              { icon: Clock, label: "Duration", value: project.duration },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="bg-card border border-border rounded-2xl p-4"
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </div>
                <div className="font-bold text-sm">{value}</div>
              </div>
            ))}
            <div className="bg-card border border-border rounded-2xl p-4 flex items-center gap-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary/10 border border-primary/20 text-primary rounded-xl hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label="Visit project"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-accent border border-border rounded-xl hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label="View on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Hero image */}
          <div className="aspect-video rounded-3xl overflow-hidden mb-16 border border-border shadow-2xl shadow-primary/10">
            <img
              src={getImagePath(project.image)}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=675&fit=crop`;
              }}
            />
          </div>

          {/* Content sections */}
          <div className="space-y-14">
            {[
              { title: "Overview", content: project.overview },
              { title: "The Challenge", content: project.challenge },
              { title: "The Solution", content: project.solution },
            ].map(({ title, content }) => (
              <motion.section
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-6 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-blue-500" />
                  <h2 className="text-2xl font-bold">{title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-4">
                  {content}
                </p>
              </motion.section>
            ))}

            {/* Key Results */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-6 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-blue-500" />
                <h2 className="text-2xl font-bold">Key Results</h2>
              </div>
              <div className="grid gap-3 pl-4">
                {project.results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-start gap-3 p-4 bg-card border border-border rounded-2xl hover:border-primary/30 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{result}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Technologies */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-6 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500" />
                <h2 className="text-2xl font-bold">Technologies Used</h2>
              </div>
              <div className="flex flex-wrap gap-3 pl-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-secondary text-secondary-foreground border border-border rounded-xl text-sm font-medium hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.section>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-10 rounded-3xl border border-primary/20 text-center relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(79,70,229,0.08) 0%, rgba(168,85,247,0.08) 100%)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-blue-500/5 pointer-events-none" />
            <h3 className="text-2xl font-bold mb-3 relative">
              Interested in similar work?
            </h3>
            <p className="text-muted-foreground mb-6 relative">
              Let's discuss your project and create something amazing together.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all relative"
              style={{
                background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
              }}
            >
              Let's Talk About Your Project
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
