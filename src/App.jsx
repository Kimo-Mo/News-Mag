import { useState } from "react";
import NavBar from "./components/NavBar";
import NewsBoard from "./components/NewsBoard";
import "./App.css"
function App() {
  const [category, setCategory] = useState("general");

  return (
    <>
      <NavBar setCategory={setCategory} />
      <NewsBoard category={category} />
    </>
  );
}

export default App;
