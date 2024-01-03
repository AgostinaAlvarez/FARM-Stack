-- MySQL dump 10.13  Distrib 8.2.0, for macos13 (x86_64)
--
-- Host: localhost    Database: bd
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `parcelas`
--

DROP TABLE IF EXISTS `parcelas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parcelas` (
  `id` varchar(100) NOT NULL,
  `id_viniedo` varchar(100) NOT NULL,
  `nombre` varchar(200) DEFAULT NULL,
  `superficie` float NOT NULL,
  `latitud` varchar(15) DEFAULT NULL,
  `longitud` varchar(15) DEFAULT NULL,
  `coordenadas` polygon DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_viniedo` (`id_viniedo`),
  CONSTRAINT `parcelas_ibfk_1` FOREIGN KEY (`id_viniedo`) REFERENCES `viniedos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parcelas`
--

LOCK TABLES `parcelas` WRITE;
/*!40000 ALTER TABLE `parcelas` DISABLE KEYS */;
INSERT INTO `parcelas` VALUES ('53f1b371-1045-447a-ab8e-cdb4c93b6b04','f2e984f0-d4e7-4cf4-be1e-2fb5e064211a','Parcela A',1.5,'-33.5778960','-69.0695519',_binary '\0\0\0\0\0\0\0\0\0\0\0\0\0Åº§a.HQÀÊŒO\Ñ\Ê@Ào.\Z2HQÀ}ª¯SQ\Ê@À\'|\0œ(HQÀlµ‡½P\Ê@À\'\ï-\ö(HQÀ½%\ï\Ò<\Ê@À­R\Õ_\nHQÀ/ûu§;\Ê@À™ú\ÔHQÀ\å<­\ì\Ì\Ê@ÀÅº§a.HQÀÊŒO\Ñ\Ê@À'),('a8e6d4g5-5001-4e2c-914f-25gb90f458e3','f2e984f0-d4e7-4cf4-be1e-2fb5e064211a','Parcela D',1.5,'-69.1193867','-33.5796705',_binary '\0\0\0\0\0\0\0\0\0\0\0\0\0;\Ðùß€GQÀ\ç:\èm\Ç\Ê@À¹\æé·ŠGQÀx/Rƒ\Ä\É@À\á¿/\ä\ÇGQÀþB4_\Ê\É@À˜//À¾GQÀ\'z*\ñ\Ê\Ê@ÀpVé“GQÀ6&\Å\Ê@À;\Ðùß€GQÀ\ç:\èm\Ç\Ê@À'),('b9d7c5f4-5001-4e2c-914f-75fa80f247f2','f2e984f0-d4e7-4cf4-be1e-2fb5e064211a','Parcela C',2.5,'-69.1235066','-33.5776325',_binary '\0\0\0\0\0\0\0\0\0\0\0\0\0\Ç\Ô HQÀ\Év¾Ÿ\Z\É@À\õ\É@T\ÐGQÀfM,\ð\É@À¶ŠYŠ¿GQÀ¶4ü\Ê\Ê@ÀŸ¦;\ôHQÀØŽ\óH\Í\Ê@À‘NlHQÀz‹‡\÷\É@À\Ç\Ô HQÀ\Év¾Ÿ\Z\É@À'),('erf1b373-1045-447a-ab8e-cdb4c93b8ss5','f2e984f0-d4e7-4cf4-be1e-2fb5e064211a','Parcela B',2,'-69.1199017','-33.5736995',_binary '\0\0\0\0\0\0\0\0\0\0\0\0\0\ïQ$\ÐGQÀ\Ý;“\É@À\Çx\Þ×’GQÀz}\ã\É@Àa„ŒGQÀŒ\ô¢v¿\É@À\ÛG”\ÇGQÀ\ï5&\Ä\É@À6]ª-\ÐGQÀ\É-\É@À\ïQ$\ÐGQÀ\Ý;“\É@À');
/*!40000 ALTER TABLE `parcelas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `suelos`
--

DROP TABLE IF EXISTS `suelos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `suelos` (
  `id` varchar(100) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `descripcion` text,
  `composicion` text,
  `drenaje` varchar(20) DEFAULT NULL,
  `pH` decimal(4,2) DEFAULT NULL,
  `retencionAgua` varchar(20) DEFAULT NULL,
  `texturaSuelo` varchar(20) DEFAULT NULL,
  `capacidadAireacion` varchar(20) DEFAULT NULL,
  `retencionNutrientes` varchar(20) DEFAULT NULL,
  `propiedadesViticultura` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `suelos`
--

LOCK TABLES `suelos` WRITE;
/*!40000 ALTER TABLE `suelos` DISABLE KEYS */;
INSERT INTO `suelos` VALUES ('a','Franco Arenoso','Textura intermedia entre franco y arenoso, con una buena capacidad de drenaje considerada Ã³ptima y una retenciÃ³n de agua catalogada como moderada.','Mezcla equilibrada de arena, limo y arcilla.','Ã“ptimo',7.00,'Moderada','Franco-Arenoso','Alta','Moderada','Ideal para el cultivo de variedades sensibles al exceso de humedad, ya que permite un buen drenaje y una retenciÃ³n adecuada de nutrientes.'),('b','Arcilloso','Suelo pesado y rico en arcilla, con una retenciÃ³n de agua alta pero con un drenaje considerado deficiente.','Alta proporciÃ³n de arcilla.','Deficiente',6.80,'Alta','Arcilloso','Baja','Alta','Adecuado para ciertas variedades que requieren mayor retenciÃ³n de agua, aunque puede requerir tÃ©cnicas de manejo para mejorar el drenaje y evitar problemas de encharcamiento.'),('c','CalcÃ¡reo','Suelo con una alta concentraciÃ³n de carbonato de calcio, con textura variable y una retenciÃ³n de agua variable dependiendo de la textura del suelo, considerada intermedia.','Alto contenido de carbonato de calcio.','Ã“ptimo',8.20,'Intermedia','CalcÃ¡reo','Moderada','Moderada baja','Apto para ciertas variedades que se benefician de la presencia de calcio en el suelo, aunque puede requerir ajustes en la fertilizaciÃ³n debido a la posible baja disponibilidad de algunos nutrientes.');
/*!40000 ALTER TABLE `suelos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tareas`
--

DROP TABLE IF EXISTS `tareas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tareas` (
  `id` varchar(100) NOT NULL,
  `nombre_tarea` varchar(255) DEFAULT NULL,
  `descripcion` text,
  `fecha_creacion` date DEFAULT NULL,
  `fecha_limite` date DEFAULT NULL,
  `prioridad` varchar(50) DEFAULT NULL,
  `estado` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tareas`
--

LOCK TABLES `tareas` WRITE;
/*!40000 ALTER TABLE `tareas` DISABLE KEYS */;
INSERT INTO `tareas` VALUES ('64d51c1e-51a8-47ac-b577-ff8dbfc5e6f4','Poda de viÃ±edos',NULL,'2023-11-28','2023-12-25','Media','Pendiente'),('96f8d9d5-6f0f-4e36-8272-68784990c973','FertilizaciÃ³n y aplicaciÃ³n de nutrientes','','2023-11-16','2023-12-21','Media','Pendiente'),('b9d7c5f4-5001-4e2c-914f-75fa80f247f2','Control de humedad y riego','Monitorear y ajustar el riego de las vides','2023-11-21','2023-12-30','Media','Pendiente');
/*!40000 ALTER TABLE `tareas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tareasPorParcela`
--

DROP TABLE IF EXISTS `tareasPorParcela`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tareasPorParcela` (
  `id_parcela` varchar(100) NOT NULL,
  `id_tarea` varchar(100) NOT NULL,
  KEY `id_parcela` (`id_parcela`),
  KEY `id_tarea` (`id_tarea`),
  CONSTRAINT `tareasporparcela_ibfk_1` FOREIGN KEY (`id_parcela`) REFERENCES `parcelas` (`id`),
  CONSTRAINT `tareasporparcela_ibfk_2` FOREIGN KEY (`id_tarea`) REFERENCES `tareas` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tareasPorParcela`
--

LOCK TABLES `tareasPorParcela` WRITE;
/*!40000 ALTER TABLE `tareasPorParcela` DISABLE KEYS */;
/*!40000 ALTER TABLE `tareasPorParcela` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipoDeSueloParcela`
--

DROP TABLE IF EXISTS `tipoDeSueloParcela`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipoDeSueloParcela` (
  `id_suelo` varchar(100) NOT NULL,
  `id_parcela` varchar(100) NOT NULL,
  KEY `id_suelo` (`id_suelo`),
  KEY `id_parcela` (`id_parcela`),
  CONSTRAINT `tipodesueloparcela_ibfk_1` FOREIGN KEY (`id_suelo`) REFERENCES `suelos` (`id`),
  CONSTRAINT `tipodesueloparcela_ibfk_2` FOREIGN KEY (`id_parcela`) REFERENCES `parcelas` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipoDeSueloParcela`
--

LOCK TABLES `tipoDeSueloParcela` WRITE;
/*!40000 ALTER TABLE `tipoDeSueloParcela` DISABLE KEYS */;
INSERT INTO `tipoDeSueloParcela` VALUES ('a','53f1b371-1045-447a-ab8e-cdb4c93b6b04'),('b','53f1b371-1045-447a-ab8e-cdb4c93b6b04'),('c','a8e6d4g5-5001-4e2c-914f-25gb90f458e3'),('b','a8e6d4g5-5001-4e2c-914f-25gb90f458e3'),('a','b9d7c5f4-5001-4e2c-914f-75fa80f247f2'),('c','b9d7c5f4-5001-4e2c-914f-75fa80f247f2'),('c','erf1b373-1045-447a-ab8e-cdb4c93b8ss5');
/*!40000 ALTER TABLE `tipoDeSueloParcela` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `email` varchar(300) NOT NULL,
  `password` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('primerusuario@gmail.com','1234'),('segundousuario@gmail.com','12345');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombe` varchar(200) NOT NULL,
  `edad` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'agos',22);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `viniedos`
--

DROP TABLE IF EXISTS `viniedos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `viniedos` (
  `id` varchar(100) NOT NULL,
  `nombre` varchar(200) DEFAULT NULL,
  `superficie` float NOT NULL,
  `localidad` varchar(300) NOT NULL,
  `pais` varchar(200) NOT NULL,
  `provincia` varchar(100) DEFAULT NULL,
  `coordenadas` polygon DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `viniedos`
--

LOCK TABLES `viniedos` WRITE;
/*!40000 ALTER TABLE `viniedos` DISABLE KEYS */;
INSERT INTO `viniedos` VALUES ('45cc3968-675a-4be5-ad15-1a8d8eee86ef','Finca Sol de los Andes',10,'TunuyÃ¡n','Argentina','Mendoza',NULL),('f2e984f0-d4e7-4cf4-be1e-2fb5e064211a','ViÃ±edo Vista Andina',7,'TunuyÃ¡n','Argentina','Mendoza',_binary '\0\0\0\0\0\0\0\0\0\0\n\0\0\0¢¼\ê\\,HQÀr„\Ð\Ê@À€Z±d3HQÀ—\ÓTY\Ê@À˜7\â$(HQÀƒ•ùýQ\Ê@ÀDÁŒ)HQÀ\Ôa>\Ê@À·\è	HQÀ\Ýøb9\Ê@À2\ÈXHQÀ—„U\É@À\ØÆŽ|”GQÀ®G\áz\É@À ž€GQÀ\ð\õZu\Â\Ê@À8Ê°@*HQÀ;\\a°\Ñ\Ê@À¢¼\ê\\,HQÀr„\Ð\Ê@À');
/*!40000 ALTER TABLE `viniedos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-24 12:57:51


CREATE TABLE registrosQuimicosProduccion(
     id VARCHAR(100) NOT NULL PRIMARY KEY,
     ph FLOAT,
     temperatura FLOAT,
     acidez FLOAT,
     solidosEnSuspension FLOAT,
     dioxidoDeAzufre FLOAT,
     antocianinas FLOAT,
     taninos FLOAT,
     flavonoides FLOAT,
     hidratacion FLOAT,
     nivelesDeAzucar FLOAT
)	


CREATE TABLE planciones(
	id VARCHAR(100) NOT NULL PRIMARY KEY,
    uva_id VARCHAR(100) NOT NULL,
    parcela_id VARCHAR(100) NOT NULL,
    fecha DATE,
	FOREIGN KEY (id_parcela) REFERENCES parcelas(id),
	FOREIGN KEY (id_uva) REFERENCES uvas(id) 
)




CREATE TABLE registrosQuimicosCosecha(
     id VARCHAR(100) NOT NULL PRIMARY KEY,
     ph FLOAT,
     acidez FLOAT,
     hidratacion FLOAT,
     nivelesDeAzucar FLOAT,
     id_registro VARCHAR(100) NOT NULL,
     fecha DATE,
     FOREIGN KEY (id_registro) REFERENCES registroUvaPorParcela(id)
 );



CREATE TABLE registrosQuimicosProducto(
     id VARCHAR(100) NOT NULL PRIMARY KEY,     
     acidez_fija FLOAT, 
     acidez_volatil FLOAT, 
     acido_citrico FLOAT, 
     azucar_residual FLOAT, 
     cloruros FLOAT, 
     dioxido_de_azufre_libre FLOAT, 
     dioxido_de_azufre_total FLOAT, 
     densidad FLOAT, 
     ph FLOAT, 
     sulfatos FLOAT, 
     alcohol FLOAT, 
     calidad FLOAT,
     id_registro VARCHAR(100) NOT NULL,
     fecha DATE,
     FOREIGN KEY (id_registro) REFERENCES registroUvaPorParcela(id)
);

CREATE TABLE registroUvaPorParcela(
	id VARCHAR(100) NOT NULL PRIMARY KEY,
    id_parcela VARCHAR(100) NOT NULL,
    id_uva VRCHAR(100) NOT NULL,
    FOREIGN KEY (id_parcela) REFERENCES parcelas(id),
    FOREIGN KEY (id_uva) REFERENCES uvas(id)
);
