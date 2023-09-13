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

const appleRestaurant = [{
          name: "Apple Restaurant",
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/q3ninryemhdwba8eam8a",
          cusines: ["Indian", "Chinese"],
          rating: "3.8"
},
{
          name: "Apple Restaurant",
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/q3ninryemhdwba8eam8a",
          cusines: ["Indian", "Chinese"],
          rating: "3.8"
},
{
          name: "Apple Restaurant",
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/q3ninryemhdwba8eam8a",
          cusines: ["Indian", "Chinese"],
          rating: "3.8"
}
]

const RestaurantCard = () => {
          return (
                    <div className="card">
                              <img
                                        src={appleRestaurant.image}
                              />
                              <h2>{appleRestaurant.name}</h2>
                              <h3>{appleRestaurant.cusines.join(",")}</h3>
                              <h4>{appleRestaurant.rating}</h4>
                    </div>
          )
}

const Body = () => {
          return (
                    <div class="restaurant-list">
                              <RestaurantCard />
                              <RestaurantCard />
                              <RestaurantCard />
                              <RestaurantCard />
                              <RestaurantCard />
                              <RestaurantCard />
                              <RestaurantCard />
                              <RestaurantCard />
                              <RestaurantCard />
                              <RestaurantCard />
                              <RestaurantCard />
                              <RestaurantCard />
                              <RestaurantCard />
                              <RestaurantCard />
                              <RestaurantCard />

                    </div>
          );
}

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

