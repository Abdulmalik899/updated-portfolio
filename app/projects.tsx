'use client';
import { SectionTitle } from "./skills";
import { Briefcase, ExternalLink } from "lucide-react";
const ProjectHighlight: React.FC<{ highlight: string }> = ({ highlight }) => (
  <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs text-purple-200">
    {highlight}
  </span>
);

// Project Card Component
const ProjectCard: React.FC<{ 
  project: {
    title: string;
    tech: string;
    description: string;
    highlights: string[];
  }
}> = ({ project }) => (
  <div className="bg-gradient-to-br from-slate-800/60 to-purple-900/30 p-6 rounded-xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/30 group">
    <div className="flex items-start justify-between mb-4">
      <h3 className="text-2xl font-bold text-purple-300 group-hover:text-purple-200 transition-colors">
        {project.title}
      </h3>
      <ExternalLink className="text-purple-400 group-hover:rotate-45 transition-transform duration-300" size={20} />
    </div>
    <p className="text-sm text-purple-400 mb-3 font-mono">{project.tech}</p>
    <p className="text-gray-300 mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.highlights.map((highlight, i) => (
        <ProjectHighlight key={i} highlight={highlight} />
      ))}
    </div>
  </div>
);


const ProjectsSection = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      tech: 'React, CSS Modules, GitHub Pages',
      description: 'Responsive portfolio with modular components and Git-based workflow',
      highlights: ['Modular Components', 'GitHub Pages Deployment', 'Version Control']
    },
    {
      title: 'Blog Application',
      tech: 'Next.js, Tailwind CSS, Markdown',
      description: 'Static blog with SSG optimization for performance and SEO',
      highlights: ['Static Site Generation', 'SEO Optimized', 'Responsive Design']
    },
    {
      title: 'GitHub Profile Viewer',
      tech: 'React, TypeScript, GitHub API',
      description: 'TypeScript app integrating GitHub REST API with error handling',
      highlights: ['API Integration', 'TypeScript', 'Async Programming']
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle icon={Briefcase} title="Featured Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;