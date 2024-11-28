document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carousel img");
    let currentImage = 0;

    function changeImage() {
        // Oculta la imagen actual
        images[currentImage].style.display = "none";

        // Avanza a la siguiente imagen
        currentImage = (currentImage + 1) % images.length;

        // Muestra la nueva imagen
        images[currentImage].style.display = "block";
    }

    // Mostrar inicialmente solo la primera imagen
    images.forEach((img, index) => {
        img.style.display = index === 0 ? "block" : "none";
    });

    // Cambia la imagen cada 5 segundos
    setInterval(changeImage, 5000);
});