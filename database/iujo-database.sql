CREATE DATABASE SystemFact;

USE SystemFact;

CREATE TABLE "Compañia" ( 
  "id_compañia" UUID DEFAULT uuid_generate_v4(),
  "Nombre" varchar,  
  "Rif" integer,
  "Dirección" varchar,  
  PRIMARY KEY ("id_compañia")
);

CREATE TABLE "Usuarios" ( 
  "id_usuario" UUID DEFAULT uuid_generate_v4(),
  "Nombre" varchar,  
  "Email" varchar,
  "Password" varchar,  
  "id_compañia" UUID,
  PRIMARY KEY ("id_usuario"),  
  CONSTRAINT "FK_Usuarios.id_compañia"
    FOREIGN KEY ("id_compañia")      REFERENCES "Compañia"("id_compañia")
);

CREATE TABLE "Clientes" ( 
  "id_clientes" UUID DEFAULT uuid_generate_v4(),
  "Nombre" varchar,  
  "Apellido" varchar,
  "CI" integer,  
  "Email" varchar,
  "Telefono" varchar,
  "phone_code" varchar,
  PRIMARY KEY ("id_clientes")
);

CREATE TABLE "Factura" ( 
  "id_factura" UUID DEFAULT uuid_generate_v4(),
  "fecha" timestamp,  
  "metodo_de_pago" varchar,
  " subtotal" integer,  
  "total" integer,
  "cantidad" integer,  
  "id_usuario" UUID,
  "id_cliente" UUID,
  PRIMARY KEY ("id_factura"),
  CONSTRAINT "FK_Factura.id_usuario"    FOREIGN KEY ("id_usuario")
      REFERENCES "Usuarios"("id_usuario"),  
  CONSTRAINT "FK_Factura.id_cliente"
    FOREIGN KEY ("id_cliente")      REFERENCES "Clientes"("id_clientes")
);

CREATE TABLE "Detalles" ( 
  "id_detalles" UUID DEFAULT uuid_generate_v4(),
  "id_producto" UUID,  
  "id_factura" UUID,
  PRIMARY KEY ("id_detalles"),  
  CONSTRAINT "FK_Detalles.id_factura"
    FOREIGN KEY ("id_factura")      REFERENCES "Factura"("id_factura"),
  CONSTRAINT "FK_Detalles.id_producto"
    FOREIGN KEY ("id_producto")      REFERENCES "Productos"("id_producto")
);

CREATE TABLE "Productos" ( 
  "id_producto" UUID DEFAULT uuid_generate_v4(),
  "nombre" varchar,  
  "precio" integer,
  "Stock" integer,  
  "id_usuario" UUID,
  "id_categoria" UUID,
  PRIMARY KEY ("id_producto"),
  CONSTRAINT "FK_Productos.id_usuario"    FOREIGN KEY ("id_usuario")
      REFERENCES "Usuarios"("id_usuario"),  
  CONSTRAINT "FK_Productos.id_producto"
    FOREIGN KEY ("id_producto")      REFERENCES "Detalles"("id_producto")
);


CREATE TABLE "Categoría" ( 
  "id_categoria" UUID DEFAULT uuid_generate_v4(),
  "Nombre" varchar,  
  PRIMARY KEY ("id_categoria"),
  CONSTRAINT "FK_Categoria.id_categoria"    FOREIGN KEY ("id_categoria")
      REFERENCES "Productos"("id_categoria")
);

