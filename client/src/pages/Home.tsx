import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Impact from "@/components/Impact";
import Challenges from "@/components/Challenges";
import ImpactCircle from "@/components/ImpactCircle";
import Yoga from "@/components/Yoga";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <Mission />
      <Impact />
      <Challenges />
      <ImpactCircle />
      <Yoga />
      <Contact />
      <Footer />
    </div>
  );
}
