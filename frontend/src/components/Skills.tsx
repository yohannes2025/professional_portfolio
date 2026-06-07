import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { fetchSkills } from "../services/api";

export default function Skills() {
  const { data: skills = [] } = useQuery({
    queryKey: ["skills"],
    queryFn: fetchSkills,
  });

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill: any, index: number) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900 rounded-3xl p-8"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold">{skill.name}</h3>
                <span className="text-cyan-400 font-medium">
                  {skill.proficiency}%
                </span>
              </div>
              <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiency}%` }}
                  transition={{ duration: 1.2, delay: index * 0.1 }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
