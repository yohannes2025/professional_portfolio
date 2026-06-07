// // src/components/Hero.tsx
// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     /* 👇 CRUCIAL FIX: Assigned id="home" right here so your navbar anchor link can track it */
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-300"
//     >
//       {/* Decorative Background Glows */}
//       <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-left grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
//         {/* Left Column: Headline Text Copy Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="space-y-6"
//         >
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400">
//             🚀 Open to exciting software opportunities
//           </div>

//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
//             Hi, I'm{" "}
//             <span className="text-cyan-500 dark:text-cyan-400">Yohannes</span>
//           </h1>

//           <h2 className="text-2xl sm:text-3xl font-bold text-slate-600 dark:text-slate-400">
//             Full-Stack Software Developer
//           </h2>

//           <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
//             I craft robust engineering systems, slick responsive interfaces, and
//             optimized REST APIs. Specializing in Python/Django backend systems
//             and React ecosystem development.
//           </p>

//           <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
//             <a
//               href="#projects"
//               className="px-6 py-3 rounded-xl font-medium shadow-sm transition bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
//             >
//               View My Work
//             </a>
//             <a
//               href="#contact"
//               className="px-6 py-3 rounded-xl font-medium transition border border-slate-300 bg-transparent hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-900"
//             >
//               Let's Connect
//             </a>
//           </div>
//         </motion.div>

//         {/* Right Column: Sleek Graphic Vector/Logo Visual Asset */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="flex justify-center relative select-none"
//         >
//           <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
//             {/* Outer Spinning Orbit Graphic Circle Component Line Layer */}
//             <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-200 dark:border-slate-800 animate-spin-slow" />

//             {/* Main Interactive Floating Icon Center Container Card */}
//             <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-white shadow-xl border border-slate-100 flex flex-col items-center justify-center p-6 space-y-3 dark:bg-slate-900 dark:border-slate-800 dark:shadow-2xl/50">
//               <span className="text-5xl sm:text-6xl animate-bounce">💻</span>
//               <div className="text-center space-y-1">
//                 <div className="font-mono text-sm font-bold text-cyan-500 dark:text-cyan-400">
//                   {"<Code />"}
//                 </div>
//                 <div className="text-xs font-semibold text-slate-400">
//                   React & Django
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// src/components/Hero.tsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-300"
    >
      {/* Dynamic Background Ambience Radial Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Column: Architectural Value Pitch Copy (Occupies 7/12 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 lg:col-span-7 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400 border border-cyan-500/20">
            ⚡ Engineering scalable web applications
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-slate-900 dark:text-white">
            Turning Complex Data Into <br />
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              High-Performance Products
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-medium">
            I am a Full-Stack Software Developer focused on bridging the gap
            between rigorous systems logic and slick user experiences. By
            blending structured data modeling with modern client-side
            architectures, I build applications that are secure, highly
            scalable, and accessible.
          </p>

          {/* Value Bullet Points instead of a list of skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg pt-2 text-sm font-medium text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-2.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs">
                ✓
              </span>
              <span>Robust Python & Django REST APIs</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs">
                ✓
              </span>
              <span>Type-Safe React & State Systems</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs">
                ✓
              </span>
              <span>Secure Authentication & Data Integrity</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs">
                ✓
              </span>
              <span>Optimized Workflows & Clean Code</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl font-semibold shadow-sm transition bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
            >
              Explore Solutions
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl font-semibold transition border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-900"
            >
              Discuss a Project
            </a>
          </div>
        </motion.div>

        {/* Right Column: Clean Premium Portrait Card Presentation (Occupies 5/12 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center relative select-none"
        >
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
            {/* Ambient Graphic Backdrop Rings */}
            <div className="absolute inset-0 rounded-full border border-slate-200/60 dark:border-slate-800/40 animate-spin-slow" />
            <div className="absolute inset-6 rounded-full border border-dashed border-slate-200 dark:border-slate-800 animate-spin-slow reverse" />

            {/* The Professional Image Container */}
            <div className="relative w-64 h-64 sm:w-76 sm:h-76 rounded-3xl overflow-hidden shadow-2xl bg-slate-200 dark:bg-slate-900 border-4 border-white dark:border-slate-800 group">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
                alt="Yohannes Tekle Professional Portrait"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Float Floating Utility Tags — adds visual development context organically */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-8 right-0 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-md text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400"
            >
              {"const tech = ['React', 'Django']"}
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute bottom-6 left-2 bg-white dark:bg-slate-900 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 shadow-md text-xs font-bold flex items-center gap-2 text-slate-800 dark:text-slate-200"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Hire</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
