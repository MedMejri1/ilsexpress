import React from "react";
import classNames from "classnames";
import RevealImage from "@/components/RevealImage/RevealImage";
import TitleAnimation from "@/components/SectionTitle/TitleAnimation";
import { Link } from "react-router-dom";

const aboutData = {
  title: "Move Your Business Forward with ILS EXPRESS",
  description:
    "At ILS EXPRESS, we guarantee reliable and efficient logistics solutions. Our mission is to provide tailor-made air, sea, and customs transit services that optimize costs and delivery times.",
  image: "/assets/img/about-img-air.png",
  services: [
    "Air Freight",
    "Sea Freight",
    "Customs Transit",
    "Tailor-Made Solutions",
    "Global Network of Agents",
    "Import / Export Support",
  ],
};


const AboutStyleTwo = ({ style }) => {
  const { title, description, image, services } = aboutData;

  const aboutwrapper = classNames("cs-about-wrapper-1 cs-about-2", {
    "cs-about-img-left0": style === "style2",
  });

  return (
    <>
      <div className="cs-section-height"></div>
      <div className="cs-about-style-2">
        <div className={aboutwrapper}>
          <div className="cs-about-wrap-in">
            <div className="container-fluid">
              <div className="row flex_end">
                <div className="col-xl-6 col-lg-12 col-md-12">
                  <div className="cs-about-img-area">
                    <RevealImage className={"horizontal"} image={image} />
                  </div>
                  <div className="container">
                    <div className="cs-about-list-wrap">
                      <ul className="two-column-grid">
                        {services.map((service, index) => (
                          <li key={index}>
                            <i className="flaticon-verified"></i>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-12">
                  <div className="cs-about-content-wrap">
                    <div className="cs-about-content-in">
                      <div className="cs-about-title">
                        <TitleAnimation>{title}</TitleAnimation>
                      </div>
                      <div className="cs-about-para">
                        <p>{description}</p>
                        <div className="cs-height-30"></div>
                        <p>{description}</p>
                      </div>
                      <div className="cs-primary-btn-wrap">
                        <div className="cs-primary-btn">
                          <Link to="/contact-us" className="cs-primary-btn-in">
                            <span>Contact Us</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutStyleTwo;
