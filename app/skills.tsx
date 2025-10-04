'use client';
import { Code } from "lucide-react";
const SkillBadge: React.FC<{ skill: string; delay: number }> = ({ skill, delay }) => (
  <span 
    className="px-3 py-1 bg-purple-500/20 rounded-full text-sm hover:bg-purple-500/40 transition-colors cursor-default"
    style={{ animationDelay: `${delay}ms` }}
  >
    {skill}
  </span>
);

// Skill Category Card Component
const SkillCard: React.FC<{ category: string; items: string[]; delay: number }> = ({ category, items, delay }) => (
  <div 
    className="bg-gradient-to-br from-purple-900/40 to-slate-800/40 p-6 rounded-xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
    style={{ animationDelay: `${delay}ms` }}
  >
    <h3 className="text-xl font-semibold mb-4 text-purple-300 capitalize">
      {category === 'apis' ? 'APIs' : category}
    </h3>
    <div className="flex flex-wrap gap-2">
      {items.map((skill, i) => (
        <SkillBadge key={i} skill={skill} delay={i * 50} />
      ))}
    </div>
  </div>
);

// Skills Section Component
const SkillsSection = () => {
  const skills = {
    languages: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js'],
    tools: ['Git', 'GitHub', 'GitLab', 'NPM', 'Yarn', 'Vite', 'Figma', 'Chrome Dev Tools', 'VScode'],
    apis: ['REST APIs', 'Fetch', 'Axios'],
    soft: ['Problem Solving', 'Collaboration', 'Adaptable & Resilient', 'Strong Analytical Skills']
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <SectionTitle icon={Code} title="Technical Skills" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], idx) => (
            <SkillCard key={category} category={category} items={items} delay={idx * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Section Title Component
 const  SectionTitle: React.FC<{ icon: React.ElementType; title: string }> = ({ icon: Icon, title }) => (
  <h2 className="text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3">
    <Icon className="animate-bounce" /> {title}
  </h2>
);
export {SectionTitle};
export default SkillsSection;
