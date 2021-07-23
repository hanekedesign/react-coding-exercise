import React from "react";
import { Router } from "@reach/router";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <Router className="app-container">
      <MainPage path="/" />
      <DetailPage path="details/:missionName" />
    </Router>
  );
}

export default App;
