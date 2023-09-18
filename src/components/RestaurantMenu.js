import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
     //how to read dynamic params
     const { id } = useParams();


     const [restaurant, setRestaurant] = useState(null);
     const [menuItem, setMenuItem] = useState([]);

     useEffect(() => {
          getRestaurantInfo();
     }, []);

     const getRestaurantInfo = async () => {

          try {
               const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.7956531&lng=86.43038589999999&restaurantId=" + id);

               const res_data = await data.json();
               const menuItemList = res_data.data?.cards[2]?.["groupedCard"]?.cardGroupMap?.REGULAR?.cards;

               const itemCategory = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

               const menu = menuItemList.map(item => {
                    if (item.card.card["@type"] === itemCategory) {
                         return item.card.card;
                    }
               });

               const modifiedData = {
                    info: res_data.data.cards[0].card.card.info,
                    menu: menu.filter((value) => value !== undefined),
               };

               const nameOfMenuItems = modifiedData.menu.map((item) => {
                    return item.itemCards.map((object) => {
                         return object.card.info.name;
                    })
               });

               setMenuItem(nameOfMenuItems);
               setRestaurant(modifiedData.info);

          } catch (error) {
               console.log(error);
          }


     }

     return (!restaurant || !menuItem) ? <Shimmer /> : (
          <div className="menu" >
               <h1>{restaurant?.name}</h1>
               <h2>
                    Restaurant id: {id}
               </h2>
               <img id="res_image" src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
               <h3>{restaurant?.areaName}</h3>
               <h3>{restaurant?.city}</h3>
               <h3>{restaurant?.avgRating} stars</h3>
               <h3>{restaurant?.costForTwoMessage}</h3>
               <div className="menu">
                    <h1> Menu </h1>

                    <ul>
                         <div>
                              <ul>

                                   {
                                        Object.values(menuItem).map((item) => {
                                             return item.map((elemment) => {
                                                  return <li>{elemment}</li>;
                                             })
                                        })
                                   }

                              </ul>
                         </div>
                    </ul>
               </div>

          </div >
     );
};



export default RestaurantMenu;