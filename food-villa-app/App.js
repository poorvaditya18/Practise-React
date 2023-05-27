import React from "react";
import ReactDOM from "react-dom/client";

/*
          Header
            - logo 
            - Nav items 
            - Cart 
          Body
            - Search Bar 
            - Restaurant List 
               - Restaurant Card 
                  - Image 
                  - Rating 
                  - Cusines 
          Footer
              - links
              - copyright       
*/

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://lh3.googleusercontent.com/p/AF1QipMf9w4RomHXrUkQKvrxtPdjp3SLadP05HDzXlH2=w1080-h608-p-no-v0"
      ></img>
    </a>
  );
};

const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restaurantList = [
  {
    name: "BurgerKing",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf",
    cusines: ["Burger", "American"],
    rating: "4.2",
  },
  
];

const RestaurantCard = () => {
  return (
    <div className="card">
      <img src={burgerKing.image}></img>
      <h2>{burgerKing.name}</h2>
      <h3>{burgerKing.cusines.join(",")}</h3>
      <h4>{burgerKing.rating} stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};
// App layout component
const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
