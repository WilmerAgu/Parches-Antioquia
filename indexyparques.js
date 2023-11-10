
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
    function openUbicacionExploraModal() {
        const modal = document.getElementById("modal-ubicacion-explora");
        modal.showModal();
    }
   
    function openPeñolModal() {
        const modal = document.getElementById("modal-peñol");
        modal.showModal();
    }
    function openUbicacionPeñolModal() {
        const modal = document.getElementById("modal-ubicacion-peñol");
        modal.showModal();
    }
    function openNapolesModal() {
        const modal = document.getElementById("modal-napoles");
        modal.showModal();
    }
    function openUbicacionNapolesModal() {
        const modal = document.getElementById("modal-ubicacion-napoles");
        modal.showModal();
    }
    function openArviModal() {
        const modal = document.getElementById("modal-arvi");
        modal.showModal();
    }
    function openUbicacionArviModal() {
        const modal = document.getElementById("modal-ubicacion-arvi");
        modal.showModal();
    }
    function openTamarindosModal() {
        const modal = document.getElementById("modal-tamarindos");
        modal.showModal();
    }
    function openUbicacionTamarindosModal() {
        const modal = document.getElementById("modal-ubicacion-tamarindos");
        modal.showModal();
    }
    function closeModal() {
        const modalexplora = document.getElementById("modal-explora");
        const openUbicacionExploraModal = document.getElementById("modal-ubicacion-explora");
        const openPeñolModal = document.getElementById("modal-peñol");
        const openUbicacionPeñolModal = document.getElementById("modal-ubicacion-peñol");
        const openNapolesModal = document.getElementById("modal-napoles");
        const openUbicacionNapolesModal = document.getElementById("modal-ubicacion-napoles");
        const openArviModal = document.getElementById("modal-arvi");
        const openUbicacionArviModal = document.getElementById("modal-ubicacion-arvi");
        const openTamarindosModal = document.getElementById("modal-tamarindos");
        const openUbicacionTamarindosModal = document.getElementById("modal-ubicacion-tamarindos");
        
        if (modalexplora.open) {
            modalexplora.close();
        }

        if (openPeñolModal.open) {
            openPeñolModal.close();
        }
        if (openNapolesModal.open) {
            openNapolesModal.close();
        }
        if (openUbicacionExploraModal.open) {
            openUbicacionExploraModal.close();
        }
        if (openUbicacionPeñolModal.open) {
            openUbicacionPeñolModal.close();
        }
        if (openUbicacionNapolesModal.open) {
            openUbicacionNapolesModal.close();
        }
        if (openArviModal.open) {
            openArviModal.close();
        }
        if (openUbicacionArviModal.open) {
            openUbicacionArviModal.close();
        }
        if (openTamarindosModal.open) {
            openTamarindosModal.close();
        }
        if (openUbicacionTamarindosModal.open) {
            openUbicacionTamarindosModal.close();
        }
    }










