export default function Checkout({removeAll}) {
    return (
        <div>
          <h1>Checkout</h1>
          <form action="#" onSubmit={removeAll} >
            <label htmlFor="fname">First name:</label><br/>
            <input type="text" id="fname" name="fname" required/><br/>
            <label htmlFor="lname">Last name:</label><br/>
            <input type="text" id="lname" name="lname" required/><br/>
            <label htmlFor="email">Email:</label><br/>
            <input type="text" id="Email" name="Email" required/><br/>
            <label htmlFor="zipCode">Zip Code:</label><br/>
            <input type="text" id="zipCode" name="zipCode" required/><br/>
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
}
