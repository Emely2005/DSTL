import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustedBy } from './components/TrustedBy';
import { About } from './components/About';
import { Solutions } from './components/Solutions';
import { Process } from './components/Process';
import { MissionVision } from './components/MissionVision';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-dstl-dark min-h-screen text-slate-200 selection:bg-dstl-accent selection:text-dstl-dark font-sans">
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <About />
        <Solutions />
        <Process />
        <MissionVision />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;