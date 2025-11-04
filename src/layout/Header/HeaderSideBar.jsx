import React from "react";
import { Link } from "react-router-dom";

const HeaderSideBar = ({ className, ref }) => {
  return (
    <div className={className}>
      <button className="cs_close" ref={ref ? ref : null}></button>
      <div className="cs_side_header_overlay"></div>
      <div className="cs_side_header_in">
        <div className="cs-sidebar-about-brand">
          <Link className="cs_site_branding" to="/">
            <img src="/assets/img/logo.png" alt="Logo" />
          </Link>
          <p>
            The guarantee of reliable and efficient service is our mission.
          </p>
        </div>
        <div className="cs-sidebar-middle-area">
          <p>Immeuble Golden Towers sis au Centre Urbain Nord 1082 TUNIS.
</p>
          <div className="cs-sidebar-emai-phone">
            <Link to="+21653448408" className="cs-text-style-h6">
              +216 53448408
            </Link>
            <Link to="administration@ilsexpress.tn" className="cs-text-style-h6">
              administration@ilsexpress.tn
            </Link>
          </div>
          <div className="cs-common-icon-style cs-sidebar-social">
            <ul>
              <li>
                <Link to="https://www.facebook.com/ilsexpress">
                  <i className="flaticon-facebook-app-symbol"></i>
                </Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com/company/ils-express/">
                  <i className="flaticon-linkedin-big-logo"></i>
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/ilsexpress1/">
                  <i className="flaticon-instagram"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="cs-sidebar-bottom-area">
          <form className="cs-logi-newsletter">
            <input
              className="cs-newsletter-email"
              type="email"
              placeholder="Enter Your Email Address"
              required
            />
            <button
              className="cs-newsletter-btn svg-left-to-right-animation-wrap"
              type="submit"
            >
              Subscribe
              <span className="svg-left-to-right-animation">
                <i className="flaticon-right-arrow"></i>
                <i className="flaticon-right-arrow"></i>
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeaderSideBar;
