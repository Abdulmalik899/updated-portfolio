'use client';
import { SectionTitle} from "./skills";
import { Award, GraduationCap } from "lucide-react";
const EducationCard: React.FC<{
  icon: React.ElementType;
  title: string;
  subtitle: string;
  detail: string;
  extra?: string;
  evenextra?: string;
  colorScheme: {
    bg: string;
    border: string;
    icon: string;
    text: string;
  }
}> = ({ icon: Icon, title, subtitle, detail, extra, evenextra,  colorScheme }) => (
  <div className={`bg-gradient-to-br ${colorScheme.bg} p-8 rounded-xl backdrop-blur-sm border ${colorScheme.border} hover:border-opacity-50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl`}>
    <div className="flex items-center gap-3 mb-4">
      <Icon className={colorScheme.icon} size={32} />
      <h3 className="text-2xl font-bold">{title}</h3>
    </div>
    <p className={`${colorScheme.text} text-lg mb-2`}>{subtitle}</p>
    <p className="text-gray-400 mb-2">{detail}</p>
    {extra && <p className="text-gray-400">{extra}</p>}
    <p className="text-gray-400 mb-2">{evenextra}</p>
  </div>
);

// Education Section Component
const EducationSection = () => {
  const educationData = [
    {
      icon: GraduationCap,
      title: "University of Lagos",
      subtitle: "B.Sc. Systems Engineering",
      detail: "Year 3 (Ongoing)",
      extra: "Expected Graduation: 2028",
      evenextra:"Current CGPA: 4.20/5.00 ",
      colorScheme: { bg: "from-purple-900/40 to-slate-800/40", border: "border-purple-500/20", icon: "text-purple-400", text: "text-purple-300" }
    },
    {
      icon: Award,
      title: "Zulfah Academy",
      subtitle: "Front-End Development Program",
      detail: "Completed: February 2025",
      extra: "React.js, Next.js, TypeScript, Git/GitHub, and modern tooling with code reviews",
      colorScheme: { bg: "from-pink-900/40 to-slate-800/40", border: "border-pink-500/20", icon: "text-pink-400", text: "text-pink-300" }
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <SectionTitle icon={GraduationCap} title="Education & Training" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, idx) => (
            <EducationCard key={idx} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default EducationSection;