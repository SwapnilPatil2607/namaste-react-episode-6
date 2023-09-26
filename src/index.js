import React from "react";
import ReactDOM from "react-dom/client";

// look at the extension below , all three works it treats all three as JS
import Header from "./Header.jsx";
import Body from "./Body.js";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

// Reconcialliation algo uses diff algorithm to compare
// and find difference between Old and new virtual DOM and then
// it updates in actual DOM

// Vitual DOM is basically a JS comp

// actual DOM
// it is tree structure of html
// <div> </div>

// Vitual DOM
// it is a JS object
console.log(<Body />);
// you can console.log any component you can see it in browser console
const Root = ReactDOM.createRoot(document.getElementById("root"));

Root.render(<AppLayout />);
