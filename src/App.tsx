/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Challenges from './components/Challenges';
import WhyParticipate from './components/WhyParticipate';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-neon-green/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyParticipate />
        <Challenges />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
