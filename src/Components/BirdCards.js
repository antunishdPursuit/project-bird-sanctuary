export default function BirdCards({ birds, adopt }) {
  return (
    <div className="container card" id="Birds">
      <div className="row images-box">
      {birds.map(bird => (
        <div key={bird.id} className="col-sm-6 col-md-4 mb-4">
          <div
            className="bird-card"
            style={{ backgroundImage: `url(${bird.img})` }}
          >
            <div className="overlay">
              <h3 className="bird-name"><a href={bird.wiki} alt={bird.name} target="_blank" rel="noreferrer">{bird.name}</a></h3>
              <h4 className="bird-price">${bird.amount}</h4>
              <button className="btn btn-light mt-2" onClick={() => adopt(bird.id)}>
                Adopt
              </button>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
