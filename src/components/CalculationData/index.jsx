import React, { useEffect, useRef } from 'react';
import { images } from '../../assets/images';

import './style.css';

export default function CalculationData() {
  const countersRef = useRef([]);

  useEffect(() => {
    countersRef.current.forEach(counter => {
      const target = +counter.dataset.target;
      let current = 0;

      const updateCount = () => {
        const increment = target / 100;
        current += increment;

        if (current < target) {
          counter.innerText = Math.ceil(current);
          setTimeout(updateCount, 30);
        } else {
          counter.innerText = target + "+";
        }
      };

      updateCount();
    });
  }, []);

  return (
    <div className="stats-container">
      <div className="about-box">
        <img src={images.kagwhite} alt="KAG Tiles Logo" className="logo" />
        <p className="content">
           KAG Tiles, a frontrunner in the ceramics industry, embodies excellence and innovation in tile manufacturing.
 With a rich legacy of delivering top-quality tiles, the company continues to redefine aesthetics and functionality
 through its diverse range of products. Committed to precision and style, KAG Tiles remains a trusted choice
 for those seeking sophistication and durability in their spaces.
        </p>
      </div>

      <div className="stats-box">
        <div className="stat">
          <div className='iconwrap'>
             <img src = {images.StarIcon}>
          </img>
          </div>
          <div
            className="count"
            data-target="25"
            ref={el => (countersRef.current[0] = el)}
          >
            0
          </div>
          <p className="content">Year Experience</p>
        </div>
        <div className="stat">
          <div className='iconwrap'>
             <img src = {images.Store}>
          </img>
          </div>
          <div
            className="count"
            data-target="100"
            ref={el => (countersRef.current[1] = el)}
          >
            0
          </div>
          <p className="content">Stores Near you</p>
        </div>
        <div className="stat">
          <div className='iconwrap'>
             <img src = {images.Partner}>
          </img>
          </div>
          <div
            className="count"
            data-target="300"
            ref={el => (countersRef.current[2] = el)}
          >
            0
          </div>
          <p className="content">Channels Partner</p>
        </div>
        <div className="stat">
          <div className='iconwrap'>
             <img src = {images.Product}>
          </img>
          </div>
          <div
            className="count"
            data-target="2500"
            ref={el => (countersRef.current[3] = el)}
          >
            0
          </div>
          <p className="content">Products For You</p>
        </div>
      </div>
    </div>
  );
}
