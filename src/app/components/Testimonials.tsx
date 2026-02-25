import { motion } from "motion/react";
import { Star, Quote, MessageSquare } from "lucide-react";
import { testimonials } from "../data/testimonials";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-28 px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
              <MessageSquare className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            What{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #4f46e5 0%, #a855f7 100%)" }}
            >
              Clients Say
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it — here's what the people I've worked with have to say.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative bg-card rounded-3xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/8 flex flex-col"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 p-2 rounded-xl bg-primary/5 border border-primary/10 text-primary/40 group-hover:text-primary/70 group-hover:bg-primary/10 transition-all">
                <Quote className="w-4 h-4" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-11 h-11 rounded-2xl object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-card" />
                </div>
                <div>
                  <div className="font-bold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role},{" "}
                    <span className="text-primary/80">{testimonial.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-card border border-border rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-center md:text-left">
            <div
              className="text-5xl font-extrabold bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #4f46e5 0%, #a855f7 100%)" }}
            >
              4.9/5
            </div>
            <div className="text-muted-foreground mt-1">Average client rating</div>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <div className="text-center md:text-right">
            <div className="text-3xl font-extrabold">30+</div>
            <div className="text-muted-foreground mt-1">Happy clients worldwide</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
