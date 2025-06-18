
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/About

Section';
import ScheduleSection from '@/components/ScheduleSection';
import ProblemsSection from '@/components/ProblemsSection';
import RegistrationSection from '@/components/RegistrationSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      <ProblemsSection />
      <RegistrationSection />
      <Footer />
    </div>
  );
};

export default Index;
