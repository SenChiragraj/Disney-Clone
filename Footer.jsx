import React from "react";
import "./styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="section1 sections">
          {/* Feature ADs */}
          <h3>Featured Ads</h3>
          <div className="cards-container">
            <div className="cards">
              <img
                src="https://lumiere-a.akamaihd.net/v1/images/900x540_dit_2bbf385b.jpeg?region=0,0,960,540"
                alt=""
              />
              <h5>Disney Imagine That | Disney Channel</h5>
            </div>
            <div className="cards">
              <img
                src="https://st1.bgr.in/wp-content/uploads/2022/06/Untitled-design-2022-06-03T091648.119.jpg"
                alt=""
              />

              <h5>Marvel's Spider-Man</h5>
              <p>
                When new foes threaten the city, a new web-slinger arises as
                Spider-Man. Marvel’s Spider-Man: Miles Morales has arrived on
                PlayStation 4 and PlayStation 5. Get the game now:
                http://amzn.to/ <br /> #BeGreater #BeYourself #MilesMorales
              </p>
            </div>
          </div>
        </div>

        <div className="section2 sections">
          {/* Explore Holidays  */}
          <h3>Explore Disney Holidays</h3>
          <div className="cards-container cards-container-2">
            <div className="cards">
              <img src="https://nationaltoday.com/wp-content/uploads/2020/05/star-wars-day.jpg" alt="" />

              <h5>Legends of the Force</h5>
              <p>DISCOVER NOW AT DISNEYLAND©️ PARIS</p>
            </div>

            <div className="cards">
              <img src="https://gray-wibw-prod.cdn.arcpublishing.com/resizer/gVlPrXsJf61LHnX4H8mVv2TklIA=/1200x1200/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/BF4JOOZX2RE5REG54GRRO666F4.jpg" alt="" />
              <h5>14 Days Ticket at a 7 Day Price</h5>
              <p>BOOK WITH WALT DISNEY WORLD</p>
            </div>
            <div className="cards">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-eyIG-dy9ir0bWH_a9JwUsXoXpKqW_G_agQ&usqp=CAU" alt="" />
            <h5>Find Your Perfect Holiday</h5>
            <p>BOOK WITH DISNEY CURISE LINE</p>
          </div>
          </div>

          
        </div>
        
        <div className="section3 sections">
          {/* More form Disney */}
          <h3>More From Disney</h3>
          <div className="cards-container">
            <div className="cards">
              <img src="https://people.com/thmb/et3_imOkc0bUiShIGpFJMKebK70=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/winnie-the-pooh-3-3ab9d3a3f4464722933f4fa12fec1fa5.jpg" alt="" />
              <h5>Disney Junior Book</h5>
              <p>Make your kids birthday even more special b creating your own personlized birthday video for your child.</p>

              <span className="small-bottom-text">DISNEY JUNIOR</span>
            </div>

            <div className="cards">
              <img src="https://i.pinimg.com/originals/98/5e/04/985e045942a1eaffee20ffc2bde7e956.jpg" alt="" />
              <h5>Happy Anniversary Mickey</h5>
              <p>It all started with a mouse. We're are celebrating 90years of the True Original</p>
              <br />
              <span className="small-bottom-text">DISNEY</span>

            </div>
          </div>

        </div>
      </div>
      <div className="bottom-footer-elements"></div>
    </div>
  );
}

export default Footer;
