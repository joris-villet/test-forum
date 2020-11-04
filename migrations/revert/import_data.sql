-- Revert forum:import_data from pg

BEGIN;

DELETE FROM api_topic;

DELETE FROM api_user;

COMMIT;
