-- Deploy forum:views to pg

BEGIN;

CREATE VIEW v_user_with_french_date AS
	SELECT firstname, lastname, email, password, to_char(created_at, 'TMday dd TMmonth yyyy') FROM api_user;

COMMIT;
