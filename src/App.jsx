import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <div className="p-5">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
