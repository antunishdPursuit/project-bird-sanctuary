export default function Footer({showAlert, closeAlert, closeAlertBird, showAlertBird}) {
    return (
        <footer className="sanctuary-footer text-center p-3">
            <div>
                {showAlert && (
                    <div className="custom-alert">
                        <div className="alert-content">
                            <p>Love Ya Baby, Have a Song</p>
                            <button onClick={closeAlert}>OK</button>
                        </div>
                    </div>
                )}
                {showAlertBird && (
                    <div className="custom-alert">
                        <div className="alert-content">
                            <p>Thank you so much for attempting to adopt these birds. This website was designed to raise awareness about bird adoptions. Your attempt to adopt is much appreicted and I hope you can finish adopting similar birds on the next page! </p>
                            <button onClick={closeAlertBird}>OK</button>
                        </div>
                    </div>
                )}
            </div>
            <p className="mb-2">Connect with me</p>
            <div className="d-flex justify-content-center mb-2">
                <a href="https://www.linkedin.com/in/dennys-antunish/" target="_blank" rel="noreferrer"className="footer-link d-flex align-items-center mx-2">
                    <span className="footer-icon">🕊️</span> LinkedIn
                </a>
                <a href="https://github.com/antunishdPursuit/project-bird-sanctuary" target="_blank" rel="noreferrer" className="footer-link d-flex align-items-center mx-2">
                    <span className="footer-icon">🐦</span> GitHub
                </a>
                <a href="https://sites.google.com/view/antunish/projects" target="_blank" rel="noreferrer" className="footer-link d-flex align-items-center mx-2">
                    <span className="footer-icon">🦅</span> Portfolio
                </a>
            </div>
        </footer>
      );
}
