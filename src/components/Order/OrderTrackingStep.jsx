import React from "react";
const OrderTrackingStep = ({ status, date, isLast }) => {
  return (
    <div className="cs-logi-order-track-step">
      <div className="cs-logi-order-track-status">
        <span className="cs-logi-order-track-status-dot"></span>
        {!isLast && <span className="cs-logi-order-track-status-line"></span>}
      </div>
      <div className="cs-logi-order-track-text">
        <p className="cs-logi-order-track-text-stat">{status}</p>
        <span className="cs-logi-order-track-text-sub">{date}</span>
      </div>
    </div>
  );
};
export default OrderTrackingStep;
