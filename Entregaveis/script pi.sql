create database projetoindividualGu;

use projetoindividualGu;

create table categoria (
id int primary key auto_increment,
categoria varchar(80)
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
mensagem text,
dtEnvio datetime,
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

select * from categoria;
select * from usuario;


