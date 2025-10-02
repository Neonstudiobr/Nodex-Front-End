import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServerFeatures from "@/components/ServerFeatures";
import AvailableJobs from "@/components/AvailableJobs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServerFeatures />
      <AvailableJobs />
      <Footer />
    </div>
  );
};

export default Index;
