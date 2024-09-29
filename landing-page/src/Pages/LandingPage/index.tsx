import {FC} from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About"
import Portofolio from "../../components/Portofolio";
import Work from "../../components/Work";
import Testimonial from "../../components/Testimonial";
import Footer from "../../components/Footer"



const LandingPage: FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <About/>
      <Portofolio />
      <Work />
      <Testimonial/>
      <Footer/>
    </>
  );
}

export default LandingPage;