import "./App.css";
import Accordion from "./components/accordion/accordion";
import RandomColor from "./components/ramdomColor/RandomColor";
import StarRating from "./components/starRating/StarRating";
import ImageSlider from "./components/imageSlider/ImageSlider";

const BASE_URL = "https://api.unsplash.com/photos/?client_id=UD4sp18FLEwELcJFfp5QmZfg2fyTDDWeo4lHC9GDJac";

function App() {
  return (
    <div>
      <Accordion />
      <RandomColor />
      <StarRating />
      <ImageSlider BASE_URL={BASE_URL}/>
    </div>
  );
}

export default App;
