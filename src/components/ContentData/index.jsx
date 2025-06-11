import './style.css';

export default function ContentData(){

    return(
//  <div className ='bg-image'>
//         <div className='lefthalf'>
//             jkhlfghl;hlgfglk;jhlgfhgl
//         </div>
//         <div className='righthalf'>
//             <div className='Center'>
//                 <div className='first'>
//                  Explore
//                 </div>
//                 <div  className='second'>
//                 Our Floor Tiles
//                 </div>
//                 <div>
//                  {/* Our floor tiles are the perfect choice to elevate the aesthetics and functionality of your space. Crafted with precision and attention to detail, our tiles come in a wide range of styles, colors, and materials to suit any design preference. Whether you're aiming for a sleek and modern look, a rustic and natural feel, or a timeless and elegant ambiance, our floor tiles have got you covered. They are not only visually appealing but also durable and easy to maintain, ensuring that your floors remain beautiful for years to come.  */}
//                 </div>
//             </div>
//         </div>
//     </div>

<div class="explore-section">
  <div class="explore-left">
    <h1><span class="title-left">EXPLORE</span> <span class="title-right">Our Wall Tiles</span></h1>
    <p>
      Transform your space with our exquisite wall tiles. Elevate your interior design with a wide range of styles, colors, and textures that cater to every taste and aesthetic. Whether you're aiming for a sleek, modern look or a timeless, classic feel, our wall tiles offer versatility and quality that can enhance any room in your home. Crafted with precision and designed for durability, our wall tiles not only add a touch of elegance but also provide a practical solution for easy maintenance. Explore our collection today and let your walls become a canvas of endless possibilities. With our wall tiles, you can turn your vision into a stunning reality.
    </p>
    {/* <a href="#" class="explore-link">› Explore More</a> */}
  </div>
  <div class="explore-right">
    <div class="tile-card kitchen">
      <div class="tile-content">
        <h3>Kitchen Wall Tiles</h3>
        {/* <a href="#">› Explore More</a> */}
      </div>
    </div>
    <div class="tile-card image"></div>
    <div class="tile-card outdoor">
      <div class="tile-content">
        <h3>Outdoor Wall Tiles</h3>
        {/* <a href="#">› Explore More</a> */}
      </div>
    </div>
  </div>
</div>

    );
   
}