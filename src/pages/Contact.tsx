import { motion } from 'framer-motion';
import { TerminalHeader } from '../components/TerminalHeader';
import { Mail, MapPin, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';
import { CONTACT } from '../data/portfolio';

export const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      color: 'text-blue-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: CONTACT.phoneNo,
      href: `tel:${CONTACT.phoneNo}`,
      color: 'text-green-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: CONTACT.address,
      href: '#',
      color: 'text-purple-500',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: CONTACT.social.github,
      icon: Github,
      color: 'hover:text-gray-400',
    },
    {
      name: 'LinkedIn',
      url: CONTACT.social.linkedin,
      icon: Linkedin,
      color: 'hover:text-blue-500',
    },
  ];

  return (
    <div className="min-h-screen bg-bg-page">
      {/* Terminal Header */}
      <TerminalHeader
        command="ping contact.server"
        description="Establishing connection to communication endpoint"
      />

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="bg-bg-elevated border border-neutral-700 rounded-xl p-8 shadow-card hover:border-primary-500/50 transition-colors duration-300">
              <h3 className="font-mono text-2xl font-bold text-primary-500 mb-8 text-center">
                Get In Touch
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {contactMethods.map((method) => {
                  const IconComponent = method.icon;
                  return (
                    <a 
                      key={method.label} 
                      href={method.href}
                      className="flex flex-col items-center p-6 bg-bg-surface rounded-lg hover:scale-105 transition-transform duration-300 border border-neutral-800 hover:border-neutral-600"
                    >
                      <div className={`p-4 bg-bg-elevated rounded-full mb-4 ${method.color}`}>
                        <IconComponent size={24} />
                      </div>
                      <div className="font-medium text-neutral-200 mb-2">{method.label}</div>
                      <div className="text-sm text-neutral-400 text-center break-all">{method.value}</div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Availability Status */}
              <div className="bg-bg-elevated border border-neutral-700 rounded-xl p-6 shadow-card hover:border-primary-500/50 transition-colors duration-300">
                <h3 className="font-mono text-lg font-bold text-primary-500 mb-6">
                  Availability Status
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse" />
                    <span className="font-mono text-sm text-neutral-200">Available for new projects</span>
                  </div>
                  <div className="text-sm text-neutral-400">
                    <div className="mb-2">Response time: Within 24 hours</div>
                    {/* يمكنك تغيير المنطقة الزمنية هنا إذا أردت */}
                    <div>Time zone: CAT (UTC+2:00)</div> 
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-bg-elevated border border-neutral-700 rounded-xl p-6 shadow-card hover:border-primary-500/50 transition-colors duration-300">
                <h3 className="font-mono text-lg font-bold text-primary-500 mb-6">
                  Connect With Me
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link) => {
                    const IconComponent = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex flex-col items-center p-4 bg-bg-surface rounded-lg text-neutral-400 border border-neutral-800 ${link.color} transition-all duration-200 hover:scale-105 hover:shadow-card hover:border-neutral-600`}
                      >
                        <IconComponent size={24} className="mb-2" />
                        <span className="text-sm font-mono">{link.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terminal-style footer message */}
      <section className="pb-24 bg-bg-page">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-bg-surface border border-neutral-700 rounded-xl p-8 font-mono shadow-card"
          >
            <div className="text-accent-500 mb-4">
              $ echo "Thank you for visiting!"
            </div>
            <div className="space-y-2 text-neutral-200">
              <p>I'm always interested in discussing new opportunities and challenging projects.</p>
              <p className="text-primary-500">
                Let's build something amazing together.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-700 text-sm text-neutral-400">
              <div className="flex items-center justify-center space-x-2">
                <ExternalLink size={16} />
                <span>Connection established. Looking forward to hearing from you!</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
