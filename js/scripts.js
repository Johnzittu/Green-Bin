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

