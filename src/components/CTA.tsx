import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Intense center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-[#00ff66]/20 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 uppercase leading-tight">
            READY TO TAKE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff66] to-[#00aa44] text-glow-strong">
              THE CHALLENGE?
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Join hundreds of students in the ultimate test of cybersecurity skills. Form a team, solve challenges, and claim the glory.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe_W2irnWNSBxxhDXWzkAzKh6k21VfJEU6qdVql2icqvbux1g/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon px-10 py-5 text-xl inline-block"
          >
            REGISTER NOW
          </a>
        </motion.div>
      </div>
    </section>
  );
}
