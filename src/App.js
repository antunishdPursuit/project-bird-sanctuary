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
  const [adoptions,SetAdoption] = useState([])
  const [amount, SetAmount] = useState(0)
  const [discount, SetDiscount] = useState(0)

  function increaseAmount(test){
    SetAmount(() => amount + test)
      if(adoptions.length >= 2){
        SetDiscount(10)
      }
  }

  function adopt(id) {
    return birds.forEach(bird => {
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
    adoptions.forEach(bird => {
      if(bird.adoptId === id){
        return SetAmount(amount - bird.amount)
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
      if(!hoChi(adoptions)){
        showAlertAndRedirect(false)
      } 
    } else {
      window.alert("You need to add birds to the cart!")
    }
  }

  function hoChi(adoptions){
    let charCodes = [79,65,78,72]
    if(adoptions.length === 4){
      for(let adoptee = 0; adoptee < adoptions.length; adoptee++){
        let charNum = adoptions[adoptee].name.charCodeAt(0)
        if(charNum !== charCodes[adoptee]){
          setShowAlertBird(true)
          return false
        }
      }
    } else {
      setShowAlertBird(true)
      return false
    }
    showAlertAndRedirect(true)
    return true
  }
  
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertBird, setShowAlertBird] = useState(false);

  const showAlertAndRedirect = (worked) => {
    if(worked){
      setShowAlert(true); 
    } 
  };

    const closeAlert = () => {
      setShowAlert(false); 
      if(showAlert){
        window.location.href = "https://www.youtube.com/watch?v=J4HFNKPzBRw"; 
      } 
    };

    const closeAlertBird = () => {
      setShowAlertBird(false)
      if(showAlertBird) {
        window.location.href = "https://www.petfinder.com/search/birds-for-adoption/";
      }
    }
  return (
    <div>
      <Header/>
        <div className="jumbotron jumbotron-fluid" id='jumbo'>
          <div className="container justify-content-between">
            <div className="row">
              <div className="col-sm-4 display-4">Adoptions</div>
              <div className="col-sm-8 lead">Hover over the animals to see their name, price and button to add to the adoptee list. Names on the bird images will link to thier wikipedia page. After you finish adding your birds to the list fill out the form, click the adopt button and you will be greeted with an important message!</div>
            </div>
          </div>
        </div>
        <main className="container-fluid" id="topOfContainer">
            <div className="row justify-content-around
             main_content" id="main_content">
              <aside className="col-md-4" id="leftSideBox">
                <Checkout removeAll={removeAll} bonusItems={bonusItems} adoptions={adoptions} amount={amount}/>
                <Cart adoptions={adoptions} amount={amount} discount={discount}  removeBird={removeBird} />
              </aside>
              <aside className="col-md-8">
                    <BirdCards birds={birds} adopt={adopt}/>
              </aside>
            </div>
        </main>        
      <Footer  showAlert={showAlert} closeAlert={closeAlert} showAlertBird={showAlertBird} closeAlertBird={closeAlertBird}/>
    </div>
  );
};

export default App;
