create database projetoindividualGu;

use projetoindividualGu;

create table categoria (
idCategoria int primary key auto_increment,
categoria varchar(80)
);

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(50),
email varchar(50),
senha varchar(50),
fkCategoria int,
constraint fk_categoria_usuario foreign key (fkCategoria) references categoria (idCategoria)
);

create table quiz (
idQuiz int primary key auto_increment,
pontuacao int,
fkUsuario int,
constraint fk_usuario_quiz foreign key (fkUsuario) references usuario (idUsuario)
);

create table mensagem (
idMensagem int primary key auto_increment,
fkUsuario int,
mensagem text,
dtEnvio datetime,
constraint fk_usuario_mensagem foreign key (fkUsuario) references usuario (idUsuario)
);