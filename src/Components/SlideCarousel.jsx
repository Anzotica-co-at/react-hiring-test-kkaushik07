import React, { useState, useEffect, useRef } from "react";
import "../ComponentCss/Carousal.css"; // Imported component CSS styles
import { destinations } from "../DummyData/sliderDummyData"; 

export default function WhereWillYouGoNext() {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(1); // Start on first real item
  const cardWidth =  515 + 47.5 * 2; // Card width (515px) + margin (47.5px * 2)

  // Clone last and first items for seamless loop
  const extendedDestinations = [
    destinations[destinations.length - 1],
    ...destinations,
    destinations[0],
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Center the card by adjusting for viewport
    const scrollLeft = index * cardWidth - container.offsetWidth / 2 + cardWidth / 2;
    container.style.transform = `translate3d(${-scrollLeft}px, 0, 0)`;
  }, [index]);

  const scroll = (direction) => {
    if (direction === "left" && index > 0) {
      setIndex((prev) => prev - 1);
    } else if (direction === "right" && index < extendedDestinations.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  const goToSlide = (slideIndex) => {
    setIndex(slideIndex + 1); // Adjusted for cloned first item
  };

  const handleTransitionEnd = () => {
    const container = containerRef.current;
    if (!container) return;

    if (index === extendedDestinations.length - 1) {
      // Reached clone of first item, jump to real first
      container.style.transition = "none";
      const newIndex = 1;
      const scrollLeft = newIndex * cardWidth - container.offsetWidth / 2 + cardWidth / 2;
      container.style.transform = `translate3d(${-scrollLeft}px, 0, 0)`;
      void container.offsetWidth; // Force reflow
      container.style.transition = "transform 1200ms ease-in-out";
      // Delay index update to prevent animation re-trigger
      setTimeout(() => setIndex(newIndex), 0);
    } else if (index === 0) {
      // Reached clone of last item, jump to real last
      container.style.transition = "none";
      const newIndex = extendedDestinations.length - 2;
      const scrollLeft = newIndex * cardWidth - container.offsetWidth / 2 + cardWidth / 2;
      container.style.transform = `translate3d(${-scrollLeft}px, 0, 0)`;
      void container.offsetWidth; // Force reflow
      container.style.transition = "transform 1200ms ease-in-out";
      // Delay index update to prevent animation re-trigger
      setTimeout(() => setIndex(newIndex), 0);
    }
  };

  // Map index to original destinations for pagination
  const displayIndex = (index - 1 + destinations.length) % destinations.length;

  return (
    <div className="glide featured-carousel-component-container">
      <div className="header">
        <h2 className="text-lg italic text-gray-600 mb-4">Where To Go Next</h2>
      </div>

      <div className="glide-track">
        <ul
          className="glide-slides"
          ref={containerRef}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedDestinations.map((dest, i) => (
            <li
              key={`${dest.title}-${i}`}
              className={`glide-slide featured-carousel-component-container-slide ${i % 2 === 0 ? "imageTopValue" : ""} ${
                i === index ? "glide-slide--active" : ""
              } ${i < destinations.length ? "" : "glide-slide--clone"}`}
              data-slide-number={i === 0 ? destinations.length - 1 : i === extendedDestinations.length - 1 ? 0 : i - 1}
            >
              <div className="featured-carousel-component-container-slide-content">
                <picture>
                  <source
                    media="(min-width: 1200px)"
                    srcSet={`${dest.image.base}:Classic-Hor?wid=650&fit=constrain, ${dest.image.base}:Classic-Hor?wid=1300&fit=constrain 2x`}
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet={`${dest.image.base}:Classic-Hor?wid=464&fit=constrain, ${dest.image.base}:Classic-Hor?wid=928&fit=constrain 2x`}
                  />
                  <source
                    media="(max-width: 767px)"
                    srcSet={`${dest.image.base}:Classic-Hor?wid=336&fit=constrain, ${dest.image.base}:Classic-Hor?wid=672&fit=constrain 2x`}
                  />
                  <img
                    src={dest.image.base}
                    alt={dest.image.alt}
                    className="featured-carousel-component-container-slide-content--img"
                    loading="lazy"
                  />
                </picture>
                <div
                  key={`${dest.title}-${i}-${index}`}
                  className={`featured-carousel-component-container-slide-content--desc py-5 color-scheme1 px-5 mb-1 mb-md-0 ${
                    i % 2 === 0 ? "changeTopValue" : ""
                  } ${i === index ? "slide-in-from-right" : "changeLeft"}`}
                  data-slide-number={i === 0 ? destinations.length - 1 : i === extendedDestinations.length - 1 ? 0 : i - 1}
                >
                  <div className="featured-carousel-component-container-slide-content--desc-inner px-2 px-md-5 py-5 w-100">
                    <div className="pb-2 mb-1 mb-md-0 t-overline-alt-medium">{dest.opening}</div>
                    <div className="pb-xl-1 mb-2 pb-md-0 pb-1 t-subtitle-m">{dest.title}</div>
                    <div className="pb-md-5 pb-2 t-brand-font-alt-m">
                      <p>{dest.description}</p>
                    </div>
                    <div>
                      <a
                        href={dest.link}
                        className="m-link mi-link-animation"
                        data-custom_click_track_value={`${dest.title}|Explore More|internal`}
                      >
                        Explore More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="d-flex v2-animation-controls justify-content-center">
        <div className="carouselControlType2">
          <div className="glide-arrows" data-glide-el="controls">
            <button
              className="left-arrow glide-arrow glide-arrow--left t-rc-text-transform-capitalize"
              onClick={() => scroll("left")}
            >
              ◄
             
            </button>
          </div>
          <div data-glide-el="controls[nav]">
            {destinations.map((_, i) => (
              <button
                key={i}
                className={`glide-bullet ${i === displayIndex ? "glide-bullet--active" : ""}`}
                onClick={() => goToSlide(i)}
                data-glide-dir={i}
              >
                <span className="sr-only">{i + 1}</span>
              </button>
            ))}
          </div>
          <div className="glide-arrows" data-glide-el="controls">
            <button
              className="right-arrow glide-arrow glide-arrow--right t-rc-text-transform-capitalize"
              onClick={() => scroll("right")}
            >
              ►
             
            </button>
          </div>
        </div>
      </div>

      <div className="featured-carousel-component-container-count mt-md-2 d-flex justify-content-center">
        <span className="featured-carousel-component-container-count-active">{displayIndex + 1}</span>
        <span className="featured-carousel-component-container-count-total">{destinations.length}</span>
      </div>
    </div>
  );
}