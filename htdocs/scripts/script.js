document.getElementById("toggleTheme").addEventListener("click", function() {
    // Cambiar a modo oscuro
    document.body.classList.toggle("dark-mode");
    
    // Oculta la sección de introducción
    document.querySelector(".intro-text").style.display = "none";
    document.querySelector(".intro-subtext").style.display = "none";
    document.querySelector(".projects-container").style.display = "flex";
});
