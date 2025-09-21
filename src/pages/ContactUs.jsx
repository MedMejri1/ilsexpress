import React from "react";
import ContactAllContent from "@/components/Contact/ContactAllContent";
import ClientAreaAbout from "@/components/ClientArea/ClientAreaAbout";
import GoogleMap from "@/components/Contact/GoogleMap";
import BraidcrumbStyleTwo from "@/components/BreadCrumb/BraidcrumbStyleTwo";

const ContactUs = () => {
  return (
    <>
      <BraidcrumbStyleTwo title={"Contact Us"} />
      <div className="cs-section-height"></div>
      <ContactAllContent />
      <div className="cs-section-height"></div>
      <ClientAreaAbout />
      <GoogleMap />
    </>
  );
};

export default ContactUs;
