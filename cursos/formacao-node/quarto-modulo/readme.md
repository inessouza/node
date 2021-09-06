MySQL:

- 1ª Aula: Instalação do MySQL

- 2ª Aula: Tabelas

* Scripts:

-- Criar um database:

CREATE DATABASE nome-do-banco;

-- Mostrar databases;

SHOW DATABASES;

-- Selecionar um banco de dados:

USE nome-do-banco;

-- Criar uma tabela:

CREATE TABLE nome-da-tabela(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

-- Mostrar tabelas:

SHOW TABLES;

-- Mostrar estrutura de uma tabela:

DESCRIBE nome-da-tabela;

- 3ª Aula: INSERT, SELECT e WHERE

-- Inserir dados em uma tabela:

INSERT INTO nome-da-tabela(nome, email, idade) VALUES ("Ines", "ines@gmail.com", 32);

-- Consultar dados de uma tabela:

SELECT * FROM nome-da-tabela; (Seleciona todos os os campos da tabela)

- 4ª Aula: DELETE

-- Deletar um dado do banco:

DELETE FROM nome-da-tabela WHERE coluna = "algumdadoespecifico";
(O DELETE sempre deve ser usado com WHERE, jamais deve ser usado sozinho)

- 4ª Aula: UPDATE

-- Atualizar um dado do banco:

UPDATE nome-da-tabela SET coluna = "algumdadoespecifico" WHERE coluna = "dadoatualizado";

(O UPDATE sempre deve ser usado com WHERE, jamais deve ser usado sozinho)
