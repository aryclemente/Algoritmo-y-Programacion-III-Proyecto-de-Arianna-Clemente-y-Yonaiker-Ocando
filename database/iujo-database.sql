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
  CONSTRAINT "FK_Usuarios.id_compañia" FOREIGN KEY ("id_compañia") REFERENCES "Compañia"("id_compañia")
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

CREATE TABLE "Categoria" (
  "id_categoria" UUID DEFAULT uuid_generate_v4(),
  "Nombre" varchar,
  PRIMARY KEY ("id_categoria")
);

CREATE TABLE "Productos" (
  "id_producto" UUID DEFAULT uuid_generate_v4(),
  "nombre" varchar,
  "precio" integer,
  "Stock" integer,
  "id_usuario" UUID,
  "id_categoria" UUID,
  PRIMARY KEY ("id_producto"),
  CONSTRAINT "FK_Productos.id_usuario" FOREIGN KEY ("id_usuario") REFERENCES "Usuarios"("id_usuario"),
  CONSTRAINT "FK_Productos.id_categoria" FOREIGN KEY ("id_categoria") REFERENCES "Categoria" ("id_categoria")
);

CREATE TABLE "Factura" (
  "id_factura" UUID DEFAULT uuid_generate_v4(),
  "fecha" timestamp,
  "metodo_de_pago" varchar,
  "subtotal" integer,
  "total" integer,
  "cantidad" integer,
  "id_usuario" UUID,
  "id_cliente" UUID,
  PRIMARY KEY ("id_factura"),
  CONSTRAINT "FK_Factura.id_usuario" FOREIGN KEY ("id_usuario") REFERENCES "Usuarios"("id_usuario"),
  CONSTRAINT "FK_Factura.id_cliente" FOREIGN KEY ("id_cliente") REFERENCES "Clientes"("id_clientes")
);

CREATE TABLE "Detalles" (
  "id_detalles" UUID DEFAULT uuid_generate_v4(),
  "id_producto" UUID,
  "id_factura" UUID,
  PRIMARY KEY ("id_detalles"),
  CONSTRAINT "FK_Detalles.id_factura" FOREIGN KEY ("id_factura") REFERENCES "Factura"("id_factura"),
  CONSTRAINT "FK_Detalles.id_producto" FOREIGN KEY ("id_producto") REFERENCES "Productos"("id_producto")
);

INSERT INTO "Compañia" ( "Nombre", "Rif", "Dirección") VALUES
  ('Apple', 45678589, 'USA Suite 54'),
  ('Alphabet', 234567, 'Canada PO Box 42303'),
  ('Meta', 85345678, 'Francia Room 1954'),
  ('Alibaba', 45566789, 'Australia Apt 110'),
  ('Amazon', 56782690, 'Singapur Room 925');

INSERT INTO "Usuarios" ("Nombre", "Email", "Password") VALUES
  ('Arianna', 'arianna@email.com', 'hashed_password' ),
  ('Yonaiker', 'yonaiker@email.com', 'hashed_password'),
  ('Reynaldo', 'reynaldo@email.com', 'hashed_password');

INSERT INTO "Clientes" ("Nombre", "Apellido", "CI", "Email", "Telefono", "phone_code") VALUES
  ('Juan', 'Pérez', 12345678, 'juan.perez@email.com', '+123456789', '+58'),
  ('Ana', 'González', 23456789, 'ana.gonzalez@email.com', '+234567890', '+58'),
  ('Carlos', 'Rodríguez', 34567890, 'carlos.rodriguez@email.com', '+345678901', '+58'),
  ('Luisa', 'Martínez', 45678901, 'luisa.martinez@email.com', '+456789012', '+58'),
  ('Maria', 'Fernández', 56789012, 'maria.fernandez@email.com', '+567890123', '+58');

INSERT INTO "Categoria" ("Nombre") VALUES
  ('Tecnología'),
  ( 'Hogar'),
  ( 'Juguetes'),
  ('General');

INSERT INTO "Productos" ("nombre", "precio", "Stock") VALUES
  ('Producto 1', 100, 10),
  ('Producto 2', 200, 20),
  ('Producto 3', 300, 30),
  ('Producto 4', 400, 40),
  ('Producto 5', 500, 50);

INSERT INTO "Factura" ("fecha", "metodo_de_pago", "subtotal", "total", "cantidad") VALUES
  ('2023-10-20', 'tarjeta de crédito', 100, 110, 1),
  ('2023-10-21', 'tarjeta de débito', 200, 220, 2),
  ('2023-10-22', 'efectivo', 300, 330, 3),
  ('2023-10-23', 'cheque', 400, 440, 4),
  ('2023-10-24', 'transferencia bancaria', 500, 550, 5);