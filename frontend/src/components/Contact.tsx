// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { toast } from "react-toastify";
// import { motion } from "framer-motion";
// import { Send } from "lucide-react";
// import { submitContact } from "../services/api";

// const contactSchema = z.object({
//   name: z.string().min(2, "Name must be at least 2 characters"),
//   email: z.string().email("Please enter a valid email"),
//   subject: z.string().min(5, "Subject must be at least 5 characters"),
//   message: z.string().min(10, "Message must be at least 10 characters"),
// });

// type ContactForm = z.infer<typeof contactSchema>;

// export default function Contact() {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors, isSubmitting },
//   } = useForm<ContactForm>({
//     resolver: zodResolver(contactSchema),
//   });

//   const onSubmit = async (data: ContactForm) => {
//     try {
//       await submitContact(data);
//       toast.success("✅ Message sent successfully! I'll reply soon.");
//       reset();
//     } catch (error) {
//       toast.error("Failed to send message. Please try again.");
//     }
//   };

//   return (
//     <section id="contact" className="py-24 bg-slate-900/50">
//       <div className="max-w-4xl mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-5xl font-bold mb-6">Let's Work Together</h2>
//           <p className="text-slate-400 text-lg max-w-2xl mx-auto">
//             I'm currently available for freelance projects, full-time
//             opportunities, and interesting collaborations.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-5 gap-12">
//           {/* Contact Info */}
//           <div className="lg:col-span-2 space-y-8">
//             <div className="bg-slate-800 rounded-3xl p-8">
//               <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
//               <div className="space-y-6">
//                 <div>
//                   <p className="text-slate-400 text-sm">Email</p>
//                   <a
//                     href="mailto:yohannes@example.com"
//                     className="text-cyan-400 hover:underline"
//                   >
//                     yohannes@example.com
//                   </a>
//                 </div>
//                 <div>
//                   <p className="text-slate-400 text-sm">Location</p>
//                   <p className="text-white">Addis Ababa, Ethiopia / Remote</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="lg:col-span-3">
//             <form
//               onSubmit={handleSubmit(onSubmit)}
//               className="bg-slate-800 rounded-3xl p-10 space-y-6"
//             >
//               <div>
//                 <input
//                   {...register("name")}
//                   placeholder="Your Full Name"
//                   className="w-full px-6 py-4 bg-slate-900 border border-slate-700 rounded-2xl focus:border-cyan-400 outline-none transition"
//                 />
//                 {errors.name && (
//                   <p className="text-red-400 text-sm mt-1">
//                     {errors.name.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <input
//                   {...register("email")}
//                   type="email"
//                   placeholder="Your Email Address"
//                   className="w-full px-6 py-4 bg-slate-900 border border-slate-700 rounded-2xl focus:border-cyan-400 outline-none transition"
//                 />
//                 {errors.email && (
//                   <p className="text-red-400 text-sm mt-1">
//                     {errors.email.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <input
//                   {...register("subject")}
//                   placeholder="Subject"
//                   className="w-full px-6 py-4 bg-slate-900 border border-slate-700 rounded-2xl focus:border-cyan-400 outline-none transition"
//                 />
//                 {errors.subject && (
//                   <p className="text-red-400 text-sm mt-1">
//                     {errors.subject.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <textarea
//                   {...register("message")}
//                   rows={6}
//                   placeholder="Tell me about your project..."
//                   className="w-full px-6 py-4 bg-slate-900 border border-slate-700 rounded-2xl focus:border-cyan-400 outline-none transition resize-none"
//                 />
//                 {errors.message && (
//                   <p className="text-red-400 text-sm mt-1">
//                     {errors.message.message}
//                   </p>
//                 )}
//               </div>

//               <motion.button
//                 type="submit"
//                 disabled={isSubmitting}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-600 text-black font-semibold rounded-2xl flex items-center justify-center gap-3 transition"
//               >
//                 {isSubmitting ? "Sending..." : "Send Message"}
//                 <Send size={20} />
//               </motion.button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// src/components/Contact.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { submitContact } from "../services/api";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      await submitContact(data);
      toast.success("✅ Message sent successfully! I'll reply soon.");
      reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    /* 👇 FIXED: Section wrapper color states updated to handle light and dark mode smoothly */
    <section
      id="contact"
      className="py-24 bg-slate-100 dark:bg-slate-900/50 text-slate-900 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            I'm currently available for full-time opportunities, freelance
            projects, and interesting collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info Card */}
          <div className="lg:col-span-2 space-y-8">
            {/* 👇 FIXED: Card background and text updated for dynamic accessibility */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 rounded-3xl p-8 shadow-sm dark:shadow-none">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">
                    Email
                  </p>
                  {/* 👇 FIXED: Production email address configured */}
                  <a
                    href="mailto:yohannes.m.tekle@gmail.com"
                    className="text-cyan-600 dark:text-cyan-400 hover:underline font-medium break-all"
                  >
                    yohannes.m.tekle@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">
                    Location
                  </p>
                  <p className="font-medium text-slate-800 dark:text-slate-200">
                    Cologne, Germany — Available Globally & Remote
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Wrapper */}
          <div className="lg:col-span-3">
            {/* 👇 FIXED: Form background and dynamic color accents assigned */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 rounded-3xl p-10 space-y-6 shadow-sm dark:shadow-none"
            >
              <div>
                <input
                  {...register("name")}
                  placeholder="Your Full Name"
                  className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl focus:border-cyan-500 dark:focus:border-cyan-400 outline-none transition text-slate-900 dark:text-white"
                />
                {errors.name && (
                  <p className="text-red-500 dark:text-red-400 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl focus:border-cyan-500 dark:focus:border-cyan-400 outline-none transition text-slate-900 dark:text-white"
                />
                {errors.email && (
                  <p className="text-red-500 dark:text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register("subject")}
                  placeholder="Subject"
                  className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl focus:border-cyan-500 dark:focus:border-cyan-400 outline-none transition text-slate-900 dark:text-white"
                />
                {errors.subject && (
                  <p className="text-red-500 dark:text-red-400 text-sm mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  {...register("message")}
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl focus:border-cyan-500 dark:focus:border-cyan-400 outline-none transition text-slate-900 dark:text-white resize-none"
                />
                {errors.message && (
                  <p className="text-red-500 dark:text-red-400 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-cyan-500 hover:bg-cyan-600 dark:hover:bg-cyan-400 disabled:bg-slate-300 dark:disabled:bg-slate-600 text-white dark:text-black font-semibold rounded-2xl flex items-center justify-center gap-3 transition"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={20} />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
