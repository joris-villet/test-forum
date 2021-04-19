-- Deploy forum:init to pg

BEGIN;

CREATE TABLE api_user (
	id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	firstname text NOT NULL,
	lastname text NOT NULL,
	email text NOT NULL UNIQUE,
	password text NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  	updated_at TIMESTAMPTZ NULL,
	UNIQUE (firstname, lastname)
);

CREATE TABLE api_topic (
	id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	title text NOT NULL UNIQUE,
	message text NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  	updated_at TIMESTAMPTZ NULL,
	user_id int REFERENCES api_user(id)
);

CREATE TABLE api_message (
	id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	message text NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  	updated_at TIMESTAMPTZ NULL,
	topic_id int NOT NULL REFERENCES	api_topic(id),
	user_id int NOT NULL REFERENCES 	api_user(id)
);


CREATE TABLE api_topic_has_user (
	user_id int NOT NULL REFERENCES api_user(id),
	topic_id int NOT NULL REFERENCES api_topic(id),
	created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMPTZ NULL
);


COMMIT;
