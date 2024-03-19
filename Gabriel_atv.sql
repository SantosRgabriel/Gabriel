CREATE TABLE `comment-hub`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(10) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`id`));


INSERT INTO `comment-hub`.`user` (`username`,
				  `password`,
				  `firstname`,
				  `lastname`)
				VALUES ('GabrielSt', 'gsr', 'Gabriel', 'Santos');

INSERT INTO `comment-hub`.`user` (`username`,
			  `password`,
			  `firstname`,
			  `lastname`)
			 VALUES ('JJJames', 'miranha', 'JJ', 'James');

INSERT INTO `comment-hub`.`user` (`username`,
			  `password`,
			  `firstname`,
			  `lastname`) 
			VALUES ('Hulk', 'esmaga', 'Bruce', 'Banner');


UPDATE `comment-hub`.`user` SET `username` = 'JJames' WHERE (`id` = '4');
