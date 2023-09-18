
import RestaurantCard from "../components/RestaurantCard.js"
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";


function filterData(searchInput, restaurants) {

    const filter = restaurants.filter((restaurant) => restaurant?.info?.name?.toLowerCase()?.includes(searchInput));

    return filter;
}

const Body = () => {

    const [allRestaurant, setAllRestaurant] = useState([]);
    const [searchInput, setSearchInput] = useState();
    const [filteredRestaurants, setFilteredRestaurants] = useState("");

    useEffect(() => {
        //API call
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.7956531&lng=86.43038589999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();



        setAllRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if (!allRestaurant) return null;

    // if (filteredRestaurants?.length === 0) return <h1>No restaurant match your filter!! </h1>;

    return (allRestaurant?.length === 0) ? < Shimmer /> : (
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


                    const data = filterData(searchInput, allRestaurant);

                    setFilteredRestaurants(data);

                }} >Search</button>
            </div>
            <div className="restaurant-list">
                {
                    filteredRestaurants.map((restaurant) => {
                        return (
                            <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
                                <RestaurantCard {...restaurant.info} />
                            </Link>
                        )
                    })
                }

            </div>
        </>
    );
}

export default Body;