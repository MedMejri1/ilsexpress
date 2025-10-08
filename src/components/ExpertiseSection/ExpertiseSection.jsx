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
    title: "Notre Vision",
    description:
      "Devenir un leader incontournable de la logistique multimodale en intégrant des technologies innovantes et des solutions durables, afin de répondre efficacement aux exigences d’un marché mondial en constante mutation.",
  },
  {
    id: 13055474,
    icon: faBullseye,
    title: "Notre Mission",
    description:
      "Proposer des solutions logistiques globales, responsables et agiles, alliant performance, rapidité et respect des normes environnementales, pour accompagner durablement nos partenaires dans leurs ambitions.",
  },
  {
    id: 8212456,
    icon: faHandshake,
    title: "Nos Valeurs",
    description:
      "Excellence, écoute, innovation, engagement humain et durabilité : ces piliers structurent notre culture d’entreprise et nourrissent une collaboration solide avec nos partenaires.",
  }
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
