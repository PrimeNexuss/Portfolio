import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { useWebAnimation, fadeInUp, staggerOptions } from "@/app/hooks/useWebAnimation";
import { ParticleBackground } from "./ParticleBackground";

interface Project {
  title: string;
  description: string;
  tags: string[];
  year: string;
  cvss?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "NexScan - Unified Security Scanner",
    description: "Nex-Experience Unified Security Scanner. A comprehensive, modular CLI security scanner consolidating port scanning, web crawling, vulnerability detection, threat intelligence, and reporting into a single Python-native tool with zero required pip dependencies.",
    tags: ["Python", "Security Scanner", "CLI", "Vulnerability Detection"],
    year: "2026",
    github: "https://github.com/PrimeNexuss/NexScan"
  },
  {
    title: "NexOps - Security Operations Platform",
    description: "Enterprise-Grade Security Operations Platform. A comprehensive Ruby on Rails application for managing security assessments, tracking vulnerabilities, and generating professional security reports. Features include real-time notifications, advanced analytics, role-based access control, and a modern dark-themed UI.",
    tags: ["Ruby on Rails", "Security Operations", "Vulnerability Management", "Analytics"],
    year: "2026",
    github: "https://github.com/PrimeNexuss/NexOps"
  },
  {
    title: "NexAPI - API Penetration Testing Lab",
    description: "A deliberately vulnerable REST API for security research and offensive web exploitation practice. Built as a training target for API security testing and penetration testing exercises.",
    tags: ["Ruby", "REST API", "Security Lab", "Penetration Testing"],
    year: "2026",
    github: "https://github.com/PrimeNexuss/NexAPI"
  },
  {
    title: "RimulaaH - Vulnerable Affiliate Network",
    description: "Vulnerable Affiliate Network (Nex-Experience CTF Lab). A deliberately vulnerable Flask web application themed as an MLM/affiliate wealth network platform. Built as a training target for web application penetration testing.",
    tags: ["Python", "Flask", "Web Security", "CTF Lab"],
    year: "2026",
    github: "https://github.com/PrimeNexuss/RiMulaaH"
  },
  {
    title: "Nex-Experience-CTF-Easy",
    description: "A custom Debian-based Capture The Flag (CTF) virtual machine built for cybersecurity training, red teaming practice, and hands-on exploitation. Features fully automated installation, vulnerable services, privilege escalation paths, hidden flags, steganography challenges, and wordlist-based attacks.",
    tags: ["Shell", "CTF", "Virtual Machine", "Penetration Testing"],
    year: "2026",
    github: "https://github.com/PrimeNexuss/Nex-Experience-CTF-Easy"
  },
  {
    title: "Zero Trust Network Infrastructure",
    description: "Architected and deployed Zero Trust Network Infrastructure (ZTNI) for Nex-Experience, implementing robust verification protocols for all network requests with stringent security regardless of origin.",
    tags: ["Zero Trust", "Network Architecture", "Access Control", "Security Design"],
    year: "2026",
    github: "https://github.com/PrimeNexuss/Nex-Exp"
  },
  {
    title: "DrippingBlues - VulnHub Penetration Test",
    description: "Full black-box penetration test achieving root via anonymous FTP password-protected ZIP, LFI vulnerability exploitation, hardcoded credential extraction, and CVE-2021-4034 PwnKit privilege escalation.",
    tags: ["LFI", "PwnKit", "CVE-2021-4034", "John the Ripper"],
    year: "2026",
    cvss: "7.8",
    github: "https://github.com/PrimeNexuss/DrippingBlues-Vm-Report"
  },
  {
    title: "Earth - VulnHub CTF",
    description: "Multi-vhost penetration test: XOR known-plaintext key recovery via CyberChef, base64-encoded reverse shell filter bypass, and SUID binary privilege escalation using ltrace analysis. Complete root compromise.",
    tags: ["XOR Cryptanalysis", "RCE", "SUID Exploitation", "ltrace"],
    year: "2026",
    cvss: "9.8",
    github: "https://github.com/PrimeNexuss/Earth-VM-Report"
  },
  {
    title: "Boverflow - GLPI PHP Injection",
    description: "Exploited CVE-2022-35914 (GLPI htmLawed PHP Injection) via Metasploit for unauthenticated RCE, then escalated to root via SUID binary with hardcoded credentials.",
    tags: ["CVE-2022-35914", "PHP Injection", "Metasploit", "SUID"],
    year: "2026",
    cvss: "9.8",
    github: "https://github.com/PrimeNexuss/Boverflow-Vm"
  },
  {
    title: "Toppo - Directory Indexing to Root",
    description: "Exploited directory indexing and information disclosure (plaintext credentials in /admin/notes.txt), authenticated via SSH, and escalated to root via passwordless sudo AWK using GTFOBins shell escape.",
    tags: ["Information Disclosure", "Sudo PrivEsc", "GTFOBins", "AWK"],
    year: "2026",
    cvss: "9.8",
    github: "https://github.com/PrimeNexuss/Toppo-Vm"
  },
  {
    title: "Recon - WordPress to Docker Escape",
    description: "WordPress 5.3.20 exploitation: WPScan credential brute-force, e-Learning plugin arbitrary file upload RCE, GDB sudo shell escape to offensivehack, and Docker group abuse for full root filesystem access.",
    tags: ["WordPress", "WPScan", "File Upload", "Docker Escape"],
    year: "2026",
    cvss: "9.8",
    github: "https://github.com/PrimeNexuss/Recon-Vm"
  },
  {
    title: "Metasploitable2 - vsftpd Backdoor",
    description: "Exploited CVE-2011-2523 backdoor in vsftpd 2.3.4 using Metasploit to trigger smiley username backdoor, opening bind shell on port 6200 as root. Unauthenticated root shell obtained.",
    tags: ["CVE-2011-2523", "Metasploit", "Backdoor", "Supply Chain"],
    year: "2026",
    cvss: "9.8",
    github: "https://github.com/PrimeNexuss/Metasploitable2-Report"
  },
  {
    title: "DC-1 - Drupalgeddon2 Exploitation",
    description: "Full black-box penetration test exploiting CVE-2018-7600 (Drupalgeddon2) via Metasploit for unauthenticated RCE as www-data, then escalated to root via SUID find binary using GTFOBins. All 5 flags captured.",
    tags: ["Drupalgeddon2", "CVE-2018-7600", "Metasploit", "SUID"],
    year: "2026",
    cvss: "9.8",
    github: "https://github.com/PrimeNexuss/DC-1-Vm"
  },
  {
    title: "Mr. Robot - WordPress Multi-Stage Attack",
    description: "Multi-stage attack: extracted custom wordlist (fsocity.dic) from robots.txt, brute-forced WordPress credentials with WPScan, injected PHP reverse shell via Theme Editor, and escalated via SUID nmap interactive mode.",
    tags: ["WordPress", "WPScan", "PHP RCE", "SUID nmap"],
    year: "2026",
    github: "https://github.com/PrimeNexuss/MrRobot-Vm"
  },
  {
    title: "Vegeta: 1 - Credential Recovery Chain",
    description: "Multi-stage credential recovery: decoded Base64 HTML comment → QR code → password, Morse code audio → SSH credentials. Escalated to root by exploiting world-writable /etc/passwd with MD5 crypt hash injection.",
    tags: ["Steganography", "Password Cracking", "/etc/passwd", "Privilege Escalation"],
    year: "2026",
    cvss: "9.8",
    github: "https://github.com/PrimeNexuss/Vegeta1-Vm"
  },
  {
    title: "GainPower - PwnKit Exploitation",
    description: "Discovered exposed /secret/ directory via Nikto, cracked PKZIP hash with John the Ripper to recover SSH credentials, then exploited CVE-2021-4034 (PwnKit) for direct root escalation without password.",
    tags: ["PwnKit", "CVE-2021-4034", "John the Ripper", "Nikto"],
    year: "2026",
    cvss: "7.8",
    github: "https://github.com/PrimeNexuss/GainPower-PwnKit"
  },
  {
    title: "GainPower - Multi-Hop Privilege Escalation",
    description: "Advanced multi-hop privilege escalation: pivoted from employee1 → employee64 → programmer via sudo unshare (GTFOBins), then abused insecure cron script to plant SUID bash binary for root access.",
    tags: ["Sudo Misconfiguration", "Cron Abuse", "SUID", "Multi-Hop"],
    year: "2026",
    cvss: "8.8",
    github: "https://github.com/PrimeNexuss/GainPower-sudo-root"
  },
  {
    title: "Investigator - Android ADB Exploitation",
    description: "Android x86 penetration test: discovered unauthenticated ADB service on TCP 5555, connected remotely, escalated to root via unrestricted su, and bypassed lock screen by deleting gesture.key and password.key.",
    tags: ["Android", "ADB", "Lock Screen Bypass", "Mobile Security"],
    year: "2026",
    cvss: "9.8",
    github: "https://github.com/PrimeNexuss/Investigator-Vm"
  }
];

