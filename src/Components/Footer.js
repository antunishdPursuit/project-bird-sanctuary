export default function Footer() {
    return (
        <footer className="sanctuary-footer text-center p-3">
            <p className="mb-2">Connect with me</p>
            <div className="d-flex justify-content-center mb-2">
                <a href="https://www.linkedin.com/in/dennys-antunish/" target="_blank" rel="noreferrer"className="footer-link d-flex align-items-center mx-2">
                    <span className="footer-icon">🕊️</span> LinkedIn
                </a>
                <a href="https://github.com/antunishdPursuit" target="_blank" rel="noreferrer" className="footer-link d-flex align-items-center mx-2">
                    <span className="footer-icon">🐦</span> GitHub
                </a>
                <a href="https://sites.google.com/view/antunish/projects" target="_blank" rel="noreferrer" className="footer-link d-flex align-items-center mx-2">
                    <span className="footer-icon">🦅</span> Portfolio
                </a>
            </div>
        </footer>
      );
}
