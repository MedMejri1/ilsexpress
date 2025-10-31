import React from "react";
import HeroSlider from "@/components/Slider/HeroSlider";
import ExpertiseSection from "@/components/ExpertiseSection/ExpertiseSection";
import AboutSection from "@/components/About/About";
import MovingTextSection from "@/components/MovingText/MovingTextSection";
import Testimonials from "@/components/Testimonial/Testimonials";
import Counter from "@/components/Counter/Counter";
import QuoteProcess from "@/components/ QuoteProcess/QuoteProcess";
import CompanyFeature from "@/components/CompanyFeature/CompanyFeature";
import ProjectSlider from "@/components/ProjectSlider/ProjectSlider";
import ClientArea from "@/components/ClientArea/ClientArea";
import HomeServicesSection from "@/components/Services/HomeServicesSection";
import TeamSliderSection from "@/components/TeamMembers/TeamSliderSection";
import BlogsHomeContent from "@/components/Blogs/BlogsHomeContent";
import CtaSection from "@/components/CtaSection/CtaSection";

function Home() {
  return (
    <>
      <HeroSlider />
      <MovingTextSection />
      <ExpertiseSection style={"style3"}/>
      <AboutSection />
      <HomeServicesSection />
      <Counter />
      <CtaSection style={"style2"} />
      <Testimonials />
      <CompanyFeature />
    </>
  );
}

export default Home;
