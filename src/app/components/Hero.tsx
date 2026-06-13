import { Shield, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { useWebAnimation, fadeInUp, staggerOptions } from "@/app/hooks/useWebAnimation";
import { ParticleBackground } from "./ParticleBackground";
import { useState, useEffect } from "react";

export function Hero() {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);

  useEffect(() => {
    // Show first line after a delay
    setTimeout(() => setShowText1(true), 500);
    // Show second line after first line
    setTimeout(() => setShowText2(true), 2000);
  }, []);

  const iconRef = useWebAnimation({
    keyframes: fadeInUp,
    options: staggerOptions(0),
    trigger: 'mount'
  });

  const titleRef = useWebAnimation({
    keyframes: fadeInUp,
    options: staggerOptions(100),
    trigger: 'mount'
  });

  const subtitleRef = useWebAnimation({
    keyframes: fadeInUp,
    options: staggerOptions(200),
    trigger: 'mount'
  });

  const descriptionRef = useWebAnimation({
    keyframes: fadeInUp,
    options: staggerOptions(300),
    trigger: 'mount'
  });

  const buttonsRef = useWebAnimation({
    keyframes: fadeInUp,
    options: staggerOptions(400),
    trigger: 'mount'
  });

  const socialRef = useWebAnimation({
    keyframes: fadeInUp,
    options: staggerOptions(500),
    trigger: 'mount'
  });

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-slate-950 to-slate-900 text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <ParticleBackground />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div ref={iconRef.elementRef as any} className="flex justify-center mb-4 sm:mb-6">
          <div className="relative" style={{ animation: 'float 3s ease-in-out infinite' }}>
            <Shield className="size-16 sm:size-20 md:size-24 text-red-500 animate-pulse" />
            <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full"></div>
          </div>
        </div>
        
        <h1 ref={titleRef.elementRef as any} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent relative animate-glow pb-2">
          Greg Ochieng
        </h1>

        <p ref={subtitleRef.elementRef as any} className={`text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-2 sm:mb-3 min-h-[2rem] break-words transition-all duration-700 ${showText1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Cybersecurity Professional | Penetration Tester
        </p>
        <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-6 sm:mb-8 min-h-[2rem] break-words transition-all duration-700 ${showText2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Founder, Nex-Experience Consultancies
        </p>

        <p ref={descriptionRef.elementRef as any} className="text-xs sm:text-sm text-slate-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4 break-words">
          A highly motivated and analytical cybersecurity professional with a strong foundation in information science and software development. Experienced in penetration testing, vulnerability assessment, and hands-on exploitation of real-world attack vectors in controlled lab environments. Committed to continuous professional growth and enhancing organizational security postures.
        </p>
        
        <div ref={buttonsRef.elementRef as any} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto hover:scale-105 transition-transform duration-200"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-red-500 text-red-500 hover:bg-red-500/10 w-full sm:w-auto hover:scale-105 transition-transform duration-200"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </Button>
        </div>
        
        <div ref={socialRef.elementRef as any} className="flex gap-4 sm:gap-6 justify-center">
          <a href="https://github.com/PrimeNexuss" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors hover:scale-110 transition-transform duration-200">
            <Github className="size-5 sm:size-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors hover:scale-110 transition-transform duration-200">
            <Linkedin className="size-5 sm:size-6" />
          </a>
          <a href="mailto:ochienggreg777@gmail.com" className="hover:text-red-500 transition-colors hover:scale-110 transition-transform duration-200">
            <Mail className="size-5 sm:size-6" />
          </a>
        </div>
      </div>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes glow {
          0%, 100% {
            filter: drop-shadow(0 0 10px rgba(239, 68, 68, 0.8)) drop-shadow(0 0 20px rgba(239, 68, 68, 0.6)) drop-shadow(0 0 30px rgba(239, 68, 68, 0.4));
            transform: scale(1);
          }
          50% {
            filter: drop-shadow(0 0 20px rgba(239, 68, 68, 1)) drop-shadow(0 0 40px rgba(239, 68, 68, 0.8)) drop-shadow(0 0 60px rgba(239, 68, 68, 0.6)) drop-shadow(0 0 80px rgba(239, 68, 68, 0.4));
            transform: scale(1.02);
          }
        }
      `}</style>
    </section>
  );
}
