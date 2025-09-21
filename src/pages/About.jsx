import React from "react";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import ClientAreaAbout from "@/components/ClientArea/ClientAreaAbout";
import MovingTextSection from "@/components/MovingText/MovingTextSection";
import CompanyFeature from "@/components/CompanyFeature/CompanyFeature";
import ExpertiseSection from "@/components/ExpertiseSection/ExpertiseSection";
import Counter from "@/components/Counter/Counter";
import Testimonials from "@/components/Testimonial/Testimonials";
import ProjectSlider from "@/components/ProjectSlider/ProjectSlider";
import CtaSection from "@/components/CtaSection/CtaSection";
import AboutStyleTwo from "@/components/About/AboutStyleTwo";
import FullWidthVideo from "@/components/VideoSection/FullWidthVideo";
import TeamSliderSection from "@/components/TeamMembers/TeamSliderSection";

function About() {
  return (
    <>
      <BreadCrumb title={"About Us"} />
      <ClientAreaAbout />
      <MovingTextSection />
      <CompanyFeature />
      <ExpertiseSection style={"style2"} />
      <FullWidthVideo />
      <Counter style={"style2"} />
      <AboutStyleTwo />
      <Testimonials />
      <ProjectSlider />
      <TeamSliderSection />
      <CtaSection style={"style2"} />
    </>
  );
}

export default About;
