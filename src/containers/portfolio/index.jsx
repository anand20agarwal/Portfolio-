import React, { useState, useEffect, useRef } from "react";
import "./styles.scss";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import portfolioData from "./portfolioData";

function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Check if section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="portfolio" ref={sectionRef}>
      <PageHeaderContent
        headerText="Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />

      <Animate
        play={isVisible} // Play only when visible
        duration={0.5} // Faster animation (0.5s)
        start={{ transform: "translateY(50px)", opacity: 0 }}
        end={{ transform: "translateY(0px)", opacity: 1 }}
      >
        <div className="portfolio__content">
          {portfolioData.map((item, index) => (
            <div key={index} className="portfolio__image-wrapper">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="portfolio__hover-text">View Project</div>
              </a>
            </div>
          ))}
        </div>
      </Animate>
    </section>
  );
}

export default Portfolio;
