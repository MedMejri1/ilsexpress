import React from "react";
import classNames from "classnames";

const services = [
  {
    id: 1,
    icon: "flaticon-cargo-ship",
    title: "Sea Freight",
    description:
      "Reliable and efficient international sea transport: including groupage, chartering, and customs clearance.",
  },
  {
    id: 2,
    icon: "flaticon-airplane",
    title: "Air Freight",
    description:
      "Fast and customized air freight solutions to meet your deadlines and optimize your supply chain.",
  },
  {
    id: 3,
    icon: "flaticon-airplane",
    title: "Customs Transit",
    description:
      "Complete management of administrative and customs formalities for your import/export operations.",
  },
   {
    id: 3,
    icon: "flaticon-airplane",
    title: "Customs Transit",
    description:
      "Complete management of administrative and customs formalities for your import/export operations.",
  },
];





const ExpertiseSection = ({ style }) => {
  const expertiseWrap = classNames("cs-expertise-wrap expert-area-style-1", {
    "expert-area-no-bg": style === "style2",
    "expert-full-zig": style === "style3",
  });
  return (
    <section>
      <div className="cs-section-height"></div>
      <div className={expertiseWrap}>
        <div className="container-fluid">
          <div className="row">
            <div className="cs-expert-area-content">
              {services.map((service) => (
                <div key={service.id} className="cs-expert-area-item">
                  <div className="cs-exp-icon-title">
                    <div className="cs-exp-icon svg-left-to-right-animation-wrap">
                      <span className="svg-left-to-right-animation">
                        <i className={service.icon}></i>
                        <i className={service.icon}></i>
                      </span>
                    </div>
                    <div className="cs-exp-title">
                      <h5>{service.title}</h5>
                    </div>
                  </div>
                  <div className="cs-exp-text">
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
