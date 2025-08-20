-- SQL para executar no Console do PlanetScale
-- Execute linha por linha ou em grupos

-- 1. Criar tabela usuario
CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(32) NOT NULL,
  `sobrenome` varchar(64) NOT NULL,
  `email` varchar(64) NOT NULL,
  `senha` varchar(128) NOT NULL,
  `nascimento` varchar(64) NOT NULL,
  `sexo` varchar(10) NOT NULL,
  `cadastro` date NOT NULL,
  PRIMARY KEY (`id`)
);

-- 2. Criar tabela amizade
CREATE TABLE `amizade` (
  `id` int NOT NULL AUTO_INCREMENT,
  `de` varchar(32) NOT NULL,
  `para` varchar(32) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
);

-- 3. Criar tabela postagem
CREATE TABLE `postagem` (
  `id` int NOT NULL AUTO_INCREMENT,
  `autor` int NOT NULL,
  `conteudo` text NOT NULL,
  `data` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

-- 4. Inserir usuários de teste
INSERT INTO `usuario` (`nome`, `sobrenome`, `email`, `senha`, `nascimento`, `sexo`, `cadastro`) VALUES
('Homer', 'Simpson', 'homer@simpson', '1234', '02/11/1980', 'Masculino', '2019-07-03'),
('Rick', 'Sanches', 'rick@sanches', '1234', '02/11/1980', 'Masculino', '2019-07-03'),
('Morty', 'Sanches', 'morty@sanches', '1234', '02/11/1980', 'Masculino', '2019-07-03'),
('Bart', 'Simpson', 'bart@simpson', '1234', '02/11/2000', 'Masculino', '2019-07-03'),
('Axel', 'Rose', 'axel@rose', '1234', '02/11/1980', 'Masculino', '2019-07-03');

-- 5. Inserir algumas amizades
INSERT INTO `amizade` (`de`, `para`, `status`) VALUES
('bart@simpson', 'homer@simpson', 1),
('rick@sanches', 'homer@simpson', 1),
('homer@simpson', 'axel@rose', 1),
('bart@simpson', 'rick@sanches', 1),
('morty@sanches', 'rick@sanches', 1);

-- 6. Inserir postagens de exemplo
INSERT INTO `postagem` (`autor`, `conteudo`) VALUES
(1, 'Bem-vindos ao Orkut Ozzy! 🔥'),
(2, 'Wubba lubba dub dub! Sistema funcionando!'),
(4, 'Cowabunga! O Orkut voltou!'),
(1, 'Testando o sistema de postagens retrô!'),
(3, 'Aw geez Rick, isso é incrível!');
