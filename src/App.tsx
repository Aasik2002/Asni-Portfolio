import Hero from './components/Hero';
import About from './components/About';
import SkillsHub from './components/SkillsHub';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import References from './components/References';
import ContactFooter from './components/ContactFooter';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex min-h-screen bg-charcoal selection:bg-bento-accent/30 selection:text-charcoal font-sans">
      <Sidebar />
      
      {/* 
        Main Content Wrapper 
        Provides the light bento-bg and pushes content to the right of the sidebar.
        On mobile: pl-20 (80px), on desktop: pl-64 (256px)
      */}
      <main className="flex-1 ml-20 md:ml-64 bg-bento-bg min-h-screen border-l border-slate-200/50 rounded-l-[2rem] md:rounded-l-[3rem] overflow-hidden drop-shadow-2xl relative z-10">
        <div className="max-w-[1600px] mx-auto">
          <Hero />
          <About />
          <SkillsHub />
          <Experience />
          <Achievements />
          <References />
          <ContactFooter />
        </div>
      </main>
    </div>
  );
}

export default App;
