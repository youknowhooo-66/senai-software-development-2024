DROP DATABASE Consultas;

CREATE DATABASE Consultas;
USE Consultas;

CREATE TABLE cliente (
id_cliente INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(45),
cidade VARCHAR(45),
PRIMARY KEY (id_cliente)
);

CREATE TABLE acompanhamento (
id_acompanhamento INT NOT NULL AUTO_INCREMENT,
situacao VARCHAR (45),
PRIMARY KEY (id_acompanhamento)
);

CREATE TABLE pedido (
id_pedido INT NOT NULL AUTO_INCREMENT,
data_pedido DATE,
valor DECIMAL (8,2),
cliente_id INT,
acompanhamento_id INT,
PRIMARY KEY (id_pedido),
FOREIGN KEY (cliente_id) REFERENCES cliente (id_cliente),
FOREIGN KEY (acompanhamento_id) REFERENCES acompanhamento (id_acompanhamento)
);

INSERT INTO cliente (id_cliente, nome, cidade) VALUES
(1, 'João', 'Macaé'),
(2, 'Carlos', 'Salvador'),
(3, 'Maria', 'Niteroi'),
(4, 'Ana', 'Campinas'),
(5, 'Marcos', 'Santos');

INSERT INTO acompanhamento (id_acompanhamento, situacao) VALUES
(1, 'Registrado'),
(2, 'Em transporte'),
(3, 'Entregue');

INSERT INTO pedido (id_pedido, data_pedido, valor, cliente_id, acompanhamento_id) VALUES
(1, '2024-09-24', 250.00, 2, 1),
(2, '2024-09-25', 150.00, 4, 2),
(3, '2024-09-25', 450.00, 1, 3);



SELECT * FROM Cliente;
SELECT * FROM Acompanhamento;
SELECT * FROM Pedido;

SELECT * FROM pedido JOIN cliente ON pedido.cliente_id = cliente.id_cliente;
 
SELECT * FROM pedido 
JOIN cliente 
ON pedido.cliente_id = cliente.id_cliente 
JOIN acompanhamento 
ON pedido.acompanhamento_id = acompanhamento.id_acompanhamento;

SELECT pedido.id_pedido, pedido.data_pedido, cliente.nome, acompanhamento.situacao FROM pedido 
JOIN cliente 
ON pedido.cliente_id = cliente.id_cliente 
JOIN acompanhamento 
ON pedido.acompanhamento_id = acompanhamento.id_acompanhamento;

CREATE VIEW vw_consulta_pedido_situacao AS
SELECT pedido.id_pedido, pedido.data_pedido, cliente.nome, acompanhamento.situacao
FROM pedido 
JOIN cliente ON pedido.cliente_id = cliente.id_cliente 
JOIN acompanhamento ON pedido.acompanhamento_id = acompanhamento.id_acompanhamento;

SELECT * FROM pedido WHERE cliente_id NOT IN (SELECT id_cliente FROM cliente);
SELECT * FROM pedido WHERE acompanhamento_id NOT IN (SELECT id_acompanhamento FROM acompanhamento);
SELECT * FROM pedido WHERE cliente_id IS NULL OR acompanhamento_id IS NULL;

SELECT pai.nome_pai, filho.nome, 
