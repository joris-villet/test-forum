-- Revert forum:init from pg

BEGIN;

DROP TABLE api_topic_has_user;

DROP TABLE api_message;

DROP TABLE api_topic;

DROP TABLE api_user;

COMMIT;
