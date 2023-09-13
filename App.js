import React from "react";
import ReactDOM from "react-dom/client";

/***
 *  !Parcel features
 *
 ** Hot Module Reloading
 ** File Watcher Algorithm - C++
 ** Bundling
 ** Minification
 ** Cleaning Code
 ** Dev and Production Build
 ** Super Fast build algorithm
 ** Image Optimization
 ** Caching while development
 ** Compression
 ** Compatible with older version of browser
 ** HTTPS on dev machine
 ** Manages Port Number
 ** Consistent Hashing Algorithms
 ** Zero Config
 ** Tree Shaking - Removing un-wanted
 * 
 *  
 ** Transitive Dependencies
 */


//React.createElement gives us an Object

/**<div class="header">
                    <h1>Hello World</h1>
                    <ul>
                              <li>About us</li>
                              <li>Support</li>
                              <li>Home</li>
                    </ul>
          </div> */


// const container = React.createElement(
//           "div",
//           {
//                     id: "container",

//           },
//           [React.createElement(
//                     "h1",
//                     {
//                               id: "title",
//                               key: "h2"
//                     },
//                     "Hello World"

//           ), React.createElement(
//                     "ul",
//                     {},
//                     [React.createElement(
//                               "li",
//                               {},
//                               "About us"
//                     ),
//                     React.createElement(
//                               "li",
//                               {},
//                               "Support"
//                     ),
//                     React.createElement(
//                               "li",
//                               {},
//                               "Home"
//                     )]
//           )]
// );

//! JSX 

const heading2 = (                      //JSX Expression
          <h1 id="title" key="h2" tabIndex="1" className="">
                    Hello World
          </h1>);


//* Babel converts JSX => React.createElement 
//* Then React.createElement => Object => HTML */


// ! React Components
//        - Functional Components      (New)
//        - Class Based Components - (Old Way)


// * Functional Components

//Normal fn which returns a react element/JSX
//Name of FC starts with capital letter (not mandatory)

const HeaderComponent2 = () => {

          <div>
                    <h2>Functional Component</h2>
                    <h2>This is a h2 tags</h2>
          </div>

};
const HeaderComponent = () => {
          return (
                    <div>
                              {heading2}
                              <HeaderComponent2 />
                              <h2>Functional Component</h2>
                              <h2>This is a h2 tags</h2>
                    </div>
          );
};


//Both are valid

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root 
root.render(<HeaderComponent />);

