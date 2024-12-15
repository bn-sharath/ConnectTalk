import { Route, Routes } from "react-router-dom";

import React from 'react'
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

function Chat_routes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  )
}

export default Chat_routes
