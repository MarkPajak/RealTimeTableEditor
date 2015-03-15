-- MySQL dump 10.13  Distrib 5.1.73, for redhat-linux-gnu (x86_64)
--
-- Host: localhost    Database: Comments
-- ------------------------------------------------------
-- Server version	5.1.73

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments` (
  `heading` text,
  `text` text,
  `id` int(11) NOT NULL DEFAULT '0',
  `document` varchar(255) DEFAULT NULL,
  `sectionNumber` int(11) DEFAULT NULL,
  `procedureid` int(11) DEFAULT NULL,
  `comment` text,
  `name` text,
  `sourceid` int(11) DEFAULT NULL,
  `keywords` text,
  `title` text,
  `type` varchar(255) DEFAULT NULL,
  `rating` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `method` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `response_required` varchar(255) DEFAULT NULL,
  `e_news` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `enquiry_type` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (NULL,NULL,1426259806,NULL,NULL,NULL,'iiii','',NULL,'',NULL,NULL,NULL,'BMAG',NULL,'Friday 13th of March 2015 03:16:46 PM',NULL,NULL,NULL,NULL,NULL,''),(NULL,NULL,1426259652,NULL,NULL,NULL,'ikifikfikfikf','kfikfik',NULL,'',NULL,NULL,NULL,'',NULL,'Friday 13th of March 2015 03:14:11 PM',NULL,NULL,NULL,NULL,NULL,'fkfik'),(NULL,NULL,1426258090,NULL,NULL,NULL,'','',NULL,'',NULL,NULL,NULL,'BMAG',NULL,'Friday 13th of March 2015 02:48:10 PM',NULL,NULL,NULL,NULL,NULL,''),(NULL,NULL,1426258382,NULL,NULL,NULL,'mm','mark',NULL,'',NULL,NULL,NULL,'BMAG',NULL,'Friday 13th of March 2015 02:53:01 PM',NULL,NULL,NULL,NULL,NULL,'pajak'),(NULL,NULL,1426258942,NULL,NULL,NULL,'','',NULL,'',NULL,NULL,NULL,'BMAG',NULL,'Friday 13th of March 2015 03:02:22 PM',NULL,NULL,NULL,NULL,NULL,''),(NULL,NULL,1426259152,NULL,NULL,NULL,'testing with no name','',NULL,'',NULL,NULL,NULL,'',NULL,'Friday 13th of March 2015 03:05:51 PM',NULL,NULL,NULL,NULL,NULL,''),(NULL,NULL,1426258974,NULL,NULL,NULL,'dd','ddd',NULL,'',NULL,NULL,NULL,'BMAG',NULL,'Friday 13th of March 2015 03:02:53 PM',NULL,NULL,NULL,NULL,NULL,'ddd'),(NULL,NULL,1426259122,NULL,NULL,NULL,'jhh','mark',NULL,'',NULL,NULL,NULL,'BMAG',NULL,'Friday 13th of March 2015 03:05:22 PM',NULL,NULL,NULL,NULL,NULL,'pajak'),(NULL,NULL,1426259168,NULL,NULL,NULL,'ss','mark',NULL,'',NULL,NULL,NULL,'',NULL,'Friday 13th of March 2015 03:06:07 PM',NULL,NULL,NULL,NULL,NULL,'ppp'),(NULL,NULL,1426259268,NULL,NULL,NULL,'456','mark',NULL,'',NULL,NULL,NULL,'BMAG',NULL,'Friday 13th of March 2015 03:07:47 PM',NULL,NULL,NULL,NULL,NULL,'pajak'),(NULL,NULL,1426259278,NULL,NULL,NULL,'123456789','',NULL,'',NULL,NULL,NULL,'',NULL,'Friday 13th of March 2015 03:07:58 PM',NULL,NULL,NULL,NULL,NULL,''),(NULL,NULL,1426259294,NULL,NULL,NULL,'123123','',NULL,'',NULL,NULL,NULL,'',NULL,'Friday 13th of March 2015 03:08:13 PM',NULL,NULL,NULL,NULL,NULL,''),(NULL,NULL,1426259305,NULL,NULL,NULL,'123123','',NULL,'',NULL,NULL,NULL,'',NULL,'Friday 13th of March 2015 03:08:25 PM',NULL,NULL,NULL,NULL,NULL,''),(NULL,NULL,1426259420,NULL,NULL,NULL,'this and that','mark',NULL,'',NULL,NULL,NULL,'BMAG',NULL,'Friday 13th of March 2015 03:10:20 PM',NULL,NULL,NULL,NULL,NULL,'pajak'),(NULL,NULL,1426259613,NULL,NULL,NULL,'got no name','',NULL,'',NULL,NULL,NULL,'BMAG',NULL,'Friday 13th of March 2015 03:13:33 PM',NULL,NULL,NULL,NULL,NULL,''),(NULL,NULL,1426259629,NULL,NULL,NULL,'just another random comment','',NULL,'',NULL,NULL,NULL,'',NULL,'Friday 13th of March 2015 03:13:49 PM',NULL,NULL,NULL,NULL,NULL,''),(NULL,NULL,1426259640,NULL,NULL,NULL,'fukfi','krikfuiktuik',NULL,'',NULL,NULL,NULL,'',NULL,'Friday 13th of March 2015 03:13:59 PM',NULL,NULL,NULL,NULL,NULL,'kfuikfuik');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `source`
--

DROP TABLE IF EXISTS `source`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `source` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `source`
--

LOCK TABLES `source` WRITE;
/*!40000 ALTER TABLE `source` DISABLE KEYS */;
/*!40000 ALTER TABLE `source` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-03-13 15:57:10
