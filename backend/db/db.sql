

CREATE TABLE registrosQuimicosProduccion(
     id VARCHAR(100) NOT NULL PRIMARY KEY,
     ph FLOAT,
     temperatura FLOAT,
     acidez FLOAT,
     solidosEnSuspension FLOAT,
     dioxidoDeAzufre FLOAT,
     antocianinas FLOAT,
     taninos FLOAT,
     flavonoides FLOAT,
     hidratacion FLOAT,
     nivelesDeAzucar FLOAT
)	


CREATE TABLE planciones(
	id VARCHAR(100) NOT NULL PRIMARY KEY,
    uva_id VARCHAR(100) NOT NULL,
    parcela_id VARCHAR(100) NOT NULL,
    fecha DATE,
	FOREIGN KEY (id_parcela) REFERENCES parcelas(id),
	FOREIGN KEY (id_uva) REFERENCES uvas(id) 
)




CREATE TABLE registrosQuimicosCosecha(
     id VARCHAR(100) NOT NULL PRIMARY KEY,
     ph FLOAT,
     acidez FLOAT,
     hidratacion FLOAT,
     nivelesDeAzucar FLOAT,
     id_registro VARCHAR(100) NOT NULL,
     fecha DATE,
     FOREIGN KEY (id_registro) REFERENCES registroUvaPorParcela(id)
 );



CREATE TABLE registrosQuimicosProducto(
     id VARCHAR(100) NOT NULL PRIMARY KEY,     
     acidez_fija FLOAT, 
     acidez_volatil FLOAT, 
     acido_citrico FLOAT, 
     azucar_residual FLOAT, 
     cloruros FLOAT, 
     dioxido_de_azufre_libre FLOAT, 
     dioxido_de_azufre_total FLOAT, 
     densidad FLOAT, 
     ph FLOAT, 
     sulfatos FLOAT, 
     alcohol FLOAT, 
     calidad FLOAT,
     id_registro VARCHAR(100) NOT NULL,
     fecha DATE,
     FOREIGN KEY (id_registro) REFERENCES registroUvaPorParcela(id)
);

CREATE TABLE registroUvaPorParcela(
	id VARCHAR(100) NOT NULL PRIMARY KEY,
    id_parcela VARCHAR(100) NOT NULL,
    id_uva VRCHAR(100) NOT NULL,
    FOREIGN KEY (id_parcela) REFERENCES parcelas(id),
    FOREIGN KEY (id_uva) REFERENCES uvas(id)
);
