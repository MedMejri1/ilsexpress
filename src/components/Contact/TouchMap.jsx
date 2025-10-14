import React from "react";
import { Link } from "react-router-dom";
import ContactInfo from "./ContactInfo";
import MapHotspot from "./MapHotspot";

const contactData = {
  title: "Get In Touch",
  description:
    "The guarantee of reliable and efficient service is our mission. It has roots in a piece of classic random text.",
  offices: [
    {
      title: "Corporate Office",
      address: "Immeuble Golden Towers sis au Centre Urbain Nord 1082 TUNIS.",
      phone: "+21653448408",
      email: "administration@ilsexpress.tn",
    },
    {
      title: "Canada Office",
      address: "Immeuble Golden Towers sis au Centre Urbain Nord 1082 TUNIS.",
      phone: "+21653448408",
      email: "administration@ilsexpress.tn",
    },
  ],
};

const TouchMap = () => {
  return (
    <section>
      <div className="cs-section-height"></div>
      <div className="cs-contact-page-content">
        <div className="container-fluid">
          <div className="row cs_center">
            <div className="col-xl-5">
              <ContactInfo contactData={contactData} />
              <div className="cs-height-50"></div>

              <div className="cs-primary-btn">
                <Link to="/contact-us">
                  Contact Us
                  <i className="flaticon-right-arrow"></i>
                </Link>
              </div>
            </div>
            <div className="col-xl-7">
              <MapHotspot />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TouchMap;
