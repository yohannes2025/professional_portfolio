// src/App.tsx
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Router>
          {/* 👇 FIXED: Changed static bg-slate-950 text-white to dynamic, responsive Tailwind classes */}
          <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white font-sans transition-colors duration-300">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Testimonials />
              <Blog />
              <Contact />
            </main>
            <Footer />
          </div>
          <ToastContainer
            position="bottom-right"
            theme="dark"
            autoClose={4000}
            hideProgressBar={false}
          />
        </Router>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
