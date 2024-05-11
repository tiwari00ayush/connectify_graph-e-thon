import { useEffect, useState } from "react";
import "./App.css";
import { LandingPage } from "./pages";
import { requestPermission } from "./firebase.config";
function App() {
  useEffect(() => {
    console.log("hello");
    requestPermission();
  }, []);
  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;
