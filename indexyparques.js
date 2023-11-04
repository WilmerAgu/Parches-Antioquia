// cabio de fecha footer

document.addEventListener("DOMContentLoaded", function() {
    var fecha = new Date();
    var ano = fecha.getFullYear();
    var mes = fecha.getMonth() + 1;
    var dia = fecha.getDate();
    var fechaActual = dia + '/' + mes + '/' + ano;
    var elementoFecha = document.getElementById("fecha-actualizacion");
    elementoFecha.innerHTML = 'Última actualización: ' + fechaActual;
  });

  // carrusel parques
  document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carousel-slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides[currentSlide].style.display = "none";
        slides[index].style.display = "block";
        currentSlide = index;
    }

    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    setInterval(nextSlide, 3000); // Cambia de imagen cada 3 segundos
});









