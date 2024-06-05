create database projetoindividualGu;

use projetoindividualGu;

create table categoria (
id int primary key auto_increment,
categoria varchar(80)
);

create table jogosCompetitivos (
id int primary key auto_increment,
nome varchar(80),
fkCategoria int,
constraint fk_categoria_jogo foreign key (fkCategoria) references categoria (id)
);

create table usuario (
id int primary key auto_increment,
nome varchar(50),
email varchar(50),
senha varchar(50),
fkCategoria int,
constraint fk_categoria_usuario foreign key (fkCategoria) references categoria (id)
);

create table quiz (
id int primary key auto_increment,
pontuacao int,
fkUsuario int,
constraint fk_usuario_quiz foreign key (fkUsuario) references usuario (id)
);

create table mensagem (
id int primary key auto_increment,
fkUsuario int,
jogo varchar(45),
descricao varchar(250),
constraint fk_usuario_mensagem foreign key (fkUsuario) references usuario (id)
);

insert into categoria (categoria) values
('FPS'),
('Moba'),
('Battle Royale'),
('Fighting Games'),
('Card Games'),
('Simuladores'),
('RTS');

insert into jogosCompetitivos (nome, fkCategoria) values
('Counter Strike', 1),
('Valorant', 1),
('Crossfire', 1),
('Rainbow Six Siege', 1),
('League of Legends', 2),
('Call of Duty', 1),
('PUBG Mobile', 3),
('Fortnite', 3),
('Arena of Valor', 2),
('Dota 2', 2),
('Mobile Legends', 2),
('Street Fighter 6', 4),
('Tekken 8', 4),
('Guilty Gear Strive', 4),
('Mortal Kombat', 4),
('BlazBlue', 4),
('GranBlue Fantasy', 4),
('Free Fire', 3),
('PUBG', 3),
('Apex Legends', 3),
('HeartStone', 5),
('Magic', 5),
('Gwent', 5),
('Shadowverse', 5),
('Honor of Kings', 2),
('FIFA', 6),
('NBA 2K', 6),
('Forza Motorsport', 6),
('Rocket League', 6),
('Teamfight Tactics', 5),
('Starcraft 2', 7),
('Overwatch', 1),
('Heroes of the Storm', 7),
('Call of Duty: Warzone', 3),
('Madden NFL', 6);

alter table usuario add column maiorPontuacao int default 0;

-- SELECT RANKING
select distinct(u.nome), quiz.pontuacao 
from quiz 
join usuario as u on quiz.fkusuario = u.id 
order by quiz.pontuacao limit 10;

-- SELECT QTD JOGOS COMPETIDOS
select u.id as ID_USUARIO,
       cat.categoria as CATEGORIA,
       count(jg.fkCategoria) as qtdJogos
from usuario as u
inner join categoria as cat on cat.id = u.fkCategoria
inner join jogosCompetitivos as jg on jg.fkCategoria = cat.id
group by u.id, cat.categoria;

-- SELECT QTD USUARIOS EM CADA CATEGORIA
select cat.categoria,
       count(u.fkCategoria) as qtdPessoas
from usuario u
inner join categoria cat on cat.id = u.fkCategoria
group by categoria;

-- SELECT MAX PONTOS EM UM QUIZ DO USUARIO
select max(q.pontuacao) as maiorPontuacao
from quiz as q
where q.fkUsuario = 1;



-- selecionar qtd de pessoas tem em cada categoria;
select count(u.fkCategoria) as Categoria,
       cat.categoria
from usuario as u
inner join categoria as cat on cat.id = u.fkCategoria
where fkCategoria is not null
group by u.fkCategoria;


select * from categoria;
select * from usuario;
select * from mensagem;
select * from jogosCompetitivos;
select * from quiz;