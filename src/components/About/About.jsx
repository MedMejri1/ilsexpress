import React from "react";
import DynamicBackground from "@/components/DynamicBackground/DynamicBackground";
import RevealImage from "@/components/RevealImage/RevealImage";
import { Link } from "react-router-dom";

const aboutData = {
  image: "/assets/img/about-img-style-1.png",
  experience: {
    years: 11,
    text: "Years of Experience",
  },
  title: "Take Your Business Further with ILS EXPRESS",
  description:
    "We guarantee a reliable and efficient service — that’s our mission. We provide tailored logistics solutions to optimize your costs and delivery times.",
  listItems: [
    "Air Freight",
    "Sea Freight",
    "Customs Transit",
    "Tailor-Made Solutions",
    "Global Network of Agents",
    "Import / Export Support",
  ],
  button: {
    text: "Learn More",
    link: "/about",
  },
};


const AboutSection = () => {
  return (
    <section>
      <div className="cs-section-height"></div>
      <div className="cs-about-wrapper-1">
        <div className="cs-about-wrap-in">
          <div className="container-fluid">
            <div className="row cs_center">
              <div className="col-xl-6 col-lg-12 col-md-12">
                <div className="cs-about-img-area">
                  <RevealImage image={aboutData.image} className="horizontal" />
                  <DynamicBackground
                    className="cs-about-img-over-content anim_div_ShowRightSide "
                    dataSrc="/assets/img/experience-bg.svg"
                  >
                    <div className="p-5">
                      <div className="cs-flex justify-content-center">
                        <h2 id="count5" className="amin_auto_count">
                          {aboutData.experience.years}
                        </h2>
                        <span className="cs-text-style-h2 cs-color-white">
                          +
                        </span>
                      </div>
                      <p>{aboutData.experience.text}</p>
                    </div>
                  </DynamicBackground>
                </div>
              </div>

              <div className="col-xl-6 col-lg-12 col-md-12">
                <div className="cs-about-content-wrap">
                  <div className="cs-about-content-in">
                    <div className="cs-about-title">
                      <h2 className="logi-splite">{aboutData.title}</h2>
                    </div>
                    <div className="cs-about-para">
                      <p>{aboutData.description}</p>
                    </div>
                    <div className="cs-about-list-wrap">
                      <ul>
                        {aboutData.listItems.slice(0, 3).map((item, index) => (
                          <li key={index}>
                            <i className="flaticon-verified"></i>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <ul>
                        {aboutData.listItems.slice(3).map((item, index) => (
                          <li key={index + 3}>
                            <i className="flaticon-verified"></i>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="cs-primary-btn-wrap">
                      <div className="cs-primary-btn">
                        <Link
                          to={aboutData.button.link}
                          className="cs-primary-btn-in"
                        >
                          <span>{aboutData.button.text}</span>
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
    </section>
  );
};

export default AboutSection;
