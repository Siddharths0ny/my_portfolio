import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronRight } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { projects } from '../data/portfolio';

// Extract all unique tech tags
const allTechTags = ['All', ...new Set(projects.flatMap(p => p.techStack))];

function ProjectCard({ project, index, theme }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className={`group relative rounded-2xl overflow-hidden transition-all duration-500 ${
        theme === 'dark'
          ? 'bg-white/[0.02] border border-white/[0.06] hover:border-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/5'
          : 'bg-white border border-gray-200 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-500/5'
      }`}
    >
      {/* Card header gradient */}
      <div className="h-1.5 bg-gradient-to-r from-primary-500 via-accent-400 to-primary-500 bg-300% animate-gradient opacity-60 group-hover:opacity-100 transition-opacity" />

      <div className="p-6 md:p-7">
        {/* Year tag + Links */}
        <div className="flex items-center justify-between mb-4">
          <span className={`text-xs font-mono tracking-wider ${
            theme === 'dark' ? 'text-primary-400/70' : 'text-primary-500'
          }`}>
            {project.year}
          </span>
          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-all duration-300 ${
                  theme === 'dark'
                    ? 'text-gray-500 hover:text-white hover:bg-white/[0.06]'
                    : 'text-gray-400 hover:text-gray-900 hover:bg-gray-100'
                }`}
                aria-label={`GitHub repository for ${project.title}`}
              >
                <FiGithub size={16} />
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-all duration-300 ${
                  theme === 'dark'
                    ? 'text-gray-500 hover:text-white hover:bg-white/[0.06]'
                    : 'text-gray-400 hover:text-gray-900 hover:bg-gray-100'
                }`}
                aria-label={`Live demo for ${project.title}`}
              >
                <FiExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className={`text-lg md:text-xl font-heading font-bold mb-3 group-hover:gradient-text-static transition-all duration-300 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className={`text-sm leading-relaxed mb-5 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
        }`}>
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-2 mb-5">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2">
              <FiChevronRight className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${
                theme === 'dark' ? 'text-primary-400' : 'text-primary-500'
              }`} />
              <span className={`text-xs ${
                theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
              }`}>
                {h}
              </span>
            </li>
          ))}
        </ul>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map(tech => (
            <span
              key={tech}
              className={`px-2.5 py-1 text-[11px] font-medium rounded-md ${
                theme === 'dark'
                  ? 'bg-primary-500/10 text-primary-300 border border-primary-500/10'
                  : 'bg-primary-50 text-primary-600 border border-primary-200'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.techStack.includes(activeFilter));

  return (
    <section
      id="projects"
      ref={ref}
      className={`section-padding relative overflow-hidden ${
        theme === 'dark' ? 'bg-surface-950' : 'bg-gray-50/50'
      }`}
    >
      {/* Background accent */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-primary-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary-400 text-sm font-mono tracking-wider mb-3 uppercase">
            // Featured Work
          </p>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Things I've
            <span className="gradient-text-static"> built</span>
            <span className="text-primary-500">.</span>
          </h2>
          <p className={`mt-4 text-base max-w-xl ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}>
            A selection of projects that showcase my approach to solving real problems with clean code and thoughtful design.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {allTechTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all duration-300 ${
                activeFilter === tag
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-md shadow-primary-500/20'
                  : theme === 'dark'
                    ? 'text-gray-400 bg-white/[0.03] border border-white/[0.06] hover:text-white hover:bg-white/[0.06]'
                    : 'text-gray-500 bg-white border border-gray-200 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} theme={theme} />
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className={`text-lg ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
            }`}>
              No projects match this filter. Try another category!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
