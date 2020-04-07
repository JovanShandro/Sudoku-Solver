import React from "react";
import "./css/App.css";
import Header from "./components/Header";
import BoardAndControls from "./components/BoardAndControls";

const App = () => {
  return (
    <div className="App">
      <Header />
      <BoardAndControls />
    </div>
  );
};

export default App;
