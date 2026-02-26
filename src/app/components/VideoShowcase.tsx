import { motion } from "motion/react";
import { Play, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

export function VideoShowcase() {
  const [isMuted, setIsMuted] = useState(true);

  const videos = [
    {
      id: "dQw4w9WgXcQ",
      title: "Web Development Tutorial",
      description: "Learn modern web development with React and Node.js",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Building Scalable Applications",
      description: "Best practices for building production-ready applications",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Cloud Architecture Deep Dive",
      description: "Mastering AWS and cloud deployment strategies",
    },
  ];

  return (
    <section className="relative py-20 px-6 lg:px-8 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #4f46e5 0%, #3b82f6 50%, #0ea5e9 100%)",
              }}
            >
              Featured Videos
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check out my latest tutorials and insights on web development, cloud
            architecture, and modern technologies.
          </p>
        </motion.div>

        {/* Featured Main Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-blue-500 to-blue-500 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 rounded-3xl" />

            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="relative aspect-video bg-slate-900">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1&modestbranding=1`}
                  title="Featured Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                />
              </div>

              {/* Overlay info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Building Modern Web Applications
                </h3>
                <p className="text-gray-300">
                  A comprehensive guide to building scalable, high-performance
                  web applications with React, Node.js, and cloud technologies.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Video Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:border-blue-500/30">
                <div className="relative aspect-video bg-slate-900 overflow-hidden">
                  {/* Video thumbnail */}
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                  </div>

                  {/* Duration or badge */}
                  <div className="absolute top-3 right-3 bg-black/70 px-3 py-1 rounded-full text-sm text-white font-semibold">
                    Tutorial
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 bg-card border-t border-white/10">
                  <h3 className="font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {video.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="https://www.youtube.com/@thomasdiky"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 group"
          >
            <span>Watch More on YouTube</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
