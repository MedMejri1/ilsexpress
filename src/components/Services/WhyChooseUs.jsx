import React from "react";
import CompanyFeatureItem from "./CompanyFeatureItem.jsx";
import SectionTitle from "@/components/SectionTitle/SectionTitle.jsx";
import RevealImage from "@/components/RevealImage/RevealImage.jsx";

import airfreightdrone from "/assets/img/air-freight/air-freight-drone.jpg";

const features = [
  {
    id: 1,
    title: "Express Air Transport",
    description:
      "Flexible and efficient road transportation across local and international routes.",
  },
  {
    id: 2,
    title: "Maximum Cargo Flexibility",
    description:
      "Flexible and efficient road transportation across local and international routes.",
  },
  {
    id: 3,
    title: "Personalized Shipping Solutions",
    description:
      "Flexible and efficient road transportation across local and international routes.",
  },
  {
    id: 4,
    title: "Maximum Cargo Flexibility",
    description:
      "Flexible and efficient road transportation across local and international routes.",
  },
];

const WhyChooseUs = () => {
  return (
    <section>
      <div className="cs-section-height"></div>
      <div className="cs-com-feature-wrapper cs-com-feature-for-airfreight">
        <div className="container">
          <div className="row">
            <SectionTitle
              title={"Why Choose Us for Your Logistics Needs?"}
              to="/services"
              style={"style2"}
            />
          </div>
        </div>

        <div className="cs-sec-title-height"></div>

        <div className="container-fluid">
          <div className="row cs_center">
            <div className="col-xl-6 col-lg-12">
              <div className="cs-com-fe-content-in">
                {features.map((feature, index) => (
                  <React.Fragment key={feature.id}>
                    <CompanyFeatureItem
                      title={feature.title}
                      description={feature.description}
                    />
                    {index < features.length - 1 && (
                      <div className="cs-height-75"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <RevealImage
                image={airfreightdrone}
                className="cs-com-fe-img horizontal"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
