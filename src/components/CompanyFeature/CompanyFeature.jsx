import React from "react";
import FeatureItem from "./FeatureItem";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import RevealImage from "@/components/RevealImage/RevealImage";

const features = [
  {
    id: 1,
    title: "Our Beginning",
    year: "2019",
    description:
      "Foundation of ILS EXPRESS, launching reliable logistics and international freight services.",
  },
  {
    id: 2,
    title: "Expansion",
    year: "2022",
    description:
      "Strong growth with larger operations, expanded global partnerships, and increased service capacity.",
  },
  {
    id: 3,
    title: "Rebranding & Growth",
    year: "2025",
    description:
      "A new identity for ILS EXPRESS with rebranding, modernization, and accelerated growth in logistics solutions.",
  },
];


const CompanyFeature = () => {
  return (
    <section>
      <div className="cs-section-height"></div>
      <div className="cs-com-feature-wrapper cs-style-1">
        <div className="container">
          <div className="row">
            <SectionTitle
              title={"Business Forward with Leading Company"}
              style={"style2"}
              to="/contact"
              rightLinkText="Contact Us"
            />
          </div>
        </div>

        <div className="cs-sec-title-height"></div>

        <div className="container-fluid">
          <div className="row cs_center">
            <div className="col-xl-6 col-lg-12">
              <div className="cs-com-fe-content-in">
                {features.map((feature) => (
                  <div key={feature.id}>
                    <FeatureItem feature={feature} />
                    {feature.id !== features.length && (
                      <div className="cs-height-60"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <RevealImage
                image="/assets/img/company-feature-style-1.png"
                className="horizontal"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyFeature;
