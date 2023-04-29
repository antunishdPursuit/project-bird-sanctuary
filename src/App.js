import { useState } from "react";
import birdData from "./data/birds.js";
import {bonusItems} from "./data/bonusItems.js";
import BirdCards from "./Components/BirdCards.js";
import Carts from "./Components/Carts.js";
import Checkout from "./Components/Checkout.js";



function App () {
  const [birds, setBirds] = useState(birdData)
  console.log(birds)
  return (
    <div>
      <h1>Hello, world!</h1>
      <BirdCards/>
      <Carts/>
      <Checkout/>
    </div>
  );
};

export default App;
