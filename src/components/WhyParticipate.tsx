import { motion } from 'motion/react';
import { Zap, Users, Briefcase, Network } from 'lucide-react';

export default function WhyParticipate() {
  const reasons = [
    {
      title: 'SKILLS DEVELOPMENT',
      desc: 'Sharpen your technical skills in a hands-on, competitive environment.',
      icon: Zap,
    },
    {
      title: 'TEAMWORK',
      desc: 'Collaborate with peers to solve complex multi-stage challenges.',
      icon: Users,
    },
    {
      title: 'REAL-WORLD EXP',
      desc: 'Face scenarios modeled after actual cybersecurity incidents.',
      icon: Briefcase,
    },
    {
      title: 'NETWORKING',
      desc: 'Connect with like-minded students and industry professionals.',
      icon: Network,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 w-[40rem] h-[40rem] bg-[#00ff66]/5 rounded-full blur-[150px] -z-10 -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2"
        >
          <span className="text-[#00ff66] font-display text-sm tracking-[0.2em] uppercase mb-4 block">[ Why Join Us ]</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
            WHY HACKERS <br />
            CHOOSE <span className="text-[#00ff66]">CSI CTF</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Beyond the thrill of the hack, participating in our CTF provides tangible benefits for your academic and professional journey in cybersecurity.
          </p>
        </motion.div>

        <div className="lg:w-1/2 grid sm:grid-cols-2 gap-6 w-full">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-[#00ff66]/10 rounded text-[#00ff66]">
                  <reason.icon size={20} />
                </div>
                <h3 className="text-sm font-display font-bold text-white uppercase tracking-wider">
                  {reason.title}
                </h3>
              </div>
              <p className="text-sm text-gray-400">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
