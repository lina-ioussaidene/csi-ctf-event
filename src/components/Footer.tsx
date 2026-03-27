export default function Footer() {
  return (
    <footer className="border-t border-neon-green/20 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-2xl font-display font-bold text-white">
          <span className="text-[#00ff66]">CSI</span> CTF
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()}  All rights reserved.CSI 2026
        </p>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/csi.ummto/" className="text-gray-500 hover:text-[#00ff66] transition-colors">Instagram</a>
          <a href="https://web.facebook.com/p/Club-Scientifique-informatique-Ummto-100069036347546/?_rdc=1&_rdr#" className="text-gray-500 hover:text-[#00ff66] transition-colors">Facebook</a>
          <a href="https://www.tiktok.com/@csi.ummto" className="text-gray-500 hover:text-[#00ff66] transition-colors">TikTok</a>
        </div>
      </div>
    </footer>
  );
}
