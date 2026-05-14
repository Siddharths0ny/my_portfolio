import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FiAward, FiExternalLink, FiCalendar, FiX, FiMaximize2 } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { certifications } from '../data/portfolio';

function CertificationModal({ cert, isOpen, onClose, theme }) {
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-surface-950/90 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`relative max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl ${
              theme === 'dark' ? 'bg-surface-900 border border-white/10' : 'bg-white border border-gray-200'
            }`}
          >
            {/* Modal Header */}
            <div className={`flex items-center justify-between p-4 md:p-6 border-b ${
              theme === 'dark' ? 'border-white/10' : 'border-gray-100'
            }`}>
              <div>
                <h3 className={`text-lg md:text-xl font-heading font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {cert.title}
                </h3>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
                }`}>
                  {cert.issuer}
                </p>
              </div>
              <button
                onClick={onClose}
                className={`p-2 rounded-xl transition-colors ${
                  theme === 'dark' ? 'text-gray-400 hover:text-white hover:bg-white/10' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <FiX size={24} />
              </button>
            </div>

            {/* Modal Content - Image Preview */}
            <div className="p-4 md:p-8 overflow-y-auto max-h-[calc(90vh-100px)] flex flex-col items-center">
              <div className="relative group w-full bg-black/5 rounded-lg overflow-hidden flex items-center justify-center min-h-[300px]">
                {/* Fallback if image doesn't exist */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 gap-3">
                  <FiAward size={48} className="opacity-20" />
                  <p className="text-xs font-mono uppercase tracking-widest opacity-40">Certificate Preview Not Available</p>
                </div>
                
                {/* Real Image */}
                <img
                  src={cert.image}
                  alt={`${cert.title} Certificate`}
                  className="relative z-10 max-w-full h-auto shadow-lg rounded-sm"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function CertificationCard({ cert, index, theme, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`group relative rounded-2xl overflow-hidden transition-all duration-500 ${
        theme === 'dark'
          ? 'bg-white/[0.02] border border-white/[0.06] hover:border-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/5'
          : 'bg-white border border-gray-200 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-500/5'
      }`}
    >
      <div className="relative p-6">
        {/* Header Icon & Date */}
        <div className="flex items-center justify-between mb-5">
          <div className={`p-2.5 rounded-xl ${
            theme === 'dark' ? 'bg-primary-500/10 text-primary-400' : 'bg-primary-50 text-primary-500'
          }`}>
            <FiAward size={20} />
          </div>
          <div className={`flex items-center gap-1.5 text-xs font-medium ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
          }`}>
            <FiCalendar size={12} />
            <span>{cert.date}</span>
          </div>
        </div>

        {/* Content */}
        <div className="mb-6">
          <h3 className={`text-lg font-heading font-bold mb-1 group-hover:text-primary-500 transition-colors ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {cert.title}
          </h3>
          <p className={`text-sm font-medium ${
            theme === 'dark' ? 'text-primary-400/80' : 'text-primary-600'
          }`}>
            {cert.issuer}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => onOpen(cert)}
            className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              theme === 'dark' 
                ? 'text-primary-400 hover:text-primary-300' 
                : 'text-primary-600 hover:text-primary-700'
            }`}
          >
            <FiMaximize2 size={14} />
            Show Certificate
          </button>
        </div>
      </div>

      {/* Visual Accent */}
      <div className="absolute bottom-0 right-0 w-24 h-24 -mr-8 -mb-8 bg-primary-500/5 rounded-full blur-2xl group-hover:bg-primary-500/10 transition-colors" />
    </motion.div>
  );
}

export default function Certifications() {
  const { theme } = useTheme();
  const [selectedCert, setSelectedCert] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="certifications"
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
          className="mb-12"
        >
          <p className="text-primary-400 text-sm font-mono tracking-wider mb-3 uppercase">
            // Achievements
          </p>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            My
            <span className="gradient-text-static"> Certifications</span>
            <span className="text-primary-500">.</span>
          </h2>
          <p className={`mt-4 text-base max-w-xl ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}>
            A collection of professional certifications and training programs I've completed to sharpen my skills.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <CertificationCard 
              key={cert.id} 
              cert={cert} 
              index={i} 
              theme={theme} 
              onOpen={setSelectedCert} 
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <CertificationModal
        cert={selectedCert}
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        theme={theme}
      />
    </section>
  );
}
