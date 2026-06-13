import { Hero } from "@/app/components/Hero";
import { Skills } from "@/app/components/Skills";
import { Projects } from "@/app/components/Projects";
import { Certifications } from "@/app/components/Certifications";
import { Contact } from "@/app/components/Contact";
import { Github, Linkedin, Mail, Shield } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      
      <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-black border-t border-slate-800/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(239, 68, 68, 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 p-0.5">
                <div className="w-full h-full rounded-lg bg-slate-900 flex items-center justify-center">
                  <Shield className="size-5 text-white" />
                </div>
              </div>
              <span className="text-white font-semibold text-lg">Greg Ochieng</span>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/PrimeNexuss" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-900/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:border-red-500/50 hover:bg-red-950/30 transition-all duration-300 hover:scale-110">
                <Github className="size-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-900/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:border-red-500/50 hover:bg-red-950/30 transition-all duration-300 hover:scale-110">
                <Linkedin className="size-5" />
              </a>
              <a href="mailto:ochienggreg777@gmail.com" className="w-10 h-10 rounded-lg bg-slate-900/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:border-red-500/50 hover:bg-red-950/30 transition-all duration-300 hover:scale-110">
                <Mail className="size-5" />
              </a>
            </div>
          </div>
          <div className="border-t border-slate-800/50 pt-8 text-center">
            <p className="text-slate-400 text-sm">© 2026 Greg Ochieng. Cybersecurity Professional & Penetration Tester.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
