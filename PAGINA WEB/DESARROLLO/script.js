window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  const menuToggle = document.getElementById('menu');

  const navLinks = document.querySelectorAll('.menu a');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.checked = false;
    });
});

window.onload = function() {
    var modal = document.getElementById('videoModal');
    var video = document.getElementById('miVideoAnuncio');
    modal.style.display = 'flex';
    video.muted = true; 
    var playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.then(_ => {
        console.log("Video reproduciéndose automáticamente");
      })
      .catch(error => {
        // El navegador bloqueó la reproducción automática
        console.log("Autoplay bloqueado, se muestran los controles");
        video.controls = true;
      });
    }
  };

  // Función para cerrar el video
  function cerrarVideo() {
    var modal = document.getElementById('videoModal');
    var video = document.getElementById('miVideoAnuncio');
    
    modal.style.display = 'none';
    video.pause(); // Detener el video
    video.currentTime = 0; // Reiniciar al inicio (opcional)
  }