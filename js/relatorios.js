fetch('../php/listar_relatorios.php')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na resposta: ' + response.statusText);
        }
        return response.json();  // Converte a resposta em JSON se o status for OK
    })
    .then(data => {
        const container = document.getElementById("relatorios-container");
        if (data.length === 0) {
            container.innerHTML = "<p>Nenhum relatório encontrado no momento.</p>";
        } else {
            data.forEach(relatorio => {
                const card = document.createElement("div");
                card.classList.add("card");
                card.innerHTML = `
                    <h3>${relatorio.titulo}</h3>
                    <p>${relatorio.conteudo}</p>
                    <p><strong>Publicado em:</strong> ${new Date(relatorio.data_publicacao).toLocaleDateString()}</p>
                    ${relatorio.link ? `<a href="${relatorio.link}" target="_blank">Leia mais</a>` : ''}
                `;
                container.appendChild(card);
            });
        }
    })
    .catch(error => {
        console.error("Erro ao carregar os relatórios:", error);
        const container = document.getElementById("relatorios-container");
        container.innerHTML = "<p>Erro ao carregar os relatórios. Tente novamente mais tarde.</p>";
    });
