DROP TABLE IF EXISTS todos;

CREATE TABLE todos (
	id character varying,
	title character varying,
	iscomplete boolean
);

DO $$
BEGIN
	FOR counter IN 1..10 LOOP
	INSERT INTO todos (id, title, iscomplete)
		VALUES (counter, 'placeholder', FALSE);
	END LOOP;
END; $$


