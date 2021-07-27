-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-07-2021 a las 18:19:01
-- Versión del servidor: 8.0.20
-- Versión de PHP: 7.4.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bancodeimagenes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `destinos`
--

CREATE TABLE `destinos` (
  `id_destino` int NOT NULL,
  `nombred` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `destinos`
--

INSERT INTO `destinos` (`id_destino`, `nombred`) VALUES
(1, 'Destino 1'),
(3, 'destino 3'),
(66, 'Destino 37'),
(2, 'Destino II'),
(4, 'Destino IV'),
(72, 'Destino Jerez'),
(61, 'Destino Jerez, Zac.'),
(6, 'Destino VX'),
(71, 'Destino Zacatecas ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `nombre` varchar(45) NOT NULL,
  `apellidos` varchar(45) NOT NULL,
  `fechaN` varchar(10) NOT NULL,
  `puesto` varchar(45) NOT NULL,
  `fechaIngreso` varchar(10) NOT NULL,
  `usuario` varchar(15) NOT NULL,
  `password` varchar(70) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`nombre`, `apellidos`, `fechaN`, `puesto`, `fechaIngreso`, `usuario`, `password`) VALUES
('Damian', 'Espinel Castillos', '2021-06-09', 'Productor AudioVisual', '2021-06-10', 'Damian', '$2b$10$qk/WMeHjc7n5JrPuVoCPPeesAHpfs5LbUsFemEM/fJuYu7TkxdlnW'),
('Dionicio', 'Lupercio Dala', '03/08/1999', 'Director de marketing', '24/09/2021', 'Dio', '$2b$10$ughuHXO6OhbzdgS2rwe8qe4QUtiL9YxqaK66Ozmmk8b8UgX6ez9MG'),
('Francisco Santiago', 'Lemus Cortez', '2021-06-01', 'Director de marketing', '2021-06-23', 'Francis', '$2b$10$jZRjftYS6NwBWVdFeGSTzeTM5tGrDz.Despg5LesL5siVtnNsjkjW'),
('Francisco Javier', 'Lemus Cortez', '2021-06-02', 'Director de marketing', '2021-06-24', 'Franco', '$2b$10$uzBDlqww3kPwKsBLcIkZa..u8j/0CIFpDYj7HY5sSyVp9LbxZU0wq'),
('Francisco Ignacio', 'Cárdenas Duarte', '2021-07-16', 'Analista financiero', '2021-07-09', 'Frank', '$2b$10$f10i8//1XHUriJNJk.hWSeSjNDtgrHuln9PLO7CF3ULEIOqRn7A.2'),
('Lucia', 'Lupercio Dala', '03/08/1999', 'Director de marketing', '24/09/2021', 'Luci', '$2b$10$vfyWFUUXYztwC9gloZZbP.Z9aO6GW8whKT5s4PAS56BEsvZmVJyMy'),
('Martin', 'González Ramírez', '2021-07-08', 'Motion Grapher', '2021-07-22', 'Lucirt', '$2b$10$e6qmgwZTEmtVYIOUbaWevuBT2jg55SekWK3JqaMXnXiH07076fDVm'),
('Mauricia Isela', 'Escobedo Tellez', '2021-06-17', 'Motion Grapher', '2021-06-17', 'Marci', '$2b$10$oV4Z6nYPUNK1jnvnfou/4eiiteVldC6hEmQ1RyzfAFARkASTRe8um'),
('Martin', 'Espinel Castillo', '2021-07-09', 'Director de Arte', '2021-07-09', 'MartinEC', '$2b$10$MYJ9WSyMOHFbbQTVdggEueCq2zef7chXI0K7nFTkBWQvKHo3.dSAu'),
('Ricardo', 'González Ramírez', '2021-07-09', 'Analista financiero', '2021-07-09', 'Richar', '$2b$10$TIbrKTc4A4muyr4xothwTeg91Lyu6ikZsKaNQrih7QfqLegM5sYA2'),
('Roman', 'Espinel Castillo', '2021-06-17', 'Diseñador Jr', '2021-06-17', 'Roman', '$2b$10$97ij5OhMVOmvhfh8slf9ueEVJCWxBQSzkSYoQYiciVIpRpx/3CgSm');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes`
--

CREATE TABLE `imagenes` (
  `id_imagen` int NOT NULL,
  `imagen` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `fecha` varchar(10) NOT NULL,
  `id_proyecto` int NOT NULL,
  `id_destino` int NOT NULL,
  `orientacion` varchar(15) NOT NULL,
  `resolucion` varchar(30) NOT NULL,
  `tipo` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `imagenes`
--

INSERT INTO `imagenes` (`id_imagen`, `imagen`, `nombre`, `fecha`, `id_proyecto`, `id_destino`, `orientacion`, `resolucion`, `tipo`) VALUES
(13, 'uploads\\7cc65f6f-f539-4440-8fea-e107c3f1d9c2.png', 'imagen 1', '2021-07-27', 13, 2, 'Vertical', '640 x 480 píxeles ', 'image/png'),
(14, 'uploads\\bceed5af-da36-4c67-bc65-503fffe67194.png', 'Flores', '2021-07-28', 5, 4, 'Horizontal', '640 x 480 píxeles ', 'image/png'),
(15, 'uploads\\34491a0f-5433-46d7-980c-06b93550e92d.jpg', 'Equipo', '2021-07-05', 8, 4, 'Horizontal', '640 x 480 píxeles ', 'image/jpeg'),
(16, 'uploads\\b1da72a9-6963-4051-9c35-a955157cfbde.png', 'Calles', '2021-07-07', 5, 4, 'Horizontal', '640 x 480 píxeles ', 'image/png'),
(17, 'uploads\\b0de2d02-6e6d-4504-9228-3fa6ff19aeba.png', 'laboratorio 121', '2021-07-08', 3, 1, 'Horizontal', '640 x 480 píxeles ', 'image/png'),
(18, 'uploads\\61fea0df-177c-49f7-9b50-7b78e9f79fbf.png', 'Laboratorio 12', '2021-07-08', 3, 1, 'Horizontal', '640 x 480 píxeles ', 'image/png'),
(19, 'uploads\\76e34cb9-7697-4000-bdce-cbbb2a49b535.jpg', 'TIC´s', '2021-07-08', 3, 2, 'Horizontal', '640 x 480 píxeles ', 'image/jpeg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyectos`
--

CREATE TABLE `proyectos` (
  `id_proyecto` int NOT NULL,
  `imagen` varchar(1000) NOT NULL,
  `proyecto` varchar(50) NOT NULL,
  `descripcion` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `proyectos`
--

INSERT INTO `proyectos` (`id_proyecto`, `imagen`, `proyecto`, `descripcion`) VALUES
(3, 'uploads\\05a0e0d0-948f-45d0-9460-5b93c43e98b9.png', 'Destino turístico', 'Destinos tropicales para un fin de semana lleno de aventuras.'),
(5, 'uploads\\b57aa1bb-ed1b-42b4-81da-9a328a9a3e33.png', 'Proyecto 34', 'El mejor lugar par hacer alpinismo. '),
(6, 'uploads\\c91630ad-0c79-4d28-adc7-48a42639124e.png', 'Proyecto III', 'Atardeceres en la playa III.'),
(7, 'uploads\\3e8325a6-1fe7-4470-bbfb-4debe6a4b2ed.jpg', 'Equipo', 'Equipo de MK.'),
(8, 'uploads\\a1e3eb17-7433-4121-a91f-121c93615690.jpg', 'Proyecto 3', 'Música y viajes. '),
(9, 'uploads\\290909fd-a8f0-4617-8c57-d9468272d3b9.png', 'Proyecto 5', 'Hola.'),
(13, 'uploads\\e044086c-4e6c-4ecf-839b-cdfb4b701e47.png', 'Hola', 'undefined'),
(14, 'uploads\\095824ad-990b-4b0e-9f40-aada2496fa4f.jpg', 'Marketing', 'Equipo innovador.'),
(54, 'uploads\\8ab9f55e-3f16-4636-b15f-d36233a51946.png', 'Desierto', 'El mejor destino turístico del mes de julio.');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `destinos`
--
ALTER TABLE `destinos`
  ADD PRIMARY KEY (`id_destino`),
  ADD UNIQUE KEY `nombred` (`nombred`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`usuario`);

--
-- Indices de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD PRIMARY KEY (`id_imagen`),
  ADD UNIQUE KEY `nombre` (`nombre`),
  ADD KEY `fk_proyect` (`id_proyecto`),
  ADD KEY `fk_dest` (`id_destino`);

--
-- Indices de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  ADD PRIMARY KEY (`id_proyecto`),
  ADD UNIQUE KEY `proyecto` (`proyecto`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `destinos`
--
ALTER TABLE `destinos`
  MODIFY `id_destino` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  MODIFY `id_imagen` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  MODIFY `id_proyecto` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD CONSTRAINT `fk_dest` FOREIGN KEY (`id_destino`) REFERENCES `destinos` (`id_destino`),
  ADD CONSTRAINT `fk_proyect` FOREIGN KEY (`id_proyecto`) REFERENCES `proyectos` (`id_proyecto`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
