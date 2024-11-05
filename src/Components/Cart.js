
export default function Cart({adoptions, amount, discount, removeBird}) {

  return (
    <div className="Cart">
      <div className="Cart_bonus_total">
        {adoptions.length >= 3 ? 
          (<h4>Total: ${amount * .9} 
            <p className="Cart_discount">Discount Applied: {discount}% </p>
          </h4>) 
          : 
          (<h4 className={adoptions.length === 0 ? "Cart_hidden" : ``}>Total: ${amount}
            <p className="Cart_hidden_p">Hidden Text</p>
          </h4>)
        }
        <h1> {adoptions.length === 0  ? "" : "Adoptees"}</h1>
      </div>
      <ol>
        {adoptions.length >= 1 ? adoptions.map((adopt, index) => (
          <div key={index} className="adoptee_box">
            <img className="adoptee_img_box" alt={adopt.name}src={adopt.img}></img>
            <div className="adoptee_box_overlay">
              <p >{adopt.name}: ${adopt.amount} </p>
              <button onClick={() =>removeBird(adopt.adoptId)}>
              Remove
              </button>
            </div>
          </div >
          ))
          : 
          null
        }
      </ol>
    </div>
  );
}
