
export default function Header() {
    return (
        <header className="hero_section">
            <div className="container">
                <div className="row align-items-center justify-content-end">
                    <div className="col-md-6 hero-box">
                        <h1 className="hero-title ">SkyHaven Sanctuary</h1>
                        <h5 className="hero-subtitle text-start">
                            <i>
                                <span>"To protect, restore, and celebrate the natural habitats that sustain birdlife,</span>
                                <span>fostering a safe haven where birds can thrive, and communities can connect with nature. </span>
                                <span>Through conservation, education, and sustainable practices,</span>
                                <span>  we inspire a world where people and wildlife coexist harmoniously,</span>
                                <span> ensuring future generations a richer, more biodiverse planet."</span>
                                 
                            </i>
                        </h5>
                    </div>
                </div>
            </div>
            <a className="nav-link floating-button" href="#Birds">
                Continue for Adoption 
                <span className="arrow">&#8595;</span>
            </a>
        </header>
    );
}
