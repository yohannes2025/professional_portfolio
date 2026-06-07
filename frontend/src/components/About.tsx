import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-8">About Me</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              I am a passionate Full-Stack Developer specializing in building
              modern, scalable, and user-friendly web applications.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              With expertise in React, Django, TypeScript, and cloud
              technologies, I turn complex problems into elegant digital
              solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { num: "3+", label: "Years Experience" },
              { num: "15+", label: "Projects Delivered" },
              { num: "10+", label: "Technologies Mastered" },
              { num: "100%", label: "Client Satisfaction" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-800 rounded-3xl p-8 text-center hover:border-cyan-400 border border-transparent transition"
              >
                <h4 className="text-5xl font-bold text-cyan-400 mb-2">
                  {item.num}
                </h4>
                <p className="text-slate-400">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
