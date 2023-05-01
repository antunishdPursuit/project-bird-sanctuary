
export default function Cart({adoptions, amount, discount, removeBird}) {

 

  return (
        <div>
          <h1>Cart</h1>
          <p>Discount: {discount}%</p>
          <p>Total: ${amount}</p>
          <ol>
          {adoptions.length >= 1 ? adoptions.map((adopt, index) => (
            <li key={index}>{adopt.name}: ${adopt.amount}
              <button onClick={() =>removeBird(adopt.adoptId)}>
              Remove
              </button>
            </li>

            )): null}
          </ol>

        </div>
      );
}
