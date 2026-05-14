import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiAward, FiUsers, FiBookOpen, FiMapPin, FiCalendar } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { experience, education } from '../data/portfolio';

// Timeline node component
function TimelineItem({ item, index, theme, isLast }) {
  const iconMap = {
    leadership: FiAward,
    community: FiUsers,
  };
  const Icon = iconMap[item.icon] || FiAward;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="relative pl-10 pb-10"
    >
      {/* Vertical line */}
      {!isLast && (
        <div className={`absolute left-[15px] top-10 bottom-0 w-px ${
          theme === 'dark' ? 'bg-white/[0.06]' : 'bg-gray-200'
        }`} />
      )}

      {/* Node dot */}
      <div className={`absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center ${
        theme === 'dark'
          ? 'bg-primary-500/10 border border-primary-500/30'
          : 'bg-primary-50 border border-primary-200'
      }`}>
        <Icon className="w-3.5 h-3.5 text-primary-400" />
      </div>

      {/* Content */}
      <div className={`p-5 rounded-xl transition-all duration-300 ${
        theme === 'dark'
          ? 'bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.1]'
          : 'bg-white border border-gray-200 hover:border-primary-200 hover:shadow-md'
      }`}>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className={`px-2.5 py-0.5 text-[11px] font-medium rounded-md ${
            theme === 'dark'
              ? 'bg-primary-500/10 text-primary-300'
              : 'bg-primary-50 text-primary-600'
          }`}>
            {item.type === 'leadership' ? 'Leadership' : 'Activity'}
          </span>
          <span className={`text-xs flex items-center gap-1 ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
          }`}>
            <FiCalendar size={11} />
            {item.period}
          </span>
        </div>

        <h3 className={`text-base font-heading font-bold mb-1 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          {item.title}
        </h3>
        <p className={`text-sm font-medium mb-2 ${
          theme === 'dark' ? 'text-primary-400/70' : 'text-primary-500'
        }`}>
          {item.organization}
        </p>
        <p className={`text-sm leading-relaxed ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
        }`}>
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

function EducationCard({ edu, index, theme }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative p-5 rounded-xl transition-all duration-300 ${
        theme === 'dark'
          ? 'bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04]'
          : 'bg-white border border-gray-200 hover:shadow-md'
      } ${edu.current ? (theme === 'dark' ? 'border-primary-500/20' : 'border-primary-300') : ''}`}
    >
      {edu.current && (
        <div className="absolute top-3 right-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
        </div>
      )}
      <FiBookOpen className={`w-5 h-5 mb-3 ${
        theme === 'dark' ? 'text-primary-400' : 'text-primary-500'
      }`} />
      <h4 className={`text-sm font-heading font-bold mb-1 ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        {edu.degree}
      </h4>
      <p className={`text-xs mb-1.5 flex items-center gap-1 ${
        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
      }`}>
        <FiMapPin size={10} />
        {edu.institution}
      </p>
      <p className={`text-xs ${
        theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
      }`}>
        {edu.period}
      </p>
    </motion.div>
  );
}



export default function Experience() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
      ref={ref}
      className={`section-padding relative overflow-hidden ${
        theme === 'dark' ? 'bg-surface-950' : 'bg-white'
      }`}
    >
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary-400 text-sm font-mono tracking-wider mb-3 uppercase">
            // Experience & Education
          </p>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            My
            <span className="gradient-text-static"> journey</span>
            <span className="text-primary-500">.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Timeline */}
          <div className="lg:col-span-3">
            <h3 className={`text-lg font-heading font-bold mb-6 flex items-center gap-2 ${
              theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
            }`}>
              <FiAward className="text-primary-400" size={18} />
              Leadership & Activities
            </h3>
            {experience.map((item, i) => (
              <TimelineItem
                key={i}
                item={item}
                index={i}
                theme={theme}
                isLast={i === experience.length - 1}
              />
            ))}
          </div>

          {/* Right: Education + Certifications */}
          <div className="lg:col-span-2 space-y-10">
            {/* Education */}
            <div>
              <h3 className={`text-lg font-heading font-bold mb-6 flex items-center gap-2 ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
              }`}>
                <FiBookOpen className="text-primary-400" size={18} />
                Education
              </h3>
              <div className="space-y-3">
                {education.map((edu, i) => (
                  <EducationCard key={i} edu={edu} index={i} theme={theme} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
