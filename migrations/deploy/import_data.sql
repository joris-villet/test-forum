-- Deploy forum:import_data to pg

BEGIN;

INSERT INTO api_user (firstname, lastname, email, password) VALUES
	('bastien', 'leduc', 'bastien@hotmail.fr', 'password'),
	('marcel', 'lafoule', 'lemarceldulouvre@gmail.fr', '12345678');
	

INSERT INTO api_topic (title, message, user_id) VALUES
	('javascript', 'problème avec la boucle for...MERDE !!', 1),
	('php', 'c''est quoi ce language !!', 2),
	('informatique', 'ze souis débutant ze veux apprendre à coder', 2);

COMMIT;
