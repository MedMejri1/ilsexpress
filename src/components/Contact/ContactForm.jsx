'use client';

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import classNames from "classnames";

const SubmitBtn = ({ pending }) => (
  <button type="submit" className="cs-primary-btn" disabled={pending}>
    {pending ? "Submitting..." : "Submit"}
    <i className="flaticon-right-arrow"></i>
  </button>
);

const ContactForm = ({ style }) => {
  const formContain = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | pending | sent | error
  const [errorMsg, setErrorMsg] = useState("");

  // Your EmailJS credentials (⚠️ normally these go in .env)
  const EMAILJS_SERVICE_ID = "service_f7tdg3n";
  const EMAILJS_TEMPLATE_ID = "template_b5jtvhg";
  const EMAILJS_PUBLIC_KEY = "DuqzulvW3Mm5N0CNc";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("pending");
    setErrorMsg("");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formContain.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setStatus("sent");
      formContain.current?.reset();
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again later.");
    } finally {
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const contactpage = classNames({
    "cs-contact-page-form-wrap": style !== "style2",
  });
  const formlight = classNames("cs-form-cp-in", {
    "cs-form-light": style === "style2",
  });

  return (
    <div className={contactpage}>
      <div className={formlight}>
        <form ref={formContain} onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your full name"
              name="name"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email address"
              name="email"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="tel"
              className="form-control"
              placeholder="Enter your phone number"
              name="phone"
              required
            />
          </div>

          <div className="mb-3">
            <textarea
              className="form-control"
              rows="4"
              placeholder="Write your message here"
              name="message"
              required
            ></textarea>
          </div>

          {/* Optional hidden field for timestamp */}
          <input type="hidden" name="time" value={new Date().toLocaleString()} />

          <SubmitBtn pending={status === "pending"} />

          {status === "sent" && (
            <p className="mt-2 text-success">✅ Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="mt-2 text-danger">❌ {errorMsg}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
