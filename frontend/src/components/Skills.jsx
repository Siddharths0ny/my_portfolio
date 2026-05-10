import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiReact, SiJavascript, SiHtml5, SiCss, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiPython, SiCplusplus, SiC,
  SiGit, SiGithub, SiPostman,
  SiFirebase, SiVercel, SiNetlify,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import { TbApi } from 'react-icons/tb';
import { useTheme } from '../context/ThemeContext';

// Icon mapping
const iconMap = {
  SiReact, SiJavascript, SiHtml5, SiCss, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiPython, SiCplusplus, SiC,
  SiGit, SiGithub, VscCode, SiPostman,
  SiFirebase, SiVercel, SiNetlify, FaAws,
  TbApi,
};

const categories = [
  {
    key: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React.js', icon: 'SiReact', color: '#61DAFB' },
      { name: 'JavaScript', icon: 'SiJavascript', color: '#F7DF1E' },
      { name: 'HTML5', icon: 'SiHtml5', color: '#E34F26' },
      { name: 'CSS3', icon: 'SiCss', color: '#1572B6' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss', color: '#06B6D4' },
    ],
  },
  {
    key: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'SiNodedotjs', color: '#339933' },
      { name: 'Express.js', icon: 'SiExpress', color: '#FFFFFF' },
      { name: 'REST APIs', icon: 'TbApi', color: '#FF6C37' },
      { name: 'MongoDB', icon: 'SiMongodb', color: '#47A248' },
      { name: 'MySQL', icon: 'SiMysql', color: '#4479A1' },
    ],
  },
  {
    key: 'languages',
    label: 'Languages',
    skills: [
      { name: 'JavaScript', icon: 'SiJavascript', color: '#F7DF1E' },
      { name: 'Python', icon: 'SiPython', color: '#3776AB' },
      { name: 'C++', icon: 'SiCplusplus', color: '#00599C' },
      { name: 'C', icon: 'SiC', color: '#A8B9CC' },
    ],
  },
  {
    key: 'tools',
    label: 'Tools & Deploy',
    skills: [
      { name: 'Git', icon: 'SiGit', color: '#F05032' },
      { name: 'GitHub', icon: 'SiGithub', color: '#FFFFFF' },
      { name: 'VS Code', icon: 'VscCode', color: '#007ACC' },
      { name: 'Postman', icon: 'SiPostman', color: '#FF6C37' },
      { name: 'Firebase', icon: 'SiFirebase', color: '#FFCA28' },
      { name: 'Vercel', icon: 'SiVercel', color: '#FFFFFF' },
      { name: 'Netlify', icon: 'SiNetlify', color: '#00C7B7' },
      { name: 'AWS', icon: 'FaAws', color: '#FF9900' },
    ],
  },
];

function SkillCard({ skill, index, theme }) {
  const IconComponent = iconMap[skill.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, scale: 1.02 }}
      className={`group relative p-4 rounded-xl transition-all duration-300 cursor-default ${
        theme === 'dark'
          ? 'bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.12]'
          : 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg'
      }`}
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
        style={{ background: `radial-gradient(circle, ${skill.color}10 0%, transparent 70%)` }}
      />

      <div className="relative flex items-center gap-3">
        {IconComponent && (
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
            style={{ background: `${skill.color}15` }}
          >
            <IconComponent
              size={22}
              style={{ color: skill.color }}
              className="transition-all duration-300"
            />
          </div>
        )}
        <span className={`text-sm font-medium ${
          theme === 'dark' ? 'text-gray-300 group-hover:text-white' : 'text-gray-700 group-hover:text-gray-900'
        } transition-colors`}>
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState('frontend');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const currentCategory = categories.find(c => c.key === activeCategory);

  return (
    <section
      id="skills"
      ref={ref}
      className={`section-padding relative overflow-hidden ${
        theme === 'dark' ? 'bg-surface-950' : 'bg-white'
      }`}
    >
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-accent-500/[0.03] to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary-400 text-sm font-mono tracking-wider mb-3 uppercase">
            // Skills & Technologies
          </p>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            My tech
            <span className="gradient-text-static"> arsenal</span>
            <span className="text-primary-500">.</span>
          </h2>
          <p className={`mt-4 text-base max-w-xl ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Technologies I work with daily to build scalable, modern web applications.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/20'
                  : theme === 'dark'
                    ? 'text-gray-400 bg-white/[0.03] border border-white/[0.06] hover:text-white hover:bg-white/[0.06]'
                    : 'text-gray-500 bg-gray-50 border border-gray-200 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Skill Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
        >
          {currentCategory?.skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} theme={theme} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
