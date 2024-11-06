export default function Checkout({removeAll, bonusItems, adoptions, amount}) {
  function switchAmount(amount) {
    if (amount < 300){
      return <span>*{bonusItems[0]}*</span>
    } else if (amount <= 500) {
      return <div>
        <span>*{bonusItems[0]}*</span><br></br>
        <span>*{bonusItems[1]}*</span>
        </div>
    }
    else if (amount <= 1000) {
      return <div>
        <span>*{bonusItems[0]}*</span><br></br>
        <span>*{bonusItems[1]}*</span><br></br>
        <span>*{bonusItems[2]}*</span>
        </div>
    } else if (amount > 1000){
      return <div>
        <span>*{bonusItems[0]}*</span><br></br>
        <span>*{bonusItems[1]}*</span><br></br>
        <span>*{bonusItems[2]}*</span><br></br>
        <span>*{bonusItems[3]}*</span><br></br>
        <span><strong>*Max Bonuses*</strong></span>

      </div>
    }
  }
  return (
    <div className="Checkout container">
      {adoptions.length >= 1 &&
      
      <form action="#" onSubmit={removeAll} className="p-2 border rounded">
      Inital Adoption Form 
      <div className="mb-2">
        <input
          type="text"
          className="form-control form-control-sm"
          id="fname"
          name="fname"
          placeholder="First Name:"
          required
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          className="form-control form-control-sm"
          id="lname"
          name="lname"
          placeholder="Last Name:"
          required
        />
      </div>
      <div className="mb-2">
        <input
          type="email"
          className="form-control form-control-sm"
          id="email"
          name="email"
          placeholder="Email:"
          required
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          className="form-control form-control-sm"
          id="zipCode"
          name="zipCode"
          placeholder="Zip Code:"
          required
        />
      </div>
      <button type="submit" className="btn btn-success w-100 btn-sm">
        Adopt!
      </button>
    </form>

      }

      <div className="adoptee_bonus">
        {adoptions.length >= 1 ? 
          <span className="adoptee_bonus_main_text">
            Bonus!
          </span>
          :
          <span className="adoptee_bonus_main_text_two">
            Hidden
          </span>
        }
        <div className="adoptee_bonus_list" >
          {adoptions.length >= 1 ? switchAmount(amount):null}
        </div>
      </div>
    </div>
  );
}
