import Header from "../components/Body/Header";
import Hero from "../components/Body/Hero";
import Services from "../components/Body/Services";
import Courses from "../components/Body/Courses";
import Chefs from "../components/Body/Chefs";
import Contact from "../components/Body/Contact";
import Footer from "../components/Body/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Courses />
      <Chefs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;