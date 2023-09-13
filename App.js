import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
          <a href="/">
                    <img
                              className="logo"
                              alt="logo"
                              src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj"
                    />
          </a>
);

const Header = () => {
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
                    "id": "300308",
                    "name": "Kaveri's Restaurant",
                    "cloudinaryImageId": "hawe8breczghxnwwwmwa",
                    "locality": "Bank More",
                    "areaName": "Dhanbad Locality",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                              "North Indian",
                              "Indian",
                              "Chinese",
                              "Biryani",
                              "Kebabs",
                              "Snacks"
                    ],
                    "avgRating": 3.9,
                    "feeDetails": {
                              "restaurantId": "300308",
                              "fees": [
                                        {
                                                  "name": "BASE_DISTANCE",
                                                  "fee": 1200
                                        },
                                        {
                                                  "name": "BASE_TIME"
                                        },
                                        {
                                                  "name": "ANCILLARY_SURGE_FEE"
                                        }
                              ],
                              "totalFee": 1200
                    },
                    "parentId": "115850",
                    "avgRatingString": "3.9",
                    "totalRatingsString": "1K+",
                    "sla": {
                              "deliveryTime": 33,
                              "lastMileTravel": 2.3,
                              "serviceability": "SERVICEABLE",
                              "slaString": "33 mins",
                              "lastMileTravelString": "2.3 km",
                              "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                              "nextCloseTime": "2023-09-13 22:45:00",
                              "opened": true
                    },
                    "badges": {

                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                              "entityBadges": {
                                        "imageBased": {

                                        },
                                        "textBased": {

                                        },
                                        "textExtendedBadges": {

                                        }
                              }
                    },
                    "aggregatedDiscountInfoV3": {
                              "header": "₹125 OFF",
                              "subHeader": "ABOVE ₹199",
                              "discountTag": "FLAT DEAL"
                    },
                    "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                        "lottie": {

                                        },
                                        "video": {

                                        }
                              }
                    },
                    "reviewsSummary": {

                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {

                    }
          },

          {
                    "id": "113486",
                    "name": "Kapson Food",
                    "cloudinaryImageId": "i1raxe1c8fatwn1yeakn",
                    "locality": "Sardar Patel Nagar",
                    "areaName": "Kasturba Nagar",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                              "Continental",
                              "Chinese"
                    ],
                    "avgRating": 3.7,
                    "feeDetails": {
                              "restaurantId": "113486",
                              "fees": [
                                        {
                                                  "name": "BASE_DISTANCE",
                                                  "fee": 1200
                                        },
                                        {
                                                  "name": "BASE_TIME"
                                        },
                                        {
                                                  "name": "ANCILLARY_SURGE_FEE"
                                        }
                              ],
                              "totalFee": 1200
                    },
                    "parentId": "114921",
                    "avgRatingString": "3.7",
                    "totalRatingsString": "5K+",
                    "sla": {
                              "deliveryTime": 20,
                              "lastMileTravel": 1.3,
                              "serviceability": "SERVICEABLE",
                              "slaString": "20 mins",
                              "lastMileTravelString": "1.3 km",
                              "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                              "nextCloseTime": "2023-09-13 23:00:00",
                              "opened": true
                    },
                    "badges": {

                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                              "entityBadges": {
                                        "imageBased": {

                                        },
                                        "textBased": {

                                        },
                                        "textExtendedBadges": {

                                        }
                              }
                    },
                    "aggregatedDiscountInfoV3": {
                              "header": "₹125 OFF",
                              "subHeader": "ABOVE ₹199",
                              "discountTag": "FLAT DEAL"
                    },
                    "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                        "lottie": {

                                        },
                                        "video": {

                                        }
                              }
                    },
                    "reviewsSummary": {

                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {

                    }
          },
          {
                    "id": "93885",
                    "name": "Aroti Restaurant",
                    "cloudinaryImageId": "xg8wswywwedan7ebmavf",
                    "locality": "Hirapur",
                    "areaName": "Sardar Patel Nagar",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                              "Indian",
                              "Chinese"
                    ],
                    "avgRating": 4,
                    "feeDetails": {
                              "restaurantId": "93885",
                              "fees": [
                                        {
                                                  "name": "BASE_DISTANCE",
                                                  "fee": 1200
                                        },
                                        {
                                                  "name": "BASE_TIME"
                                        },
                                        {
                                                  "name": "ANCILLARY_SURGE_FEE"
                                        }
                              ],
                              "totalFee": 1200
                    },
                    "parentId": "36261",
                    "avgRatingString": "4.0",
                    "totalRatingsString": "10K+",
                    "sla": {
                              "deliveryTime": 28,
                              "lastMileTravel": 1.3,
                              "serviceability": "SERVICEABLE",
                              "slaString": "28 mins",
                              "lastMileTravelString": "1.3 km",
                              "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                              "nextCloseTime": "2023-09-13 23:00:00",
                              "opened": true
                    },
                    "badges": {

                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                              "entityBadges": {
                                        "imageBased": {

                                        },
                                        "textBased": {

                                        },
                                        "textExtendedBadges": {

                                        }
                              }
                    },
                    "aggregatedDiscountInfoV3": {
                              "header": "30% OFF",
                              "subHeader": "UPTO ₹75"
                    },
                    "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                        "lottie": {

                                        },
                                        "video": {

                                        }
                              }
                    },
                    "reviewsSummary": {

                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {

                    }
          },

          {
                    "id": "297008",
                    "name": "New Bombay Sweets",
                    "cloudinaryImageId": "dyafvn9xxlcn0ev3vsgu",
                    "locality": "City Centre Mall",
                    "areaName": "Jharudih",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                              "Desserts",
                              "South Indian",
                              "Chaat",
                              "Sweets"
                    ],
                    "avgRating": 4.2,
                    "veg": true,
                    "feeDetails": {
                              "restaurantId": "297008",
                              "fees": [
                                        {
                                                  "name": "BASE_DISTANCE",
                                                  "fee": 1200
                                        },
                                        {
                                                  "name": "BASE_TIME"
                                        },
                                        {
                                                  "name": "ANCILLARY_SURGE_FEE"
                                        }
                              ],
                              "totalFee": 1200
                    },
                    "parentId": "146072",
                    "avgRatingString": "4.2",
                    "totalRatingsString": "5K+",
                    "sla": {
                              "deliveryTime": 26,
                              "lastMileTravel": 1.4,
                              "serviceability": "SERVICEABLE",
                              "slaString": "26 mins",
                              "lastMileTravelString": "1.4 km",
                              "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                              "nextCloseTime": "2023-09-13 22:00:00",
                              "opened": true
                    },
                    "badges": {

                    },
                    "isOpen": true,
                    "aggregatedDiscountInfoV2": {

                    },
                    "type": "F",
                    "badgesV2": {
                              "entityBadges": {
                                        "imageBased": {

                                        },
                                        "textBased": {

                                        },
                                        "textExtendedBadges": {

                                        }
                              }
                    },
                    "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                        "lottie": {

                                        },
                                        "video": {

                                        }
                              }
                    },
                    "reviewsSummary": {

                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {

                    }
          },
          {
                    "id": "400837",
                    "name": "Kohinoor Darbar",
                    "cloudinaryImageId": "juppjcjhavapysv0wsfu",
                    "locality": "Naya Bazar",
                    "areaName": "Bank More",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                              "Indian",
                              "Chinese"
                    ],
                    "avgRating": 3.5,
                    "feeDetails": {
                              "restaurantId": "400837",
                              "fees": [
                                        {
                                                  "name": "BASE_DISTANCE",
                                                  "fee": 1200
                                        },
                                        {
                                                  "name": "BASE_TIME"
                                        },
                                        {
                                                  "name": "ANCILLARY_SURGE_FEE"
                                        }
                              ],
                              "totalFee": 1200
                    },
                    "parentId": "119625",
                    "avgRatingString": "3.5",
                    "totalRatingsString": "1K+",
                    "sla": {
                              "deliveryTime": 23,
                              "lastMileTravel": 1.6,
                              "serviceability": "SERVICEABLE",
                              "slaString": "23 mins",
                              "lastMileTravelString": "1.6 km",
                              "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                              "nextCloseTime": "2023-09-13 23:30:00",
                              "opened": true
                    },
                    "badges": {

                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                              "entityBadges": {
                                        "imageBased": {

                                        },
                                        "textBased": {

                                        },
                                        "textExtendedBadges": {

                                        }
                              }
                    },
                    "aggregatedDiscountInfoV3": {
                              "header": "₹125 OFF",
                              "subHeader": "ABOVE ₹199",
                              "discountTag": "FLAT DEAL"
                    },
                    "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                        "lottie": {

                                        },
                                        "video": {

                                        }
                              }
                    },
                    "reviewsSummary": {

                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {

                    }
          },

          {
                    "id": "92858",
                    "name": "Peep-In",
                    "cloudinaryImageId": "okt7uyacm8mkgwmk0z6e",
                    "locality": "Jora Phatak Road",
                    "areaName": "Joraphatak",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                              "North Indian",
                              "South Indian",
                              "Chinese",
                              "Snacks"
                    ],
                    "avgRating": 4,
                    "veg": true,
                    "feeDetails": {
                              "restaurantId": "92858",
                              "fees": [
                                        {
                                                  "name": "BASE_DISTANCE",
                                                  "fee": 1200
                                        },
                                        {
                                                  "name": "BASE_TIME"
                                        },
                                        {
                                                  "name": "ANCILLARY_SURGE_FEE"
                                        }
                              ],
                              "totalFee": 1200
                    },
                    "parentId": "156912",
                    "avgRatingString": "4.0",
                    "totalRatingsString": "5K+",
                    "sla": {
                              "deliveryTime": 25,
                              "lastMileTravel": 2.9,
                              "serviceability": "SERVICEABLE",
                              "slaString": "25 mins",
                              "lastMileTravelString": "2.9 km",
                              "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                              "nextCloseTime": "2023-09-13 22:00:00",
                              "opened": true
                    },
                    "badges": {

                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                              "entityBadges": {
                                        "imageBased": {

                                        },
                                        "textBased": {

                                        },
                                        "textExtendedBadges": {

                                        }
                              }
                    },
                    "aggregatedDiscountInfoV3": {
                              "header": "₹125 OFF",
                              "subHeader": "ABOVE ₹199",
                              "discountTag": "FLAT DEAL"
                    },
                    "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                        "lottie": {

                                        },
                                        "video": {

                                        }
                              }
                    },
                    "reviewsSummary": {

                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {

                    }
          },
]


//Config Driven UI


const RestaurantCard = ({
          name,
          cuisines,
          avgRating,
          cloudinaryImageId
}) => {

          return (
                    <div className="card">
                              <img
                                        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
                              />
                              <h2>{name}</h2>
                              <h3>{cuisines.join(",")}</h3>
                              <h4>{avgRating}</h4>
                    </div>
          )
}

//Props - properties

const Body = () => {
          return (
                    <div className="restaurant-list">
                              {
                                        restaurantList.map((restaurant) => {
                                                  return <RestaurantCard {...restaurant} key={restaurant.id} />
                                        })
                              }

                    </div>
          );
}
//No key <<<<<< index key (use only if you dont have anything) << unique key (best practice)

const Footer = () => {
          return (
                    <h4>Footer</h4>
          )
}

//React.Fragment (<>)  - It is like a empty tag
//JSX -  one parent 

const AppLayout = () => {
          return (
                    <>
                              <Header />
                              <Body />
                              <Footer />
                    </>
          );
}

//* Inline Stylling in React
const styleObj = {
          backgroundColor: "red",
};

const jsx = (
          <div style={styleObj}>
                    <h1>JSX</h1>
          </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root 
root.render(<AppLayout />);

