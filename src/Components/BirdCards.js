
export default function BirdCards({birds, adopt}) {
    return (
        <div className = "row" id="Birds">
          {birds.map(bird => (
            <div key={bird.id} className="col-sm-4 col-md-4 col-lg-4"> 
              <h3>{bird.name}</h3>
              <h3>{bird.amount}</h3>
              <img className="poster"src={bird.img} alt={bird.name}></img>
              <button onClick={() =>adopt(bird.id)}>
              Adopt
              </button>
            </div>
          ))}
        </div>
      );
}
