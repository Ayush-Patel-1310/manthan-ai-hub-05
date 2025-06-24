
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import AIChallengesSection from '@/components/AIChallengesSection';
import ScheduleSection from '@/components/ScheduleSection';
import TimelineSection from '@/components/TimelineSection';
import ProblemsSection from '@/components/ProblemsSection';
import EnhancedRegistrationSection from '@/components/EnhancedRegistrationSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <AIChallengesSection />
      <TimelineSection />
      <ScheduleSection />
      <ProblemsSection />
      <EnhancedRegistrationSection />
      <Footer />
    </div>
  );
};

export default Index;
