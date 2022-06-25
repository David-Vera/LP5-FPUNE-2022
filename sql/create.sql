CREATE TABLE personas
(
    per_codigo serial NOT NULL ,
    per_nombre character varying(120),
    per_correo character varying(80) ,
    per_direccion character varying(240),
    per_telefono character varying(80),
    per_latitud character varying(80),
    per_longitud character varying(80),
    per_password character varying(100),
    per_nivel character varying(40),
    CONSTRAINT personas_pkey PRIMARY KEY (per_codigo)
)

CREATE TABLE autos
(
    aut_codigo serial NOT NULL ,
    aut_descripcion character varying(120),
    aut_marca character varying(80) ,
    aut_latitud character varying(80),
    aut_longitud character varying(80),
    aut_ano numeric,
    aut_kilometraje numeric,
    aut_costo_alquiler numeric,
    aut_estado character varying(80),
    aut_persona_id integer,
    CONSTRAINT autos_pkey PRIMARY KEY (aut_codigo)
)

CREATE TABLE reservas
(
    res_codigo serial NOT NULL ,
    res_auto integer,
    res_tiempo integer ,
    res_monto_pagar numeric,
    res_fecha DATE,
    res_estado character varying(80),
    res_auto_persona integer,
    CONSTRAINT reservas_pkey PRIMARY KEY (res_codigo)
)

