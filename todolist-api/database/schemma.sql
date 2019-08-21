create table developer (
    id serial NOT NULL,
    name character varying(32) NOT NULL,
    CONSTRAINT developer_pk PRIMARY KEY (id)
);

create table task (
    id serial NOT NULL,
    title character varying(32) NOT NULL,
    description character varying(256) NOT NULL,
    estimate_time numeric (6, 2) NOT NULL,
    worked_time numeric (6, 2),
    developer_id integer NOT NULL,
    CONSTRAINT task_pk PRIMARY KEY (id),
    CONSTRAINT task__developer_fk FOREIGN KEY (developer_id)
      REFERENCES developer (id) MATCH SIMPLE
      ON UPDATE NO ACTION
      ON DELETE NO ACTION
);