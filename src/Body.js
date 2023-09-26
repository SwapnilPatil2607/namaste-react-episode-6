import { useState } from "react";
import { DUMMY_DATA } from "../utils/constant";
import { Card } from "./Card";

const Body = () => {
  // normal variable
  // let data = DUMMY_DATA;
  // console.log(data);

  // state variable          (default value)\/
  const [data, setData] = useState(DUMMY_DATA);

  // this is normal destructuring of array
  // [data,setData]
  return (
    <div className="container">
      <input type="text" placeholder="Search Places" />
      <br />
      <button
        onClick={() => {
          setData(data.filter((res) => res.info.avgRating > 4));
          // state variable keeps UI layer in snyc with data layer
          // this state update function will trigger reconilliation
          // and Real DOM will get updated
          // so whenever state variable changes react re-render the specific component

          // -----
          // data = data.filter((res) => res.info.avgRating > 4);
          // console.log(data);
          // data will be filtered but UI wont get update
          // UI layer is not in sync with data layer because of normal variable
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="cards">
        {data.map((restaurant) => (
          <Card key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
