import { useState } from 'react';

function BirdCard({ bird, adopt }) {
  const [imageFailed, setImageFailed] = useState(false);
  return <article className="bird-card">
    {imageFailed ? <div className="image-unavailable" role="img" aria-label={`${bird.name} image unavailable`}>Image unavailable</div> :
      <img src={bird.img} alt={bird.name} loading="lazy" onError={() => setImageFailed(true)} />}
    <div className="bird-details">
      <h3><a href={bird.wiki} target="_blank" rel="noreferrer">{bird.name}</a></h3>
      <p className="bird-price">${bird.amount.toLocaleString()}</p>
      <button type="button" onClick={() => adopt(bird.id)} aria-label={`Add ${bird.name} to adoption list`}>Add to list</button>
    </div>
  </article>;
}

export default function BirdCards({ birds, adopt }) {
  return <section className="birds-section" id="Birds" aria-labelledby="birds-heading">
    <h2 id="birds-heading">Browse birds</h2>
    <p>Choose birds to add to your adoption list. Select a name to learn more.</p>
    <div className="bird-grid">{birds.map(bird => <BirdCard bird={bird} adopt={adopt} key={bird.id} />)}</div>
  </section>;
}
