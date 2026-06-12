import { Shield, Lock, Bug, Network, Terminal, Database, AlertTriangle, Code } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { useWebAnimation, fadeInUp, staggerOptions } from "@/app/hooks/useWebAnimation";
import { ParticleBackground } from "./ParticleBackground";

const skills = [
  {
    icon: Shield,
    title: "Penetration Testing",
    description: "Black-box penetration testing, CTF challenges, and real-world attack vector exploitation in controlled environments",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Bug,
    title: "Vulnerability Assessment",
    description: "Comprehensive vulnerability identification, CVSS scoring, and detailed remediation reporting",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Network,
    title: "Network Security",
    description: "TCP/IP, Firewalls, VPNs, and network enumeration using Nmap, Netdiscover, and Gobuster",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Terminal,
    title: "Exploitation & Analysis",
    description: "XOR cryptanalysis, SUID exploitation, privilege escalation, and reverse shell techniques",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Lock,
    title: "Security Operations",
    description: "Incident response, security operations (SecOps), and risk management",
    color: "from-yellow-500 to-amber-500"
  },
  {
    icon: Code,
    title: "Programming & Scripting",
    description: "Python automation, Ruby on Rails, and Bash scripting for security tools",
    color: "from-indigo-500 to-violet-500"
  },
  {
    icon: Database,
    title: "System Administration",
    description: "Linux (Kali, Fedora, Ubuntu) and Windows system administration and security hardening",
    color: "from-teal-500 to-cyan-500"
  },
  {
    icon: AlertTriangle,
    title: "Security Tools",
    description: "Nmap, Gobuster, CyberChef, ltrace, Netcat, Metasploit, WPScan, John the Ripper",
    color: "from-rose-500 to-red-500"
  }
];

export function Skills() {
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

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-slate-950 to-slate-900 relative overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 ref={titleRef.elementRef as any} className="text-3xl sm:text-4xl md:text-5xl text-center mb-3 sm:mb-4 text-white font-bold">
          <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Core Competencies
          </span>
        </h2>
        <p ref={subtitleRef.elementRef as any} className="text-center text-slate-400 mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto px-4 text-sm sm:text-base">
          Comprehensive expertise across multiple domains of cybersecurity
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill, index) => {
            const cardRef = useWebAnimation({
              keyframes: fadeInUp,
              options: staggerOptions(index * 100),
              trigger: 'scroll'
            });
            return (
              <Card 
                key={index} 
                ref={cardRef.elementRef as any}
                className="group p-6 bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 backdrop-blur-xl hover:-translate-y-2"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} p-0.5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                    <skill.icon className="size-7 text-white" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl mb-3 text-white font-semibold group-hover:text-red-400 transition-colors">{skill.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{skill.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
