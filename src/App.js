import React, { useState, useEffect} from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Customize from "./components/Customize";
import Checkout from "./components/Checkout";

function App() {
  const [ingredients, setIngredients] = useState({
    basil: false,
    olive: false,
    mushroom: false,
    pineapple: false,
    tomato: false,
    cheese: false
  })

  useEffect(() => {
    const data = localStorage.getItem("ingredients");
    if (data) {
      setIngredients(JSON.parse(data));
    }
  }, []);

  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Customize ingredients={ingredients} setIngredients={setIngredients} />}>
          </Route>
          <Route path="/checkout" element={<Checkout ingredients={ingredients} />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
