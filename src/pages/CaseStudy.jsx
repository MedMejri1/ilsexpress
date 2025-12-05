import React from "react";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import ClientAreaAbout from "@/components/ClientArea/ClientAreaAbout";
import CtaSection from "@/components/CtaSection/CtaSection";
import CaseLists from "@/components/CaseStudy/CaseLists";

const CaseStudy = () => {
  return (
    <>
      <BreadCrumb title={"Our Brochure"} />
      <div className="cs-section-height"></div>

      {/* Flipbook iframe */}
      <div style={{ width: "100%", overflow: "hidden" }}>
        <iframe
          allowFullScreen
          allow="clipboard-write"
          scrolling="no"
          className="fp-iframe"
          src="https://heyzine.com/flip-book/acd76e3a7f.html"
          style={{
            border: "0px",
            width: "100%",
            height: "477px",
          }}
        ></iframe>
      </div>

      {/* <CaseLists /> */}

      <CtaSection style={"style2"} bg={"none"} />
      <div className="cs-section-height"></div>

      {/* <ClientAreaAbout /> */}
    </>
  );
};

export default CaseStudy;
