import React from "react";
import { Link } from "react-router-dom";

const linksData = [
  { path: "/about", label: "About Us" },
  { path: "/contact", label: "Contact Us" },
  { path: "/services", label: "Our Service" },

];

const UsefulLinks = () => {
  return (
    <div className="cs-logi-footer-useful-link">
      <ul>
        {linksData.map((link, index) => (
          <li key={index}>
            <Link to={link.path} className="cs-text_b_line">
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsefulLinks;
