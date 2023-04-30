import { useState } from "react";
import birdData from "./data/birds.js";
// import {bonusItems} from "./data/bonusItems.js";
import BirdCards from "./Components/BirdCards";
import Carts from "./Components/Cart.js";
import Checkout from "./Components/Checkout";



function App () {
  const [birds, setBirds] = useState(birdData)
  setBirds()
  console.log(birds)
  return (
    <div>
      <h1>Hello, world!</h1>
      <BirdCards/>
      <Carts/>
      <Checkout/>
      {/* <bonusItems/> */}
    </div>
  );
};

export default App;
