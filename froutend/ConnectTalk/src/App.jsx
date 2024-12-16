import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Chat_routes from "./routers/Chat_routes.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Chat_routes/>
    </div>
  );
};

export default App;
