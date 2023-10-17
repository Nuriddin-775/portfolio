import HeroSection from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import ParallaxSection from "./components/parallax/Parallax";
import ServicesSection from "./components/services/Services";
import "./home.scss";

function HomePage() {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <ParallaxSection type={"services"} />
      <ServicesSection />
      <ParallaxSection type={"portfolio"} />
    </div>
  );
}

export default HomePage;
