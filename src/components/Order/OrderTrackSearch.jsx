import React from "react";
import { Link } from "react-router-dom";

const OrderTrackSearch = () => {
  return (
    <>
      <div class="cs-section-height"></div>
      <section class="cs-order-track-search">
        <div class="container">
          <div class="row cs_center">
            <div class="col-lg-12">
              <div class="cs-search-widget">
                <div class="cs-search-content">
                  <input type="text" placeholder="Enter your ID..." />
                </div>
                <Link to="/contact-us" class="cs-primary-btn">
                  <span>Track Order</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderTrackSearch;
