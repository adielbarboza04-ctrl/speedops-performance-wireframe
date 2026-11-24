const titleMap = {
  overview: 'Resumen',
  queries: 'Consultas SQL',
  cache: 'Gestor de caché',
  alerts: 'Alertas',
  reports: 'Reportes',
  integrations: 'Integraciones',
  settings: 'Configuración'
};

function showView(view) {
  document.querySelectorAll('.content').forEach(section => section.classList.add('hidden'));
  const target = document.getElementById(`view-${view}`);
  if (target) target.classList.remove('hidden');
  document.querySelectorAll('.nav-item').forEach(item => item.classList.toggle('active', item.dataset.view === view));
  document.getElementById('pageTitle').textContent = titleMap[view] || 'Resumen';
  document.querySelector('.sidebar').classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('[data-view]').forEach(button => {
  button.addEventListener('click', () => showView(button.dataset.view));
});

document.querySelectorAll('[data-view-link]').forEach(button => {
  button.addEventListener('click', () => showView(button.dataset.viewLink));
});

document.querySelector('.menu-button').addEventListener('click', () => {
  document.querySelector('.sidebar').classList.toggle('open');
});

const modal = document.getElementById('recommendationModal');
document.querySelectorAll('[data-recommendation]').forEach(button => {
  button.addEventListener('click', () => modal.classList.remove('hidden'));
});
document.getElementById('closeModal').addEventListener('click', () => modal.classList.add('hidden'));
document.getElementById('dismissModal').addEventListener('click', () => modal.classList.add('hidden'));

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.remove('hidden');
  window.setTimeout(() => toast.classList.add('hidden'), 2300);
}

document.getElementById('approveModal').addEventListener('click', () => {
  modal.classList.add('hidden');
  showToast('Recomendación aprobada. Cambio enviado a revisión.');
});

document.getElementById('runAnalysis').addEventListener('click', () => showToast('Análisis iniciado. Tiempo estimado: 30 segundos.'));
document.getElementById('scanQueries').addEventListener('click', () => showToast('Escaneo de consultas completado.'));
