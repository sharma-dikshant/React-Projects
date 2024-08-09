import "./App.css";
import Accordion from "./components/accordion/accordion";
import RandomColor from "./components/ramdomColor/RandomColor";
import StarRating from "./components/starRating/StarRating";
import ImageSlider from "./components/imageSlider/ImageSlider";
import Header from "./components/header/Header";
import { ThemeProvider } from "./components/contexts/ThemeContext";
import ShoppingCart from "./components/shopping/ShoppingCart";
import ShoppingList from "./components/shopping/ShoppingList";

import { useSelector } from "react-redux";

const BASE_URL =
  "https://api.unsplash.com/photos/?client_id=UD4sp18FLEwELcJFfp5QmZfg2fyTDDWeo4lHC9GDJac";

function App() {
  const store = useSelector((state) => state);
  console.log(store);
  return (
    <div>
      <ThemeProvider>
        <Header />
        <Accordion />
        <RandomColor />
        <StarRating />
        <ImageSlider BASE_URL={BASE_URL} />
        <ShoppingList />
        <ShoppingCart />
      </ThemeProvider>
    </div>
  );
}

export default App;
