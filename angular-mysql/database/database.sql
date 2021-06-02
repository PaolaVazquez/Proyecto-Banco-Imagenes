create database bancodeimagenes;
use bancodeimagenes;

create table empleados(
nombre varchar(45) not null,
apellidos varchar(45) not null,
fechaN varchar(10) not null,
puesto varchar(45) not null,
fechaIngreso varchar(10) not null,
usuario varchar (15) not null,
contraseña varchar (70) not null
);

alter table empleados
add primary key (usuario);

describe empleados;

create table proyectos(
proyecto varchar (50) not null,
descripcion varchar (200) not null
);

alter table proyectos
add primary key (proyecto);

describe proyectos;

create table imagenes(
imagen blob,
nombre varchar (50) not null,
proyecto varchar (50) not null,
orientacion varchar(15) not null,
resolucion varchar (15) not null,
tipo varchar (15) not null,
fecha varchar (10) not null,
fechaActualizada varchar (10),
constraint fk_proyect foreign key (proyecto) references proyectos (proyecto)
);

alter table imagenes
add primary key (nombre);

describe imagenes;