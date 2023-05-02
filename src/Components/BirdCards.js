
export default function BirdCards({birds, adopt}) {
    return (
        <div className = "card" id="Birds">
          <div className="row">
          {birds.map(bird => (
            <div key={bird.id} className="col-sm-4 col-md-4 col-lg-4 birds"> 
              <h3 >{bird.name}</h3>
              <h3>{bird.amount}</h3>
              <img className="poster"src={bird.img} alt={bird.name}></img><br/>
              <button  onClick={() =>adopt(bird.id)}>
              Adopt
              </button>
              <br/>
            </div>
          ))}
          </div>

        </div>
      );
}
