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
    <div className="footer-links">
      <a href="https://github.com/antunishdPursuit/project-bird-sanctuary" target="_blank" rel="noreferrer">🐦 GitHub</a>
    </div>
    <details className="photo-credits">
      <summary>Photo credits</summary>
      <p>Royal Flycatcher: <a href="https://commons.wikimedia.org/wiki/File:Royal_Flycatcher_(7092232997).jpg">Don Faulkner</a>, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC BY-SA 2.0</a>; Boat Billed Heron: <a href="https://commons.wikimedia.org/wiki/File:Boat_Billed_Heron.jpg">Ltshears</a>, public domain; Frilled Coquette: <a href="https://commons.wikimedia.org/wiki/File:Frilled_Coquette_(Lophornis_magnificus).jpg">Rick elis.simpson</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>. Photos are displayed with a cropped fit; source files are unchanged.</p>
    </details>
  </footer>;
}
