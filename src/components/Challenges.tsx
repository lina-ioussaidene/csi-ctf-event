import { motion } from 'motion/react';
import { Key, Globe, Cpu, Search, Binary, Eye } from 'lucide-react';

export default function Challenges() {
  const categories = [
    {
      id: '01',
      title: 'Cryptography',
      desc: 'Crack ciphers, decrypt messages, and understand cryptographic algorithms.',
      icon: Key,
    },
    {
      id: '02',
      title: 'Web Exploitation',
      desc: 'Find and exploit vulnerabilities in web applications like SQLi and XSS.',
      icon: Globe,
    },
    {
      id: '03',
      title: 'Reverse Engineering',
      desc: 'Decompile and analyze software to understand its inner workings.',
      icon: Cpu,
    },
    {
      id: '04',
      title: 'Forensics',
      desc: 'Investigate digital evidence, analyze memory dumps and network captures.',
      icon: Search,
    },
    {
      id: '05',
      title: 'Binary Exploitation',
      desc: 'Exploit memory corruption vulnerabilities like buffer overflows.',
      icon: Binary,
    },
    {
      id: '06',
      title: 'OSINT',
      desc: 'Gather intelligence from publicly available open sources.',
      icon: Eye,
    },
  ];

  return (
    <section id="challenges" className="py-24 relative">
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-[#00ff66]/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00ff66] font-display text-sm tracking-[0.2em] uppercase mb-2 block">[ The Arena ]</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            CHALLENGE <span className="text-[#00ff66]">CATEGORIES</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 relative group overflow-hidden"
            >
              <div className="absolute top-4 right-6 text-4xl font-display font-bold text-[#00ff66]/10 group-hover:text-[#00ff66]/20 transition-colors">
                {cat.id}
              </div>
              <div className="mb-6 text-[#00ff66]">
                <cat.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-3 uppercase tracking-wide">
                {cat.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {cat.desc}
              </p>
              
              {/* Hover glow effect */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-[#00ff66]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
