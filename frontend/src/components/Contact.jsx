import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiArrowUpRight } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // mailto fallback
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }, 1000);
  };

  const contactInfo = [
    { icon: FiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: FiPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: FiMapPin, label: 'Location', value: personalInfo.location, href: null },
  ];

  const socials = [
    { icon: FiGithub, label: 'GitHub', href: personalInfo.github },
    { icon: FiLinkedin, label: 'LinkedIn', href: personalInfo.linkedin },
  ];

  const inputClasses = `w-full px-4 py-3.5 rounded-xl text-sm transition-all duration-300 outline-none ${
    theme === 'dark'
      ? 'bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-500 focus:border-primary-500/50 focus:bg-white/[0.05] focus:ring-1 focus:ring-primary-500/20'
      : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-primary-400 focus:bg-white focus:ring-1 focus:ring-primary-500/20'
  }`;

  return (
    <section
      id="contact"
      ref={ref}
      className={`section-padding relative overflow-hidden ${
        theme === 'dark' ? 'bg-surface-950' : 'bg-gray-50/50'
      }`}
    >
      {/* Background accents */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-accent-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-primary-400 text-sm font-mono tracking-wider mb-3 uppercase">
            // Get in Touch
          </p>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Let's work
            <span className="gradient-text-static"> together</span>
            <span className="text-primary-500">.</span>
          </h2>
          <p className={`mt-4 text-base max-w-xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Got a project idea, want to collaborate, or just say hi? 
            I'd love to hear from you. Let's create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={`block text-xs font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={`block text-xs font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-xs font-medium mb-2 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hello..."
                  rows={5}
                  required
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                  submitted
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-lg hover:shadow-primary-500/25 hover:-translate-y-0.5'
                } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {submitted ? (
                  <>✓ Message Sent!</>
                ) : isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" size={15} />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact details */}
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    theme === 'dark'
                      ? 'bg-primary-500/10 border border-primary-500/10'
                      : 'bg-primary-50 border border-primary-100'
                  }`}>
                    <Icon className="w-4 h-4 text-primary-400" />
                  </div>
                  <div>
                    <p className={`text-xs mb-0.5 ${
                      theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                    }`}>{label}</p>
                    {href ? (
                      <a href={href} className={`text-sm font-medium hover:text-primary-400 transition-colors ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {value}
                      </a>
                    ) : (
                      <p className={`text-sm font-medium ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className={`border-t ${
              theme === 'dark' ? 'border-white/[0.06]' : 'border-gray-200'
            }`} />

            {/* Social Links */}
            <div>
              <p className={`text-xs font-medium mb-3 ${
                theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
              }`}>
                Find me on
              </p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-white/[0.03] border border-white/[0.06] text-gray-400 hover:text-white hover:bg-white/[0.06]'
                        : 'bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300'
                    }`}
                  >
                    <Icon size={16} />
                    {label}
                    <FiArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
