import { IMG_CDN_URL } from "../constants";
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  // object destructuring -->
  // const { name, cuisines, cloudinaryImageId, lastMileTravelString } =
  //   restaurant.data;
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h2>{name}</h2>
      {/* <h3>{cuisines.join(",")}</h3> */}
      {/* <h4>{lastMileTravelString} ETA</h4> */}
    </div>
  );
};

export default RestaurantCard;
