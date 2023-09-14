import { restaurantList } from "../constants.js";
import RestaurantCard from "../components/RestaurantCard.js"
import { useState } from "react";


function filterData(searchInput, restaurants) {

     const filter = restaurants.filter((restaurant) => restaurant.name.includes(searchInput));

     return filter;
}

const Body = () => {

     // let searchTxt = "KFC";

     const [searchInput, setSearchInput] = useState();      //to create state variable    //* It returns array [variable name , fn to update the variable]

     // const [searchClicked, setSearchClicked] = useState("false");

     const [restaurants, setRestaurants] = useState(restaurantList)

     return (
          <>
               <div className="search-content">
                    <input
                         type="text"
                         className="search-input"
                         placeholder="Search"
                         value={searchInput}
                         onChange={(e) => {
                              setSearchInput(e.target.value);
                         }}
                    />
                    <button className="search-btn" onClick={() => {

                         //need to filter data
                         const data = filterData(searchInput, restaurants);
                         //update the state - restaurants
                         setRestaurants(data);

                    }} >Search</button>
               </div>
               <div className="restaurant-list">
                    {
                         restaurants.map((restaurant) => {
                              return <RestaurantCard {...restaurant} key={restaurant.id} />
                         })
                    }

               </div>
          </>
     );
}

export default Body;