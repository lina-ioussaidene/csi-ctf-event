import { motion } from 'framer-motion'; 

export default function Gallery() {
  const images = [
    { src: '/gallery/C104709D_IMG_2729.JPG', title: 'CSI ceremony' },
    { src: '/gallery/B6BB9537_IMG_2710.JPG', title: '1st place winner' },
    { src: '/gallery/B4C0B117_IMG_2707.JPG', title: '2nd place winner' },
    { src: '/gallery/A079DFDA_IMG_2712.jpg', title: 'memories' },
    { src: '/gallery/50BC920C_IMG_2702.JPG', title: 'PHDs' },
    { src: '/gallery/3DFC5EA8_IMG_2732.JPG', title: 'Hacking time' },
  
  ];

  return (
    <section id="gallery" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            EVENT <span className="text-[#00ff66]">GALLERY</span>
          </h2>
          <div className="w-24 h-1 bg-[#00ff66] mx-auto rounded-full opacity-50"></div>
        </motion.div>

        {/* Grille avec 3 colonnes fixes sur PC */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((imgObj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              // Correction : Suppression du 'row-span-2' et ajout de 'aspect-square' pour l'uniformité
              className="relative group overflow-hidden rounded-xl glass-card p-1 aspect-square md:aspect-video"
            >
              <div className="w-full h-full overflow-hidden rounded-lg relative">
                <img
                  src={imgObj.src}
                  alt={imgObj.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-75 group-hover:brightness-100"
                />
                
                {/* Overlay au survol */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-[#00ff66] font-mono text-sm md:text-base font-bold border-b border-[#00ff66]">
                    {imgObj.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
