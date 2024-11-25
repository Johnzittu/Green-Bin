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


// Selecionando containers dos gráficos
const graficosContainer = document.getElementById("graficos-comparativos");
const empresasContainer = document.getElementById("lista-empresas");

// Renderizando gráficos e dados
document.addEventListener("DOMContentLoaded", () => {
  const graficosContainer = document.getElementById("graficos-comparativos");

  if (!graficosContainer) {
    console.error("Elemento 'graficos-comparativos' não encontrado.");
    return;
  }

  
  empresas.forEach((empresa, index) => {
    // Criar um canvas para o gráfico
    const canvasId = `grafico-${index}`;
    const graficoDiv = document.createElement("div");
    graficoDiv.className = "grafico-empresa";
    graficoDiv.innerHTML = `
      <h3>${empresa.nome}</h3>
      <p class="descricao-empresa">${empresa.descricao}</p>
      <canvas id="${canvasId}"></canvas>
    `;
    graficosContainer.appendChild(graficoDiv);

    // Configurar os dados do gráfico
    const ctx = document.getElementById(canvasId).getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Reciclável", "Orgânico"],
        datasets: [
          {
            label: "Antes",
            data: [empresa.antes.reciclavel, empresa.antes.organico],
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
          {
            label: "Depois",
            data: [empresa.depois.reciclavel, empresa.depois.organico],
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },

      

      options: {
        responsive: true,
        plugins: {
          legend: { position: "top" },
          title: {
            display: true,
            text: "Comparativo de Resíduos",
          },
        },
      },
    });
  });
});


