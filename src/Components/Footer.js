import { useEffect, useRef } from 'react';

export default function Footer({ showAlert, closeAlert, closeAlertBird, showAlertBird }) {
  const closeButton = useRef(null);
  const open = showAlert || showAlertBird;
  const close = showAlert ? closeAlert : closeAlertBird;

  useEffect(() => {
    if (!open) return undefined;
    const previous = document.activeElement;
    closeButton.current?.focus();
    function handleKey(event) {
      if (event.key === 'Escape') { event.preventDefault(); close(); }
      if (event.key === 'Tab') { event.preventDefault(); closeButton.current?.focus(); }
    }
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('keydown', handleKey);
      if (previous && previous.isConnected) previous.focus();
      else document.querySelector('#Birds button')?.focus();
    };
  }, [open, close]);

  return <footer className="sanctuary-footer">
    {open && <div className="custom-alert">
      <div className="alert-content" role="dialog" aria-modal="true" aria-labelledby="confirmation-message">
        <p id="confirmation-message">{showAlert ? 'Love Ya Baby, Have a Song' : 'Thank you for exploring bird adoption. This simulation raises awareness; you can learn about real birds available for adoption on the next page.'}</p>
        <button ref={closeButton} onClick={close}>OK</button>
      </div>
    </div>}
    <p>Connect with me</p>
    <div className="footer-links">
      <a href="https://www.linkedin.com/in/dennys-antunish/" target="_blank" rel="noreferrer">🕊️ LinkedIn</a>
      <a href="https://github.com/antunishdPursuit/project-bird-sanctuary" target="_blank" rel="noreferrer">🐦 GitHub</a>
      <a href="https://sites.google.com/view/antunish/projects" target="_blank" rel="noreferrer">🦅 Portfolio</a>
    </div>
  </footer>;
}
