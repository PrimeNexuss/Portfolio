import { Card } from "@/app/components/ui/card";
import { Award, CheckCircle2, Briefcase } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import { useWebAnimation, fadeInUp, staggerOptions } from "@/app/hooks/useWebAnimation";
import { ParticleBackground } from "./ParticleBackground";

const education = [
  {
    name: "Diploma in Cyber Security",
    institution: "Inceptor School of Technology",
    period: "December 2025 – Present",
    status: "In Progress"
  },
  {
    name: "Bachelor of Information Science",
    institution: "University of Nairobi",
    period: "2021 – Present",
    status: "In Progress"
  },
  {
    name: "Diploma in Software Development",
    institution: "Moringa School",
    period: "2022 – 2023",
    status: "Completed"
  },
  {
    name: "Kenya Certificate of Secondary Education",
    institution: "Chianda High School",
    period: "2017 – 2021",
    status: "Mean Grade: B+"
  }
];

const experience = [
  {
    title: "Records Management Intern",
    company: "Milimani Law Courts",
    location: "Nairobi, Kenya",
    period: "June 2024 – October 2024",
    responsibilities: [
      "Assisted in organisation and maintenance of court records",
      "Managed physical and digital document filing systems",
      "Ensured accuracy and accessibility of critical information"
    ]
  }
];

const technicalSkills = [
  "Kali Linux", "Nmap", "Gobuster", "Metasploit", "WPScan",
  "CyberChef", "Netcat", "Netdiscover", "John the Ripper", "ltrace",
  "Python", "Ruby on Rails", "Bash", "Base64 Encoding",
  "XOR Cryptanalysis", "SUID Exploitation", "GTFOBins", "Nikto"
];

export function Certifications() {
  const eduTitleRef = useWebAnimation({
    keyframes: fadeInUp,
    options: staggerOptions(0),
    trigger: 'scroll'
  });

  const eduSubtitleRef = useWebAnimation({
    keyframes: fadeInUp,
    options: staggerOptions(100),
    trigger: 'scroll'
  });

  const expTitleRef = useWebAnimation({
    keyframes: fadeInUp,
    options: staggerOptions(0),
    trigger: 'scroll'
  });

  const expSubtitleRef = useWebAnimation({
    keyframes: fadeInUp,
    options: staggerOptions(100),
    trigger: 'scroll'
  });

  const techTitleRef = useWebAnimation({
    keyframes: fadeInUp,
    options: staggerOptions(0),
    trigger: 'scroll'
  });

  const techSubtitleRef = useWebAnimation({
    keyframes: fadeInUp,
    options: staggerOptions(100),
    trigger: 'scroll'
  });

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-slate-950 to-slate-900 relative overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(239, 68, 68, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 sm:mb-16">
          <h2 ref={eduTitleRef.elementRef as any} className="text-3xl sm:text-4xl md:text-5xl text-center mb-3 sm:mb-4 text-white font-bold">
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p ref={eduSubtitleRef.elementRef as any} className="text-center text-slate-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4 text-sm sm:text-base">
            Academic background and professional development
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {education.map((edu, index) => {
              const cardRef = useWebAnimation({
                keyframes: fadeInUp,
                options: staggerOptions(index * 100),
                trigger: 'scroll'
              });
              return (
                <Card
                  key={index}
                  ref={cardRef.elementRef as any}
                  className="group p-5 sm:p-6 bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 backdrop-blur-xl hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 p-0.5">
                      <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                        <Award className="size-6 text-white" />
                      </div>
                    </div>
                    <Badge variant="outline" className="border-red-500/50 text-red-400 bg-red-950/30 text-xs font-medium">
                      {edu.status}
                    </Badge>
                  </div>
                  <h3 className="text-lg sm:text-xl mb-2 text-white font-semibold group-hover:text-red-400 transition-colors">{edu.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 mb-2">{edu.institution}</p>
                  <p className="text-xs sm:text-sm text-slate-400">{edu.period}</p>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mb-12 sm:mb-16">
          <h2 ref={expTitleRef.elementRef as any} className="text-2xl sm:text-3xl md:text-4xl text-center mb-3 sm:mb-4 text-white font-bold">
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p ref={expSubtitleRef.elementRef as any} className="text-center text-slate-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4 text-sm sm:text-base">
            Professional experience and internships
          </p>

          <div className="max-w-3xl mx-auto">
            {experience.map((exp, index) => {
              const cardRef = useWebAnimation({
                keyframes: fadeInUp,
                options: staggerOptions(index * 100),
                trigger: 'scroll'
              });
              return (
                <Card
                  key={index}
                  ref={cardRef.elementRef as any}
                  className="group p-5 sm:p-6 bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 backdrop-blur-xl hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 p-0.5 flex-shrink-0">
                      <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                        <Briefcase className="size-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl mb-1 text-white font-semibold group-hover:text-red-400 transition-colors">{exp.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-300 mb-1">{exp.company} • {exp.location}</p>
                      <p className="text-xs sm:text-sm text-slate-400">{exp.period}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 ml-16">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="text-xs sm:text-sm text-slate-400 flex items-start">
                        <CheckCircle2 className="size-3 sm:size-4 mr-2 mt-0.5 text-red-500 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
        
        <div>
          <h2 ref={techTitleRef.elementRef as any} className="text-2xl sm:text-3xl md:text-4xl text-center mb-3 sm:mb-4 text-white font-bold">
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Technical Proficiency
            </span>
          </h2>
          <p ref={techSubtitleRef.elementRef as any} className="text-center text-slate-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4 text-sm sm:text-base">
            Tools and technologies I work with
          </p>
          
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center max-w-4xl mx-auto px-4">
            {technicalSkills.map((skill, index) => {
              const badgeRef = useWebAnimation({
                keyframes: fadeInUp,
                options: staggerOptions(index * 30),
                trigger: 'scroll'
              });
              return (
                <span key={index} ref={badgeRef.elementRef as any}>
                  <Badge 
                    variant="outline"
                    className="px-3 sm:px-4 py-1.5 sm:py-2 border-slate-700/50 text-slate-300 hover:border-red-500/50 hover:text-red-400 hover:bg-red-950/30 transition-all duration-300 text-xs sm:text-sm"
                  >
                    {skill}
                  </Badge>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
