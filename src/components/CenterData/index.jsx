import './style.css'

export default function CenterData(){
return (
   <div class="floor-tiles-section">
  <div class="floor-tiles-carousel">
    <div class="tile-card" style="background-image: url('commercial.jpg');">
      <div class="tile-overlay">Commercial Tiles</div>
    </div>
    <div class="tile-card active" style="background-image: url('bedroom.jpg');">
      <div class="tile-overlay bordered">
        <h3>Bed Room Tiles</h3>
        <a href="#">› Explore More</a>
      </div>
    </div>
    <div class="tile-card" style="background-image: url('livingroom.jpg');">
      <div class="tile-overlay">Living Room tiles</div>
    </div>
  </div>

  <div class="floor-tiles-text">
    <h2><span>EXPLORE</span> <span class="highlighted">Our Floor Tiles</span></h2>
    <p>
      Our floor tiles are the perfect choice to elevate the aesthetics and functionality of your space. Crafted with precision and attention to detail, our tiles come in a wide range of styles, colors, and materials to suit any design preference. Whether you're aiming for a sleek and modern look, a rustic and natural feel, or a timeless and elegant ambiance, our floor tiles have got you covered. They are not only visually appealing but also durable and easy to maintain, ensuring that your floors remain beautiful for years to come.
    </p>
    <a href="#" class="explore-link">› Explore More</a>
  </div>
</div>
);


}