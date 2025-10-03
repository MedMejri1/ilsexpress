import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const contactData = {
  title: "Get In Touch",
  description:
    "The guarantee of reliable and efficient service is our mission. Contact ILS EXPRESS today for tailored logistics solutions.",
  offices: [
    {
      title: "Corporate Office",
      address: "Immeuble Golden Towers sis au Centre Urbain Nord 1082 TUNIS.",
      phone: "+2165344840",
      email: "commercial@ilsexpress.tn",
    },
    
  ],
};

const ContactAllContent = ({ style }) => {
  return (
    <section>
      <div className="cs-contact-page-content">
        <div className="container-fluid">
          <div className="row cs_center">
            <div className="col-xl-5">
              <ContactInfo contactData={contactData} />
            </div>
            <div className="col-xl-7">
              <ContactForm style={style} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAllContent;
