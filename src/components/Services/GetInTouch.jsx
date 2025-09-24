import React from "react";
import { Link } from "react-router-dom";

const GetInTouch = () => {
  return (
    <div className="cs-widget-item">
  <div className="cs-single-link">
    <div className="cs-widget-title">
      <h6>Get In Touch</h6>
    </div>
    <div className="cs-widget-get-touch">
      <p>Contact ILS EXPRESS for reliable and efficient logistics solutions.</p>
      <div className="email-phone-widget">
        <h6>
          <Link to="tel:+21653448408">+216 53 448 408</Link>
        </h6>
        <h6>
          <Link to="tel:+21623159999">+216 23 159 999</Link>
        </h6>
        <h6>
          <Link to="mailto:contact@ilsexpress.tn">contact@ilsexpress.tn</Link>
        </h6>
      </div>
    </div>
  </div>
</div>

  );
};

export default GetInTouch;
