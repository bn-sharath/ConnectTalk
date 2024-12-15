import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Chat_routes from "./Chat_routes.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Chat_routes/>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
    </div>
  );
};

export default App;
