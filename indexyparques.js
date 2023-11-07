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

// modal

    function openExploraModal() {
        const modal = document.getElementById("modal-explora");
        modal.showModal();
    }
   
    function openPeñolModal() {
        const modal = document.getElementById("modal-peñol");
        modal.showModal();
    }
    function openNapolesModal() {
        const modal = document.getElementById("modal-napoles");
        modal.showModal();
    }
    function closeModal() {
        const modalexplora = document.getElementById("modal-explora");
        const openPeñolModal = document.getElementById("modal-peñol");
        const openNapolesModal = document.getElementById("modal-napoles");
        
        if (modalexplora.open) {
            modalexplora.close();
        }

        if (openPeñolModal.open) {
            openPeñolModal.close();
        }
        if (openNapolesModal.open) {
            openNapolesModal.close();
        }
    }










