function handleSubmit() {
  const prenom  = document.getElementById('prenom')?.value.trim();
  const nom     = document.getElementById('nom')?.value.trim();
  const email   = document.getElementById('email')?.value.trim();
  const tel     = document.getElementById('tel')?.value.trim();
  const domaine = document.getElementById('domaine')?.value;
  const message = document.getElementById('message')?.value.trim();
  const btn     = document.querySelector('.form-submit');

  if (!prenom || !nom || !email || !tel || !domaine || !message) {
    showToast('Veuillez remplir tous les champs.', 'error');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast('Adresse email invalide.', 'error');
    return;
  }

  btn.textContent = 'Envoi en cours…';
  btn.disabled = true;

  // ── INTEGRATION : remplacer par Formspree ou EmailJS ──
  // fetch('https://formspree.io/f/VOTRE_ID', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
  //   body: JSON.stringify({ prenom, nom, email, tel, domaine, message })
  // }).then(r => r.ok ? success() : error()).catch(() => error());

  setTimeout(() => {
    showToast('Message envoyé ! Maître Ben Djaballah vous recontactera rapidement.', 'success');
    document.querySelectorAll('.form-input, .form-textarea, .form-select')
      .forEach(el => el.value = '');
    btn.textContent = 'Envoyer ma demande';
    btn.disabled = false;
  }, 1200);
}

function showToast(msg, type) {
  document.querySelectorAll('.toast').forEach(t => t.remove());
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  Object.assign(toast.style, {
    position: 'fixed', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
    background: type === 'success' ? '#1a3a1a' : '#3a1a1a',
    color: type === 'success' ? '#6fcf97' : '#eb5757',
    border: `1px solid ${type === 'success' ? '#6fcf97' : '#eb5757'}`,
    padding: '14px 28px', fontSize: '13px', zIndex: '9999',
    maxWidth: '90vw', textAlign: 'center',
    animation: 'fadeUp 0.3s ease forwards',
  });
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}
