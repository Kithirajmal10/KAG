import './style.css';

export default function ContentData() {
  return (
    <div className="explore-section">
      <div className="explore-left">
        <h1>
          <span className="title-left">EXPLORE</span>{' '}
          <span className="title-right">Our Wall Tiles</span>
        </h1>
        <p className="content">
          Transform your space with our exquisite wall tiles. Elevate your interior design with a wide range of styles, colors, and textures that cater to every taste and aesthetic. Whether you're aiming for a sleek, modern look or a timeless, classic feel, our wall tiles offer versatility and quality that can enhance any room in your home. Crafted with precision and designed for durability, our wall tiles not only add a touch of elegance but also provide a practical solution for easy maintenance. Explore our collection today and let your walls become a canvas of endless possibilities. With our wall tiles, you can turn your vision into a stunning reality.
        </p>
      </div>

      <div className="explore-right">
        <div className="tile-card image">
          
            <img
              src="https://futurestiles.com/wp-content/uploads/2024/11/Black-Elegant-Interior-Design-Presentation-2024-11-09T162016.483-min-1024x576.jpg"
              alt="Kitchen Wall Tile"
              className="tile-image"
            />
        </div>

        <div className="tile-card image">
          <img
            src="https://futurestiles.com/wp-content/uploads/2024/11/Black-Elegant-Interior-Design-Presentation-2024-11-09T162016.483-min-1024x576.jpg"
            alt="Tile Image"
            className="tile-image"
          />
        </div>
      </div>
    </div>
  );
}
