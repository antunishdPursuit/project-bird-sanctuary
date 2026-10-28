export default function Checkout({ removeAll, bonusItems, adoptions, amount }) {
  const bonusCount = amount < 300 ? 1 : amount <= 500 ? 2 : amount <= 1000 ? 3 : 4;
  if (adoptions.length === 0) return null;
  return <section className="checkout" aria-labelledby="checkout-heading">
    <h2 id="checkout-heading">Initial adoption form</h2>
    <p>This is a simulation; no adoption request is sent.</p>
    <form onSubmit={removeAll}>
      <label htmlFor="fname">First name</label><input id="fname" name="fname" autoComplete="given-name" required />
      <label htmlFor="lname">Last name</label><input id="lname" name="lname" autoComplete="family-name" required />
      <label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required />
      <label htmlFor="zipCode">ZIP code</label><input id="zipCode" name="zipCode" autoComplete="postal-code" required />
      <button type="submit">Adopt!</button>
    </form>
    <div className="bonuses"><h3>Bonus items</h3>
      <ul>{bonusItems.slice(0, bonusCount).map(item => <li key={item}>{item}</li>)}</ul>
      {bonusCount === 4 && <strong>Max Bonuses</strong>}
    </div>
  </section>;
}
