import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} />;
      })}

      {/* <RestaurantCard
          name={restaurantList[0].data.name}
          cloudinaryImageId={restaurantList[0].data.cloudinaryImageId}
        />
        <RestaurantCard
          name={restaurantList[1].data.name}
          cloudinaryImageId={restaurantList[1].data.cloudinaryImageId}
        />
        <RestaurantCard
          name={restaurantList[2].data.name}
          cloudinaryImageId={restaurantList[2].data.cloudinaryImageId}
        />
        <RestaurantCard
          name={restaurantList[3].data.name}
          cloudinaryImageId={restaurantList[3].data.cloudinaryImageId}
        /> */}

      {/* Instead of passing them individually you can pass via spreadOf operator */}
      {/* <RestaurantCard {...restaurantList[4].data} /> */}
    </div>
  );
};

export default Body;
