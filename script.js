document.addEventListener("DOMContentLoaded", () => {
    const light = document.getElementById("cursorLight");

    if (light) {
        // Segue o movimento do mouse na tela
        document.addEventListener("mousemove", (e) => {
            light.style.left = e.clientX + "px";
            light.style.top = e.clientY + "px";
        });

        // Cria a explosão de brilho azul ao clicar nos elementos
        document.addEventListener("click", (e) => {
            if (e.target.closest("a, button, article, section, p, h1, h2, h3")) {
                light.classList.remove("active");
                void light.offsetWidth; // Truque do navegador para resetar a animação CSS
                light.classList.add("active");
            }
        });
    }
});