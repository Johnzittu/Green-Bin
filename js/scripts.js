// Botão Saiba Mais

function scrollToSobre() {
    const sobreSection = document.getElementById("sobre");
    sobreSection.scrollIntoView({ behavior: "smooth" });
}

// Widget sanfonado faq

document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        item.addEventListener("click", () => {
            const answer = item.querySelector("p");
            const isOpen = item.classList.toggle("active");

            // Se estiver ativo, mostra a resposta; senão, oculta
            answer.style.maxHeight = isOpen ? answer.scrollHeight + "px" : "0";
        });
    });
});


//Menu hamburguer pagina descubra
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.menu-hamburger'); // Botão hambúrguer
    const submenu = document.querySelector('.submenu'); // Submenu

    // Alterna o submenu e o estado do botão
    hamburgerButton.addEventListener('click', () => {
        submenu.classList.toggle('show'); // Mostra/oculta o submenu
        hamburgerButton.classList.toggle('open'); // Alterna animação do hambúrguer
    });

    // Fecha o submenu ao clicar fora dele
    document.addEventListener('click', (e) => {
        if (!hamburgerButton.contains(e.target) && !submenu.contains(e.target)) {
            submenu.classList.remove('show');
            hamburgerButton.classList.remove('open');
        }
    });
});
