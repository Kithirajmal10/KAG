// import './style.css'

// export default function CalculationData(){
//     return(
// //      <div class="kag-container">
// //   <div class="kag-left">
// //     <img src="kag-logo.png" alt="KAG Tiles Logo" class="kag-logo" />
// //     <p>
// //       KAG Tiles, a frontrunner in the ceramics industry, embodies excellence and innovation in tile manufacturing.
// //       With a rich legacy of delivering top-quality tiles, the company continues to redefine aesthetics and functionality
// //       through its diverse range of products. Committed to precision and style, KAG Tiles remains a trusted choice
// //       for those seeking sophistication and durability in their spaces.
// //     </p>
// //   </div>
// //   <div class="kag-right">
// //     <div class="kag-stats">
// //       <div class="stat-item">
// //         <i class="fas fa-star"></i>
// //         <h2>25+</h2>
// //         <p>Year Experience</p>
// //       </div>
// //       <div class="stat-item">
// //         <i class="fas fa-store"></i>
// //         <h2>100+</h2>
// //         <p>Stores Near you</p>
// //       </div>
// //       <div class="stat-item">
// //         <i class="fas fa-handshake"></i>
// //         <h2>300+</h2>
// //         <p>Channels Partner</p>
// //       </div>
// //       <div class="stat-item">
// //         <i class="fas fa-box"></i>
// //         <h2>2500+</h2>
// //         <p>Products For You</p>
// //       </div>
// //     </div>
// //   </div>
// // </div>


// <div class="stats-container">
//   <div class="about-box">
//     <img src="logo.png" alt="KAG Tiles Logo" />
//     <p>
//       KAG Tiles, a frontrunner in the ceramics industry, embodies excellence and innovation in tile manufacturing...
//     </p>
//   </div>

//   <div class="stats-box">
//     <div class="stat">
//       <div class="count" data-target="25">0</div>
//       <p>Year Experience</p>
//     </div>
//     <div class="stat">
//       <div class="count" data-target="100">0</div>
//       <p>Stores Near you</p>
//     </div>
//     <div class="stat">
//       <div class="count" data-target="300">0</div>
//       <p>Channels Partner</p>
//     </div>
//     <div class="stat">
//       <div class="count" data-target="2500">0</div>
//       <p>Products For You</p>
//     </div>
//   </div>
// </div>


//     );
// }
import React, { useEffect, useRef } from 'react';
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
        <img src="logo.png" alt="KAG Tiles Logo" />
        <p>
           KAG Tiles, a frontrunner in the ceramics industry, embodies excellence and innovation in tile manufacturing.
 With a rich legacy of delivering top-quality tiles, the company continues to redefine aesthetics and functionality
 through its diverse range of products. Committed to precision and style, KAG Tiles remains a trusted choice
 for those seeking sophistication and durability in their spaces.
        </p>
      </div>

      <div className="stats-box">
        <div className="stat">
          <div
            className="count"
            data-target="25"
            ref={el => (countersRef.current[0] = el)}
          >
            0
          </div>
          <p>Year Experience</p>
        </div>
        <div className="stat">
          <div
            className="count"
            data-target="100"
            ref={el => (countersRef.current[1] = el)}
          >
            0
          </div>
          <p>Stores Near you</p>
        </div>
        <div className="stat">
          <div
            className="count"
            data-target="300"
            ref={el => (countersRef.current[2] = el)}
          >
            0
          </div>
          <p>Channels Partner</p>
        </div>
        <div className="stat">
          <div
            className="count"
            data-target="2500"
            ref={el => (countersRef.current[3] = el)}
          >
            0
          </div>
          <p>Products For You</p>
        </div>
      </div>
    </div>
  );
}
