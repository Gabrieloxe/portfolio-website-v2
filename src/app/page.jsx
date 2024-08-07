import React from 'react';
import { HeroSection } from './components/hero/HeroSection';
import { Navbar } from './components/navbar/Navbar';
import { AboutSection } from './components/about/AboutSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { Footer } from './components/Footer';
import { BottomSection } from './components/BottomSection';
import { AchievementSection } from './components/achievement/AchievementSection';
import { ExperienceSection } from './components/experience/ExperienceSection';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <Navbar />
      <div className='container mt-24 mx-auto px-12 py-4'>
        <HeroSection />
        <AchievementSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <BottomSection />
      </div>
      <Footer />
    </main>
  );
}