export function Projects() {
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

  const getCvssColor = (cvss?: string) => {
    if (!cvss) return 'bg-slate-800 border-slate-700 text-slate-300';
    const score = parseFloat(cvss);
    if (score >= 9.0) return 'bg-red-950/50 border-red-500 text-red-400';
    if (score >= 7.0) return 'bg-orange-950/50 border-orange-500 text-orange-400';
    if (score >= 4.0) return 'bg-yellow-950/50 border-yellow-500 text-yellow-400';
    return 'bg-green-950/50 border-green-500 text-green-400';
  };

  return (
    <section id="projects" className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-slate-950 to-slate-900 relative overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(239, 68, 68, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 ref={titleRef.elementRef as any} className="text-3xl sm:text-4xl md:text-5xl text-center mb-3 sm:mb-4 text-white font-bold">
          <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <p ref={subtitleRef.elementRef as any} className="text-center text-slate-400 mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto px-4 text-sm sm:text-base">
          Real-world security projects and achievements
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => {
            const cardRef = useWebAnimation({
              keyframes: fadeInUp,
              options: staggerOptions(index * 50),
              trigger: 'scroll'
            });
            return (
              <Card
                key={index}
                ref={cardRef.elementRef as any}
                className="group p-5 sm:p-6 bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 backdrop-blur-xl flex flex-col hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="outline" className="border-red-500/50 text-red-400 bg-red-950/30 text-xs font-medium">
                    {project.year}
                  </Badge>
                  {project.cvss && (
                    <Badge variant="outline" className={`${getCvssColor(project.cvss)} text-xs font-medium`}>
                      CVSS {project.cvss}
                    </Badge>
                  )}
                </div>

                <h3 className="text-base sm:text-lg md:text-xl mb-3 text-white font-semibold group-hover:text-red-400 transition-colors break-words">{project.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm mb-4 flex-grow leading-relaxed break-words">{project.description}</p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="bg-slate-800/80 border-slate-700 text-slate-300 text-[10px] sm:text-xs hover:bg-slate-700 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 4 && (
                    <Badge variant="secondary" className="bg-slate-800/80 border-slate-700 text-slate-400 text-[10px] sm:text-xs">
                      +{project.tags.length - 4}
                    </Badge>
                  )}
                </div>
                
                {project.github && (
                  <div className="flex gap-2 mt-auto">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-red-500/50 text-red-400 bg-red-950/20 hover:bg-red-600 hover:border-red-500 hover:text-white transition-all duration-300 text-xs sm:text-sm font-medium"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="size-3 sm:size-4 mr-1 sm:mr-2" />
                        View Report
                      </a>
                    </Button>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
