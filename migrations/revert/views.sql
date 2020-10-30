-- Revert forum:views from pg

BEGIN;

DROP VIEW v_user_with_french_date;

COMMIT;
