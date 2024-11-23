-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 23/11/2024 às 17:55
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `green_bin`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `faq_feedback`
--

CREATE TABLE `faq_feedback` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `feedback` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `feedbacks`
--

CREATE TABLE `feedbacks` (
  `id` int(11) NOT NULL COMMENT 'identificador único, autoincrementado',
  `nome_usuario` text NOT NULL COMMENT 'Nome do usuário que deixou o feedback',
  `email_usuario` varchar(255) NOT NULL COMMENT 'Email do usuário que deixou o feedback',
  `mensagem` text NOT NULL COMMENT 'Texto do feedback deixado pelo usuário',
  `data_feedback` datetime NOT NULL COMMENT 'Data e hora do envio do feedback',
  `status` varchar(50) NOT NULL COMMENT 'Status do feedback (novo, em alálise, respondido)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `feedbacks`
--

INSERT INTO `feedbacks` (`id`, `nome_usuario`, `email_usuario`, `mensagem`, `data_feedback`, `status`) VALUES
(1, 'a', 'a@a.com', 'a', '2024-11-11 17:58:57', 'novo'),
(2, 'a', 'a@a.com', 'a', '2024-11-11 17:59:09', 'novo'),
(3, 'John', 'johnzittu@gmail.com', 'teste\r\n', '2024-11-11 18:25:47', 'novo'),
(4, 'John', 'johnzittu@gmail.com', 'Teste 2', '2024-11-11 18:41:51', 'novo'),
(5, 'John', 'johnzittu@gmail.com', 'Teste 3', '2024-11-11 18:56:29', 'novo');

-- --------------------------------------------------------

--
-- Estrutura para tabela `relatorios`
--

CREATE TABLE `relatorios` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `conteudo` text NOT NULL,
  `data_publicacao` date NOT NULL,
  `link` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `relatorios`
--

INSERT INTO `relatorios` (`id`, `titulo`, `conteudo`, `data_publicacao`, `link`) VALUES
(1, 'Relatório de Sustentabilidade - 2024', 'Este relatório analisa as práticas sustentáveis adotadas em 2024, com foco na reciclagem e redução de emissões de carbono. Inclui insights de como a implementação de tecnologias verdes, como a Green Bin, auxiliou empresas a reduzirem custos operacionais enquanto contribuíam para o meio ambiente.', '2024-11-01', 'https://www.sustentabilidade.gov.br'),
(2, 'Estudo de Caso: Reciclagem no Brasil em 2023', 'Este estudo apresenta uma análise da evolução da reciclagem no Brasil durante o ano de 2023, destacando avanços em tecnologias automatizadas e a adesão de empresas à economia circular. Dados retirados do relatório oficial do Ministério do Meio Ambiente.', '2024-10-25', 'https://www.mma.gov.br'),
(3, 'Impacto Econômico da Sustentabilidade nas Empresas', 'Relatório detalha como iniciativas sustentáveis têm impactado positivamente as finanças das empresas, com destaque para o setor de tecnologia verde. Inclui dados de reciclagem, economia de energia e redução de emissões.', '2024-09-15', 'https://www.cetesb.sp.gov.br');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `faq_feedback`
--
ALTER TABLE `faq_feedback`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `relatorios`
--
ALTER TABLE `relatorios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `faq_feedback`
--
ALTER TABLE `faq_feedback`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `feedbacks`
--
ALTER TABLE `feedbacks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'identificador único, autoincrementado', AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `relatorios`
--
ALTER TABLE `relatorios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;