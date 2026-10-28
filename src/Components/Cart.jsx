export default function Cart({ adoptions, amount, discount, removeBird }) {
  return <section className="cart" aria-labelledby="cart-heading">
    <h2 id="cart-heading">My adoption list <span className="count">{adoptions.length}</span></h2>
    {adoptions.length === 0 ? <p className="empty-cart">Your list is empty. Add a bird to get started.</p> : <>
      <ul className="cart-items">{adoptions.map(adopt => <li key={adopt.adoptId}>
        <img src={adopt.img} alt="" onError={event => { event.currentTarget.style.visibility = 'hidden'; }} />
        <div><strong>{adopt.name}</strong><span>${adopt.amount.toLocaleString()}</span></div>
        <button type="button" className="remove-button" onClick={() => removeBird(adopt.adoptId)} aria-label={`Remove ${adopt.name} from adoption list`}>Remove</button>
      </li>)}</ul>
      <div className="cart-totals" aria-live="polite">
        <p>Subtotal: ${amount.toLocaleString()}</p>
        {discount > 0 && <p>Discount Applied: {discount}%</p>}
        <p className="total">Total: ${((amount * (100 - discount)) / 100).toLocaleString()}</p>
      </div>
    </>}
  </section>;
}
