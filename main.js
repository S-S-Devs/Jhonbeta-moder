document.addEventListener('DOMContentLoaded', function() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
  });

  const lastModified = document.lastModified;

  document.getElementById('current-date').textContent = `Fecha del sistema: ${formattedDate}`;
  document.getElementById('last-modified').textContent = `Última modificación: ${lastModified}`;

  const userAgent = navigator.userAgent;
  const browserInfo = userAgent.match(/(firefox|msie|chrome|safari|trident|edg|opr|brave)\/?\s*(\d+)/i) || [];
  const browserName = browserInfo[1] ? browserInfo[1].toLowerCase() : navigator.userAgentData?.brands[0].brand || "Unknown browser";
  const browserVersion = browserInfo[2] || navigator.userAgentData?.brands[0].version || "Unknown version";

  document.getElementById('browser-info').textContent = `Navegador: ${browserName} ${browserVersion}`;

  // Agregar el evento de clic al botón
  document.getElementById('toggle-projects').addEventListener('click', toggleProjects);
  document.getElementById('toggle-games').addEventListener('click', toggleGames);
});

function toggleProjects() {
  const hiddenProjects = document.querySelectorAll('.project.hidden');
  const isAnyVisible = Array.from(hiddenProjects).some(project => project.style.display === 'block');

  hiddenProjects.forEach(project => {
      project.style.display = isAnyVisible ? 'none' : 'block';
  });

  const buttonText = isAnyVisible ? 'Ver más proyectos' : 'Ver menos proyectos';
  document.getElementById('toggle-projects').textContent = buttonText;
}

function toggleGames() {
  const hiddenGames = document.querySelectorAll('.game.hidden');
  const isAnyVisible = Array.from(hiddenGames).some(game => game.style.display === 'block');

  hiddenGames.forEach(game => {
      game.style.display = isAnyVisible ? 'none' : 'block';
  });

  const buttonText = isAnyVisible ? 'Ver más juegos' : 'Ver menos juegos';
  document.getElementById('toggle-games').textContent = buttonText;
}