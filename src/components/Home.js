import React from "react";
import { username, city } from "../data/user"; // ✅ import the named exports

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home; // ✅ export the component so it can be used in App.js
