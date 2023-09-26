import { useState, useEffect } from "react";
import { Card } from "./Card";
import { ShimmerCards } from "./ShimmerCards";

const Body = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    // fetch is not provided by react or JS it is provided by browser
    const apiResponse = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.159014&lng=72.9985686&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    ).then((responseData) => responseData.json());

    const data = await apiResponse.data.cards[5].card.card.gridElements
      .infoWithStyle.restaurants;
    console.log(data);

    setData(data);
  };

  useEffect(() => {
    fetchData();
    console.log("useEffect will be called after render (inside useEffect)");
  }, []);

  console.log("this will printed before useEffect (Component rendered)");

  // this is a old way to show temporary UI , we will use shimmer ui instead
  // if (data.length === 0) {
  //   return <h1>Loading.....</h1>;
  // }

  return (
    <div className="container">
      <input type="text" placeholder="Search Places" />
      <br />
      <button
        onClick={() => {
          setData(data.filter((res) => res.info.avgRating > 4));
        }}
      >
        Top Rated Restaurants
      </button>

      <div className="cards">
        {/* we are using conditional rendering here (fancy name for this simple thing) */}
        {data.length === 0 ? (
          // this is shimmer UI concept instead of loader
          <ShimmerCards />
        ) : (
          data.map((restaurant) => (
            <Card key={restaurant.info.id} resData={restaurant} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
