import { motion } from 'motion/react';
import { Shield, Terminal, Trophy } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            ABOUT <span className="text-[#00ff66]">CSI CTF</span>
          </h2>
          <div className="w-24 h-1 bg-[#00ff66] mx-auto rounded-full opacity-50"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-semibold text-white mb-6">
              What is a Capture The Flag?
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              A Capture The Flag (CTF) is a cybersecurity competition where participants solve security challenges to find hidden "flags". These flags are secrets hidden in vulnerable websites, compiled programs, or encrypted files.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Organized by the Computer Science Initiative (CSI), this event is designed to test your practical skills in various domains of information security in a safe, legal, and educational environment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            {[
              { icon: Shield, title: 'Defend & Attack', desc: 'Learn offensive and defensive security techniques.' },
              { icon: Terminal, title: 'Real-world Scenarios', desc: 'Tackle vulnerabilities found in actual systems.' },
              { icon: Trophy, title: 'Compete & Win', desc: 'Climb the leaderboard and prove your expertise.' },
            ].map((item, idx) => (
              <div key={idx} className="glass-card p-6 flex items-start gap-4">
                <div className="p-3 bg-[#00ff66]/10 rounded-lg text-[#00ff66]">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-display font-medium text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
