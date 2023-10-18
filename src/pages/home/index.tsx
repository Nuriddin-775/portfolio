import HeroSection from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import ParallaxSection from "./components/parallax/Parallax";
import PortfolioSection from "./components/portfolio/Portfolio";
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
      <PortfolioSection />
    </div>
  );
}

export default HomePage;
