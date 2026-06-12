import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { useWebAnimation, fadeInUp, staggerOptions } from "@/app/hooks/useWebAnimation";
import { ParticleBackground } from "./ParticleBackground";

export function Contact() {
  const titleRef = useWebAnimation({
    keyframes: fadeInUp,
    options: staggerOptions(0),
    trigger: 'scroll'
  });

  const subtitleRef = useWebAnimation({
    keyframes: fadeInUp,
    options: staggerOptions(100),
    trigger: 'scroll'
  });

  const formRef = useWebAnimation({
    keyframes: fadeInUp,
    options: staggerOptions(0),
    trigger: 'scroll'
  });

  const emailRef = useWebAnimation({
    keyframes: fadeInUp,
    options: staggerOptions(100),
    trigger: 'scroll'
  });

  const linkedinRef = useWebAnimation({
    keyframes: fadeInUp,
    options: staggerOptions(200),
    trigger: 'scroll'
  });

  const githubRef = useWebAnimation({
    keyframes: fadeInUp,
    options: staggerOptions(300),
    trigger: 'scroll'
  });

  const locationRef = useWebAnimation({
    keyframes: fadeInUp,
    options: staggerOptions(400),
    trigger: 'scroll'
  });

  return (
    <section id="contact" className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-slate-950 to-slate-900 relative overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(239, 68, 68, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 ref={titleRef.elementRef as any} className="text-3xl sm:text-4xl md:text-5xl text-center mb-3 sm:mb-4 text-white font-bold">
          <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        <p ref={subtitleRef.elementRef as any} className="text-center text-slate-400 mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto px-4 text-sm sm:text-base">
          Interested in collaboration or have a security project? Let's connect!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <Card ref={formRef.elementRef as any} className="group p-6 sm:p-8 bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 backdrop-blur-xl">
            <h3 className="text-xl sm:text-2xl mb-4 sm:mb-6 text-white font-semibold">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <Input 
                  placeholder="Your Name" 
                  className="bg-slate-950/80 border-slate-700/50 text-white placeholder:text-slate-500 text-sm sm:text-base focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-slate-950/80 border-slate-700/50 text-white placeholder:text-slate-500 text-sm sm:text-base focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                />
              </div>
              <div>
                <Input 
                  placeholder="Subject" 
                  className="bg-slate-950/80 border-slate-700/50 text-white placeholder:text-slate-500 text-sm sm:text-base focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Your Message" 
                  rows={5}
                  className="bg-slate-950/80 border-slate-700/50 text-white placeholder:text-slate-500 text-sm sm:text-base focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all resize-none"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105">
                Send Message
              </Button>
            </form>
          </Card>
          
          <div className="space-y-4 sm:space-y-6">
            <Card ref={emailRef.elementRef as any} className="group p-5 sm:p-6 bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 backdrop-blur-xl hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 p-0.5 flex-shrink-0">
                  <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                    <Mail className="size-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-base sm:text-lg mb-1 text-white font-semibold group-hover:text-red-400 transition-colors">Email</h4>
                  <p className="text-xs sm:text-sm text-slate-400 mb-2">ochienggreg777@gmail.com</p>
                  <a href="mailto:ochienggreg777@gmail.com" className="text-red-500 text-xs sm:text-sm hover:text-red-400 transition-colors">
                    Send an email →
                  </a>
                </div>
              </div>
            </Card>
            
            <Card ref={linkedinRef.elementRef as any} className="group p-5 sm:p-6 bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 backdrop-blur-xl hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 p-0.5 flex-shrink-0">
                  <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                    <Linkedin className="size-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-base sm:text-lg mb-1 text-white font-semibold group-hover:text-blue-400 transition-colors">LinkedIn</h4>
                  <p className="text-xs sm:text-sm text-slate-400 mb-2">Connect professionally</p>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-red-500 text-xs sm:text-sm hover:text-red-400 transition-colors">
                    View profile →
                  </a>
                </div>
              </div>
            </Card>
            
            <Card ref={githubRef.elementRef as any} className="group p-5 sm:p-6 bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 backdrop-blur-xl hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-600 to-gray-700 p-0.5 flex-shrink-0">
                  <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                    <Github className="size-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-base sm:text-lg mb-1 text-white font-semibold group-hover:text-gray-400 transition-colors">GitHub</h4>
                  <p className="text-xs sm:text-sm text-slate-400 mb-2">Check out my projects</p>
                  <a href="https://github.com/PrimeNexuss" target="_blank" rel="noopener noreferrer" className="text-red-500 text-xs sm:text-sm hover:text-red-400 transition-colors">
                    View repositories →
                  </a>
                </div>
              </div>
            </Card>
            
            <Card ref={locationRef.elementRef as any} className="group p-5 sm:p-6 bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 backdrop-blur-xl hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-0.5 flex-shrink-0">
                  <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                    <MapPin className="size-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-base sm:text-lg mb-1 text-white font-semibold group-hover:text-green-400 transition-colors">Location</h4>
                  <p className="text-xs sm:text-sm text-slate-400 mb-1">Nairobi, Kenya</p>
                  <p className="text-slate-500 text-xs sm:text-sm">+254 701 754 035</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
