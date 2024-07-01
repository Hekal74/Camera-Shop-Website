import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import './style.css';

const SlidingBar = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef(null);

  const handleSwipedLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleSwipedRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipedLeft,
    onSwipedRight: handleSwipedRight,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    setIsTransitioning(true);
    setTranslateX(-currentIndex * 100);

    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 300); // Match this duration with the CSS transition duration

    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  const handleButtonClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="sliding-bar-container" {...handlers}>
      <div className="sliding-bar">
        <div className="label">
          <h1 className="slidertitle">Our shop</h1>
          <div
            className={`slider ${isTransitioning ? 'transition' : ''}`}
            style={{ transform: `translateX(${translateX}%)` }}
          >
            {images.map((image, index) => (
              <div className="img_slider" key={index}>
                <img src={image} alt={`Slide ${index}`} />
                <div className="price">
                  <h1>Camera {index + 1}</h1>
                  <p>$97.70</p>
                  <button className="view-details" >View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidingBar;
