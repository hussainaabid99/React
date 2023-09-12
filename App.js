import React from "react";
import ReactDOM from "react-dom/client";

/***
 *  !Parcel features
 *
 * Hot Module Reloading
 * File Watcher Algorithm - C++
 * Bundling
 * Minification
 * Cleaning Code
 * Dev and Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev machine
 * Manages Port Number
 * Consistent Hashing Algorithms
 * Zero Config
 * 
 * 
 * 
 * Transitive Dependencies
 */

const heading = React.createElement("h1", {
          id: "title",
},
          "Heading 1 for parcel"
);

const heading2 = React.createElement(
          "h2",
          {
                    id: "title",
          },
          "Heading 2"
);

const container = React.createElement(
          "div",
          {
                    id: "container",
          },
          [heading, heading2]
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root 
root.render(container);

