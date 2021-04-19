-- Deploy forum:import_data to pg

BEGIN;

INSERT INTO api_user (firstname, lastname, email, password) VALUES
	('bastien', 'leduc', 'bastien@hotmail.fr', 'password'),
	('marcel', 'lafoule', 'lemarceldulouvre@gmail.fr', '12345678'),
	('marie', 'truc', 'marie@gmail.fr', 'password');
	
INSERT INTO api_topic
	(title, message, created_at, user_id) VALUES
	('javascript', 'problème avec la boucle for...MERDE !!', '18-04-2021', 1),
	('php', 'c''est quoi ce language !!', '18-04-2021,', 2),
	('informatique', 'ze souis débutant ze veux apprendre à coder', '18-04-2021', 3);

COMMIT;
