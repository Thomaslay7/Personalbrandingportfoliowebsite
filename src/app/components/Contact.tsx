import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send, CheckCircle, Sparkles } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;
    const emailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nSubject: ${subject}\n\nMessage:\n${message}`,
    );

    // Redirect to email client
    window.location.href = `mailto:merrythomas909@gmail.com?subject=${encodeURIComponent(subject)}&body=${emailBody}`;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "merrythomas909@gmail.com",
      href: "mailto:merrythomas909@gmail.com",
      color: "text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62 896 37717 620",
      href: "tel:+6289637717620",
      color: "text-violet-500 bg-violet-100 dark:bg-violet-900/30",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Indonesia",
      href: null,
      color: "text-blue-500 bg-blue-100 dark:bg-blue-900/30",
    },
  ];

  return (
    <section
      id="contact"
      className="py-28 px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />

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
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Get in Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Let's Build Something{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #4f46e5 0%, #a855f7 100%)",
              }}
            >
              Amazing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your
            vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-card rounded-3xl p-8 border border-border space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Contact Info</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I'm currently available for freelance projects and interesting
                  opportunities. Feel free to reach out — I typically respond
                  within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map(
                  ({ icon: Icon, label, value, href, color }) => (
                    <div key={label} className="flex items-center gap-4">
                      <div className={`p-3 rounded-2xl ${color} flex-shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-0.5">
                          {label}
                        </div>
                        {href ? (
                          <a
                            href={href}
                            className="font-semibold hover:text-primary transition-colors text-sm"
                          >
                            {value}
                          </a>
                        ) : (
                          <div className="font-semibold text-sm">{value}</div>
                        )}
                      </div>
                    </div>
                  ),
                )}
              </div>

              <div className="pt-6 border-t border-border">
                <div className="text-xs text-muted-foreground mb-3 uppercase tracking-wider font-semibold">
                  Response Time
                </div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                  </span>
                  <span className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                    Usually within 24 hours
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-3xl p-8 border border-border space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input-background rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-sm"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input-background rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-sm"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input-background rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-sm"
                  placeholder="Project Collaboration / Freelance Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-input-background rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all resize-none text-sm"
                  placeholder="Tell me about your project, timeline, and budget..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={submitted}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-60 shadow-lg hover:shadow-xl"
                style={{
                  background: submitted
                    ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
                    : "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                  color: "#fff",
                  boxShadow: submitted
                    ? "0 10px 30px rgba(16,185,129,0.3)"
                    : "0 10px 30px rgba(79,70,229,0.35)",
                }}
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent Successfully!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
