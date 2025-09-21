import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Parallax } from "swiper/modules";
import { gsap, useGSAP, SplitType } from "@/lib/gsapConfig.JS";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "Efficient Air Freight",
    image: "assets/img/air-freight/hero-img-for-air-freight.jpg",
    bgImg: "/assets/img/air-freight/airfreight-hero-bg.jpg",
  },
  {
    id: 2,
    title: "Reliable Air Freight",
    image: "assets/img/air-freight/hero-img-for-air-freight2.jpg",
    bgImg: "/assets/img/air-freight/airfreight-hero-bg.jpg",
  },
  {
    id: 3,
    title: "Seamless Air Cargo",
    image: "assets/img/air-freight/hero-img-for-air-freight3.jpg",
    bgImg: "/assets/img/air-freight/airfreight-hero-bg.jpg",
  },
];

const HeroSliderThree = () => {
  const [currentSlider, setcurrentSlider] = useState(null);
  const swiperRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (!swiperRef.current) return;

      const swiperInstance = swiperRef.current;

      const handleSlideChange = () => {
        setcurrentSlider(swiperInstance.realIndex);

        const activeSlideContent = document.querySelector(
          ".swiper-slide-active .logi-splite"
        );
        const activeSlideImage = document.querySelector(
          ".swiper-slide-active .slider-image"
        );

        gsap.set(".swiper-slide .logi-splite, .swiper-slide .slider-image", {
          clearProps: "all",
        });

        if (activeSlideContent) {
          const splitText = new SplitType(activeSlideContent, {
            types: "lines",
            lineClass: "split-child",
          });

          gsap.from(splitText.lines, {
            duration: 1.5,
            yPercent: 100,
            ease: "power4",
            stagger: 0.1,
          });
        }

        if (activeSlideImage) {
          gsap.from(activeSlideImage, {
            duration: 1.5,
            opacity: 0,
            scale: 1.5,
            ease: "power3.out",
          });
        }
      };

      swiperInstance.on("slideChangeTransitionStart", handleSlideChange);

      return () => {
        swiperInstance.off("slideChangeTransitionStart", handleSlideChange);
      };
    },
    {
      scope: containerRef,
      dependencies: [currentSlider],
      revertOnUpdate: true,
    }
  );

  const handleControllerClick = (slideIndex) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(slideIndex);
    }
  };

  return (
    <section ref={containerRef}>
      <div className="cs-hero-slider-wrap cs-hero-air-freight">
        <div className="cs-hero-slider-content-wrap">
          <div className="cs-hero-slider-content">
            <div className="swiper hero1-slider-air">
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                modules={[Navigation, Autoplay, Parallax]}
                speed={1000}
                parallax={true}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="swiper-wrapper"
              >
                {slides.map((slide, index) => (
                  <SwiperSlide
                    key={slide.id}
                    className="swiper-slide air-swiper-slider"
                  >
                    <div className="cs-hero-slide-content">
                      <div className="cs-hero-left">
                        <div className="cs-hero-title">
                          <h1 className="logi-splite">{slide.title}</h1>
                        </div>
                        <div className="cs-hero-subtitle">
                          <p className="cs_white_color">
                            Your goods, delivered with precision and care,
                            anywhere in the world.
                          </p>
                        </div>
                        <div className="cs-hero-slider-btn">
                          <Link to="/about" className="cs-primary-btn">
                            <span>Read More</span>
                          </Link>
                        </div>
                      </div>
                      <div className="cs-hero-right-img slider-image">
                        <img src={slide.image} alt="LogiHub" />
                      </div>
                    </div>
                    <div className="cs-hero-slider-img slider-image">
                      <img src={slide.bgImg} alt="LogiHub" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="cs-air-hero-controller">
              <div className="cs-air-slider-con-in">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`cs-air-sli-con-item slider-controler-item-air ${
                      index === currentSlider && "active"
                    }`}
                    data-slide={index}
                    onClick={() => handleControllerClick(index)}
                  >
                    <div className="cs-hero-sl-border"></div>
                    <h6>{String(index + 1).padStart(2, "0")}</h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSliderThree;
