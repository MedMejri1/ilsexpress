import React from "react";
import classNames from "classnames";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import DynamicBackground from "@/components/DynamicBackground/DynamicBackground";
import ServiceOfferItem from "./ServiceOfferItem";

const services = [
  {
    id: 1,
    iconClass: "flaticon-up-right-arrow",
    title: "End-to-End Delivery",
    description:
      "La garantie d’un service fiable et performant, c’est notre mission.",
    imageSrc: "/assets/img/air-freight/service-item-bg-img.jpg",
  },
  {
    id: 2,
    iconClass: "flaticon-up-right-arrow",
    title: "Priority Air Freight",
    description:
      "La garantie d’un service fiable et performant, c’est notre mission.",
    imageSrc: "/assets/img/air-freight/service-item-bg-img2.jpg",
  },
  {
    id: 3,
    iconClass: "flaticon-up-right-arrow",
    title: "Express Air Freight",
    description:
      "La garantie d’un service fiable et performant, c’est notre mission.",
    imageSrc: "/assets/img/air-freight/service-item-bg-img3.jpg",
  },
  {
    id: 4,
    iconClass: "flaticon-up-right-arrow",
    title: "Warehousing",
    description:
      "La garantie d’un service fiable et performant, c’est notre mission.",
    imageSrc: "/assets/img/air-freight/service-item-bg-img4.jpg",
  },
];

const ServiceOfferList = ({ style }) => {
  const serviceitemsfullw = classNames("cs-service-items-fullw cs_bg", {
    "cs-maxw-1720": style === "style2",
  });
  return (
    <section>
      <div className="cs-section-height"></div>
      <div className="cs-service-style2-wrap">
        <div className="container">
          <div className="row">
            <SectionTitle
              title={"What We Offer"}
              captext={"Services"}
              style={"style3"}
            />
            <div className="cs-sec-title-height"></div>
          </div>
        </div>

        <DynamicBackground
          className={serviceitemsfullw}
          dataSrc="/assets/img/full-w-video-thumbnail.jpg"
        >
          <div className="cs-service-items-in">
            <div className="container-fluid">
              <div className="row">
                {services.map((service) => (
                  <div className="col-lg-3 col-md-6" key={service.id}>
                    <ServiceOfferItem service={service} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DynamicBackground>
      </div>
    </section>
  );
};

export default ServiceOfferList;
