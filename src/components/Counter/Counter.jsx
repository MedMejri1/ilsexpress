import React, { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsapConfig.JS";

const Counter = ({ style }) => {
  const container = useRef(null);
  const countNumbersRef = useRef([]);
  const countIdRef = useRef([]);

  useGSAP(
    () => {
      countIdRef.current.forEach((num, index) => {
        const targetValue = parseInt(num.getAttribute("data-target"), 10);
        gsap.fromTo(
          num,
          {
            innerText: 0,
          },
          {
            innerText: targetValue,
            duration: 3,
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: num,
              start: "top center+=200",
              markers: false,
            },
            onUpdate: function () {
              num.innerText = Math.floor(num.innerText);
            },
          }
        );
      });

      gsap.from(countNumbersRef.current, {
        scrollTrigger: {
          trigger: countNumbersRef.current,
          start: "top center+=200",
          markers: false,
        },
        duration: 0.5,
        scale: 0.5,
        opacity: 0,
        stagger: 0.1,
        ease: "elastic",
        force3D: true,
      });
    },
    { scope: container }
  );

  return (
    <section ref={container}>
      <div className="cs-section-height-half"></div>
      {style !== "style2" && <div className="cs-container-border"></div>}

      <div className="cs-section-height-half"></div>
      <div className="cs-counter-wrap" ref={countNumbersRef}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="cs-counter-item">
                <div className="cs-count-text">
                  <span className="cs-text-style-h2">+</span>
                  <span
                    ref={(el) => (countIdRef.current[0] = el)}
                    className="amin_auto_count cs-text-style-h2"
                    data-target="7"
                  >
                    0
                  </span>
                  
                </div>
                <div className="cs-counter-title">
                  <p>Years of Experience</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cs-counter-item">
                
                <div className="cs-count-text">
                  <span className="cs-text-style-h2">+</span>
                  <span
                    ref={(el) => (countIdRef.current[1] = el)}
                    className="amin_auto_count cs-text-style-h2"
                    data-target="1999"
                  >
                    0
                  </span>
                  
                </div>
                <div className="cs-counter-title">
                  <p>Agents Worldwide</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cs-counter-item">
                <div className="cs-count-text">
                     <span className="cs-text-style-h2">+</span>
                  <span
                    ref={(el) => (countIdRef.current[2] = el)}
                    className="amin_auto_count cs-text-style-h2"
                    data-target="30500"
                  >
                    0
                  </span>
               
                </div>
                <div className="cs-counter-title">
                  <p>Tons Transported Annually</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cs-counter-item">
                <div className="cs-count-text">
                  <span className="cs-text-style-h2">+</span>
                  <span
                    ref={(el) => (countIdRef.current[3] = el)}
                    className="amin_auto_count cs-text-style-h2"
                    data-target="2598"
                  >
                    0
                  </span>
                  
                </div>
                <div className="cs-counter-title">
                  <p>Operations Per Year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
