import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { IMG_CDN_URL } from "./constants";
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

// App layout component
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
