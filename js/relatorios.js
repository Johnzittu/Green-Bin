const relatorios = [
    {
        titulo: "Relatório de Sustentabilidade - 2024",
        conteudo: "Este relatório analisa as práticas sustentáveis adotadas em 2024, com foco na reciclagem e redução de emissões de carbono. Inclui insights de como a implementação de tecnologias verdes, como a Green Bin, auxiliou empresas a reduzirem custos operacionais enquanto contribuíam para o meio ambiente.",
        data_publicacao: "2024-11-01",
        link: "https://www.sustentabilidade.gov.br"
    },
    {
        titulo: "Estudo de Caso: Reciclagem no Brasil em 2023",
        conteudo: "Este estudo apresenta uma análise da evolução da reciclagem no Brasil durante o ano de 2023, destacando avanços em tecnologias automatizadas e a adesão de empresas à economia circular. Dados retirados do relatório oficial do Ministério do Meio Ambiente.",
        data_publicacao: "2024-10-25",
        link: "https://www.mma.gov.br"
    },
    {
        titulo: "Impacto Econômico da Sustentabilidade nas Empresas",
        conteudo: "Relatório detalha como iniciativas sustentáveis têm impactado positivamente as finanças das empresas, com destaque para o setor de tecnologia verde. Inclui dados de reciclagem, economia de energia e redução de emissões.",
        data_publicacao: "2024-09-15",
        link: "https://www.cetesb.sp.gov.br"
    }
];

const container = document.getElementById("relatorios-container");

if (relatorios.length === 0) {
    container.innerHTML = "<p>Nenhum relatório encontrado no momento.</p>";
} else {
    relatorios.forEach(relatorio => {
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
