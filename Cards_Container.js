import React from "react";
import "./styles/cardsContainer.css";
function Cards_Container() {
  return (
    <div className="containers">
      <h3>Explore Disney Holidays</h3>
      <div className="cards-container cards-container-2">
        <div className="cards">
          <img
            src="https://nationaltoday.com/wp-content/uploads/2020/05/star-wars-day.jpg"
            alt=""
          />

          <h5>Legends of the Force</h5>
          <p>DISCOVER NOW AT DISNEYLAND©️ PARIS</p>
        </div>

        <div className="cards">
          <img
            src="https://gray-wibw-prod.cdn.arcpublishing.com/resizer/gVlPrXsJf61LHnX4H8mVv2TklIA=/1200x1200/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/BF4JOOZX2RE5REG54GRRO666F4.jpg"
            alt=""
          />
          <h5>14 Days Ticket at a 7 Day Price</h5>
          <p>BOOK WITH WALT DISNEY WORLD</p>
        </div>
        <div className="cards">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-eyIG-dy9ir0bWH_a9JwUsXoXpKqW_G_agQ&usqp=CAU"
            alt=""
          />
          <h5>Find Your Perfect Holiday</h5>
          <p>BOOK WITH DISNEY CURISE LINE</p>
        </div>
      </div>
    </div>
  );
}

export default Cards_Container;
