import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // FIXE : On définit la date cible exacte pour le CTF
    const targetDate = new Date('2026-04-15T09:00:00'); // Tu peux changer 09:00:00 par l'heure de début

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // Si le temps est écoulé (le 15 avril est arrivé !)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ff66]/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#00cc55]/10 rounded-full blur-[150px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#00ff66] font-display tracking-[0.2em] text-sm md:text-base mb-4 uppercase">
            CSI Cybersecurity Event
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight">
            CAPTURE THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff66] to-[#00aa44] text-glow-strong">
              FLAG
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl mb-12">
            The ultimate test of your hacking skills. Compete, learn, and conquer in the biggest cybersecurity challenge of the year.
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 md:gap-8 mb-12">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center">
                <div className="glass-card w-16 h-16 md:w-24 md:h-24 flex items-center justify-center mb-2">
                  <span className="text-2xl md:text-4xl font-display font-bold text-white">
                    {value.toString().padStart(2, '0')}
                  </span>
                </div>
                <span className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">{unit}</span>
              </div>
            ))}
          </div>

          <a
            href="https://forms.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon px-8 py-4 text-lg inline-block"
          >
            Register Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
