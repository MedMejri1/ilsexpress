import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faTruck,
  faShip,
  faBoxesStacked,
  faFileInvoice,
  faEye,
  faBullseye,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    id: 15565671,
    icon: faEye,
    title: "Our Vision",
    description:
      "To become an essential leader in multimodal logistics by integrating innovative technologies and sustainable solutions, in order to effectively meet the demands of a constantly evolving global market.",
  },
  {
    id: 13055474,
    icon: faBullseye,
    title: "Our Mission",
    description:
      "To provide global, responsible, and agile logistics solutions that combine performance, speed, and environmental standards compliance, supporting our partners’ ambitions in a sustainable way.",
  },
  {
    id: 8212456,
    icon: faHandshake,
    title: "Our Values",
    description:
      "Excellence, listening, innovation, human commitment, and sustainability: these pillars shape our corporate culture and foster strong collaboration with our partners.",
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
                        <FontAwesomeIcon icon={service.icon} size="1x" />
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
