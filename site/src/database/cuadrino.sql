create database cuadrino;
use cuadrino;

create table usuario(
id_usuario int primary key auto_increment,
username varchar (45),
email varchar (50),
senha varchar (20)
);

create table voto(
id_voto int auto_increment,
personagem int,
editora int,
fk_usuario int unique,
foreign key (fk_usuario) references usuario(id_usuario),
primary key (id_voto, personagem, editora)
)auto_increment = 501;

create table favoritos(
id_lista int primary key auto_increment,
quadrinho varchar (45),
fk_usuario int unique,
foreign key (fk_usuario) references usuario (id_usuario)
) auto_increment = 1001;

select * from usuario;
select * from favoritos;
select * from voto;

drop database cuadrino;