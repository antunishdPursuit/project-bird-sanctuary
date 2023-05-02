import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import { v1 as generateUniqueID } from "uuid";
import { useState } from "react";
import birdData from "./data/birds.js";
import bonusItems from "./data/bonusItems.js";
import BirdCards from "./Components/BirdCards";
import Cart from "./Components/Cart.js";
import Checkout from "./Components/Checkout";
import Footer from './Components/Footer';
import Header from './Components/Header';

function App () {
  // bird data to be used as props
  const [birds] = useState(birdData)
  //pushed seleceted birds unto array
  const [adoptions,SetAdoption] = useState([])
  // added all the bird prices into 1 amount
  const [amount, SetAmount] = useState(0)
  //adding discounts
  const [discount, SetDiscount] = useState(0)

  function increaseAmount(test){
    SetAmount(() => amount + test)
      if(adoptions.length >= 2){
        SetDiscount(10)
      }
  }

  function adopt(id) {
    birds.map(bird => {
      if(bird.id === id){
        let adoptedBird = {...bird, adoptId: generateUniqueID()}
        return (
          SetAdoption([...adoptions, adoptedBird]),
          SetAmount(() => amount + adoptedBird.amount),
          increaseAmount(adoptedBird.amount)
        )

      }
    })
  }

  function removeBird(id) {
    SetAdoption(adoptions.filter(adopt => adopt.adoptId !== id))
    adoptions.map(bird => {
      if(bird.adoptId === id){
        SetAmount(amount - bird.amount)
      }
    })
    if (adoptions.length <= 3) {
      SetDiscount(0)
    }
  }

  function removeAll() {
    if(adoptions.length >= 1){
      SetAmount(0)
      SetAdoption([])
      window.alert("You're adoptions were sent through!")
    } else {
      window.alert("You need to add birds to the cart!")
    }
  }
  return (
    <div>
      <Header/>
    <main className="container">
        <div className="row">
            <aside className="col-md-3" id="leftSideBox">
              <Cart adoptions={adoptions} amount={amount} discount={discount}  removeBird={removeBird} bonusItems={bonusItems}/>
              <Checkout removeAll={removeAll}/>
            </aside>
            <aside className="col">
                  <BirdCards birds={birds} adopt={adopt}/>
            </aside>
        </div>
    </main>        
      <Footer/>
    </div>
  );
};

export default App;
