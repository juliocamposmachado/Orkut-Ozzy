

create database redesocial;

use redesocial;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `redesocial`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `amizade`
--

CREATE TABLE `amizade` (
  `id` int(11) NOT NULL,
  `de` varchar(32) NOT NULL,
  `para` varchar(32) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Despejando dados para a tabela `amizade`
--

INSERT INTO `amizade` (`id`, `de`, `para`, `status`) VALUES
(34, 'morty@sanches', 'dsfvdasfv@ffvv', 1),
(40, 'bart@simpson', 'homer@simpson', 1),
(46, 'rick@sanches', 'homer@simpson', 1),
(50, 'homer@simpson', 'axel@rose', 1),
(52, 'axel@rose', 'rick@sanches', 1),
(53, 'axel@rose', 'bart@simpson', 1),
(54, 'bart@simpson', 'rick@sanches', 1),
(55, 'bart@simpson', 'morty@sanches', 1),
(56, 'bart@simpson', 'dsfvdasfv@ffvv', 1),
(58, 'morty@sanches', 'homer@simpson', 1),
(59, 'morty@sanches', 'axel@rose', 0),
(60, 'dsfvdasfv@ffvv', 'axel@rose', 0),
(61, 'dsfvdasfv@ffvv', 'rick@sanches', 1),
(62, 'dsfvdasfv@ffvv', 'homer@simpson', 1),
(63, 'j@s', 'homer@simpson', 1),
(64, 'j@s', 'bart@simpson', 0),
(65, 'j@s', 'bart@simpson', 0),
(66, 'j@s', 'bart@simpson', 0),
(67, 'j@s', 'rick@sanches', 1),
(70, 'morty@sanches', 'rick@sanches', 1),
(71, 'h@w', 'homer@simpson', 1),
(72, 'h@w', 'bart@simpson', 1),
(75, 'morty@sanches', 'h@w', 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `postagem`
--

CREATE TABLE `postagem` (
  `id` int(11) NOT NULL,
  `autor` int(11) NOT NULL,
  `conteudo` text NOT NULL,
  `data` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Despejando dados para a tabela `postagem`
--

INSERT INTO `postagem` (`id`, `autor`, `conteudo`, `data`) VALUES
(61, 14, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', '2019-07-06 15:58:58'),
(65, 12, 'Was ist Lorem Ipsum?\r\nLorem Ipsum ist ein einfacher Demo-Text fÃ¼r die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll WÃ¶rter nahm und diese durcheinander warf um ein Musterbuch zu erstellen. Es hat nicht nur 5 Jahrhunderte Ã¼berlebt, sondern auch in Spruch in die elektronische Schriftbearbeitung geschafft (bemerke, nahezu unverÃ¤ndert). Bekannt wurde es 1960, mit dem erscheinen von \"Letraset\", welches Passagen von Lorem Ipsum enhielt, so wie Desktop Software wie \"Aldus PageMaker\" - ebenfalls mit Lorem Ipsum.', '2019-07-06 16:18:54'),
(66, 12, 'Warum nutzen wir es?\r\nEs ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein Layout ansieht. Der Punkt, Lorem Ipsum zu nutzen, ist, dass es mehr oder weniger die normale Anordnung von Buchstaben darstellt und somit nach lesbarer Sprache aussieht. Viele Desktop Publisher und Webeditoren nutzen mittlerweile Lorem Ipsum als den Standardtext, auch die Suche im Internet nach \"lorem ipsum\" macht viele Webseiten sichtbar, wo diese noch immer vorkommen. Mittlerweile gibt es mehrere Versionen des Lorem Ipsum, einige zufÃ¤llig, andere bewusst (beeinflusst von Witz und des eigenen Geschmacks)\r\n\r\n', '2019-07-06 16:19:25'),
(67, 12, '<p>Wo kommt es her?\r\nGlauben oder nicht glauben, Lorem Ipsum ist nicht nur ein zufÃ¤lliger Text. Er hat Wurzeln aus der Lateinischen Literatur von 45 v. Chr, was ihn Ã¼ber 2000 Jahre alt macht. Richar McClintock, ein Lateinprofessor des Hampden-Sydney College in Virgnia untersuche einige undeutliche Worte, \"consectetur\", einer Lorem Ipsum Passage und fand eine unwiederlegbare Quelle. Lorem Ipsum komm aus der Sektion 1.10.32 und 1.10.33 des \"de Finibus Bonorum et Malorum\" (Die Extreme von Gut und BÃ¶se) von Cicero, geschrieben 45 v. Chr. Dieses Buch ist Abhandlung der Ethiktheorien, sehr bekannt wÃ¤rend der Renaissance. Die erste Zeile des Lorem Ipsum, \"Lorem ipsum dolor sit amet...\", kommt aus einer Zeile der Sektion 1.10.32.</p>\r\n\r\n<p>Der Standardteil von Lorem Ipsum, genutzt seit 1500, ist reproduziert fÃ¼r die, die es interessiert. Sektion 1.10.32 und 1.10.33 von \"de Finibus Bonorum et Malroum\" von Cicero sind auch reproduziert in ihrer Originalform, abgeleitet von der Englischen Version aus von 1914 (H. Rackham)</p>', '2019-07-06 16:21:37'),
(68, 12, 'Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll WÃ¶rter nahm und diese durcheinander warf um ein Musterbuch zu erstellen. Es hat nicht nur 5 Jahrhunderte Ã¼berlebt, sondern auch in Spruch in die elektronische Schriftbearbeitung geschafft (bemerke, nahezu unverÃ¤ndert). Bekannt wurde es 1960, mit dem erscheinen von \"Letraset\", welches Passagen von Lorem Ipsum enhielt, so wie Desktop Software wie \"Aldus PageMaker\" - ebenfalls mit Lorem', '2019-07-07 03:11:17'),
(70, 13, '<iframe width=\"460\" height=\"215\" src=\"https://www.youtube.com/embed/pZsYdyCMEo0\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>', '2019-07-07 03:17:24'),
(71, 13, '\r\nEditar\r\nPostagens\r\nGaleria\r\n| Notificacoes | rick@sanches\r\nSair\r\npesquisa usuÃ¡rios\r\n \r\nRick Sanches\r\n\r\nMasculino\r\n\r\nsolteiro(a)\r\n\r\nBrasil\r\n\r\nEditar Perfil\r\n\r\nperfil\r\npostagens\r\ngaleria\r\nRick Sanches\r\nInÃ­cio postagem\r\nPostagem:\r\n\r\n\r\nWhere can I get some? There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', '2019-07-07 03:17:42'),
(74, 12, 'mnlmllml', '2019-07-07 18:28:18'),
(75, 12, 'mnlmllml', '2019-07-07 18:29:07');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nome` varchar(32) NOT NULL,
  `sobrenome` varchar(64) NOT NULL,
  `email` varchar(64) NOT NULL,
  `senha` varchar(128) NOT NULL,
  `nascimento` varchar(64) NOT NULL,
  `sexo` varchar(10) NOT NULL,
  `cadastro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Despejando dados para a tabela `usuario`
--

INSERT INTO `usuario` (`id`, `nome`, `sobrenome`, `email`, `senha`, `nascimento`, `sexo`, `cadastro`) VALUES
(12, 'Homer', 'Simpson', 'homer@simpson', '1234', '02/11/1980', 'Masculino', '2019-07-03'),
(13, 'Rick', 'Sanches', 'rick@sanches', '1234', '02/11/1980', 'Masculino', '2019-07-03'),
(14, 'Morty', 'Sanches', 'morty@sanches', '1234', '02/11/1980', 'Masculino', '2019-07-03'),
(15, 'Axel', 'Rose', 'axel@rose', '1234', '02/11/1980', '', '2019-07-03'),
(16, 'Tygkdkuca', 'sksdo', 'ity@bilo', '1234', '2019-07-18', 'Feminino', '2019-07-03'),
(17, 'Bart', 'Simpson', 'bart@simpson', '1234', '02/11/2000', 'Masculino', '2019-07-03'),
(18, 'Jean', 'C Silva', 'j@s', '2131235', '2111-03-21', '', '2019-07-06'),
(19, 'dfv', 'Silva', 'dsfvdasfv@ffvv', '1234`', '0342-03-03', 'Masculino', '2019-07-06'),
(20, 'Jean', 'Silva', 'jean@c', '1234', '2019-07-11', 'Masculino', '2019-07-07'),
(21, 'Joao', 'Silva', 'h@w', '1234', '2019-07-16', 'Masculino', '2019-07-07');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `amizade`
--
ALTER TABLE `amizade`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `postagem`
--
ALTER TABLE `postagem`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `amizade`
--
ALTER TABLE `amizade`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT de tabela `postagem`
--
ALTER TABLE `postagem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
