-- MySQL Script generated by MySQL Workbench
-- Wed Aug  9 22:37:18 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE DATABASE IF NOT EXISTS Notes_DB
CREATE SCHEMA IF NOT EXISTS `notes-schema` DEFAULT CHARACTER SET utf8 ;
USE `notes-db` ;

-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `notes-schema`.`Notes` (
  `idNote` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `content` LONGTEXT NOT NULL,
  `created_at` DATETIME NOT NULL,
  `archived` TINYINT NOT NULL DEFAULT false,
  PRIMARY KEY (`idNote`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
