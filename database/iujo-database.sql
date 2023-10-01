CREATE TABLE "Compañia" (  "id_compañia" integer,
  "Nombre" varchar,  "Rif" integer,
  "Dirección" varchar,  PRIMARY KEY ("id_compañia")
);
CREATE TABLE "Usuarios" (  "id_usuario" integer,
  "Nombre" varchar,  "Email" varchar,
  "Password" varchar,  "id_compañia" integer,
  PRIMARY KEY ("id_usuario"),  CONSTRAINT "FK_Usuarios.id_compañia"
    FOREIGN KEY ("id_compañia")      REFERENCES "Compañia"("id_compañia")
);
CREATE TABLE "Clientes" (  "id_clientes" integer,
  "Nombre" varchar,  "Apellido" varchar,
  "CI" integer,  "Email" varchar,
  "Telefono" varchar,  PRIMARY KEY ("id_clientes")
);
CREATE TABLE "Factura" (  "id_factura" integer,
  "fecha" timestamp,  "metodo_de_pago" varchar,
  " subtotal" integer,  "total" integer,
  "cantidad" integer,  "id_usuario" integer,
  "id_cliente" integer,  PRIMARY KEY ("id_factura"),
  CONSTRAINT "FK_Factura.id_usuario"    FOREIGN KEY ("id_usuario")
      REFERENCES "Usuarios"("id_usuario"),  CONSTRAINT "FK_Factura.id_cliente"
    FOREIGN KEY ("id_cliente")      REFERENCES "Clientes"("id_clientes")
);
CREATE TABLE "Detalles" (  "id_detalles" integer,
  "id_producto" integer,  "id_factura" integer,
  PRIMARY KEY ("id_detalles"),  CONSTRAINT "FK_Detalles.id_factura"
    FOREIGN KEY ("id_factura")      REFERENCES "Factura"("id_factura")
);
CREATE TABLE "Productos" (  "id_producto" integer,
  "nombre" varchar,  "precio" integer,
  "Stock" integer,  "id_usuario" tnteger,
  "id_categoria" integer,  PRIMARY KEY ("id_producto"),
  CONSTRAINT "FK_Productos.id_usuario"    FOREIGN KEY ("id_usuario")
      REFERENCES "Usuarios"("id_usuario"),  CONSTRAINT "FK_Productos.id_producto"
    FOREIGN KEY ("id_producto")      REFERENCES "Detalles"("id_producto")
);
CREATE TABLE "Categoría" (  "id_categora" integer,
  "Nombre" varchar,  PRIMARY KEY ("id_categora"),
  CONSTRAINT "FK_Categoría.id_categora"    FOREIGN KEY ("id_categora")
      REFERENCES "Productos"("id_categoria"));