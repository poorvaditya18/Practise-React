import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  // react variable -> useState() Hook
  // useState() --> returns array [variableName, modifyFunction]
  // this is the local variable
  // only catch is that we create it using React Variable.
  const [searchInput, setSearchInput] = useState("");

  const [restaurants, setRestaurants] = useState(restaurantList);

  function filterData(searchInput, restaurants) {
    return restaurants.filter((restaurant) =>
      restaurant.data.name.includes(searchInput)
    );
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        ></input>

        <button
          className="search-btn"
          onClick={() => {
            // Need to filter the data and update the Restaurant List
            // update the state - restaurants
            const data = filterData(searchInput, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant.data} />;
        })}
      </div>
    </>
  );
};

export default Body;
