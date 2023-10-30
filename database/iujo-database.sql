CREATE TABLE "Company" (
  "id_company" UUID DEFAULT uuid_generate_v4(),
  "Name" varchar(255),
  "Rif" integer,
  "Address" varchar(255),
  PRIMARY KEY ("id_company")
);

CREATE TABLE "Users" (
  "id_user" UUID DEFAULT uuid_generate_v4(),
  "Name" varchar(255),
  "Email" varchar(255),
  "Password" varchar(255),
  "id_company" UUID,
  PRIMARY KEY ("id_user"),
  CONSTRAINT "FK_Users.id_company" FOREIGN KEY ("id_company") REFERENCES "Company"("id_company")
);


CREATE TABLE "Customers" (
  "id_customers" UUID DEFAULT uuid_generate_v4(),
  "Name" varchar(255),
  "LastName" varchar(255),
  "CI" integer,
  "Email" varchar(255),
  "Phone" varchar(255),
  "phone_code" varchar(255),
  PRIMARY KEY ("id_customers")
);


CREATE TABLE "Category" (
  "id_category" UUID DEFAULT uuid_generate_v4(),
  "Name" varchar(255),
  PRIMARY KEY ("id_category")
);

CREATE TABLE "Products" (
  "id_product" UUID DEFAULT uuid_generate_v4(),
  "Name" varchar(255),
  "Price" integer,
  "Stock" integer,
  "id_user" UUID,
  "id_category" UUID,
  PRIMARY KEY ("id_product"),
  CONSTRAINT "FK_Products.id_user" FOREIGN KEY ("id_user") REFERENCES "Users"("id_user"),
  CONSTRAINT "FK_Products.id_category" FOREIGN KEY ("id_category") REFERENCES "Category" ("id_category")
);

CREATE TABLE "Invoice" (
  "id_invoice" UUID DEFAULT uuid_generate_v4(),
  "Date" timestamp,
  "Payment_Method" varchar(255),
  "Subtotal" integer,
  "Total" integer,
  "Quantity" integer,
  "id_user" UUID,
  "id_customer" UUID,
  PRIMARY KEY ("id_invoice"),
  CONSTRAINT "FK_Invoice.id_user" FOREIGN KEY ("id_user") REFERENCES "Users"("id_user"),
  CONSTRAINT "FK_Invoice.id_customer" FOREIGN KEY ("id_customer") REFERENCES "Customers"("id_customers")
);

CREATE TABLE "Details" (
  "id_details" UUID DEFAULT uuid_generate_v4(),
  "id_product" UUID,
  "id_invoice" UUID,
  PRIMARY KEY ("id_details"),
  CONSTRAINT "FK_Details.id_invoice" FOREIGN KEY ("id_invoice") REFERENCES "Invoice"("id_invoice"),
  CONSTRAINT "FK_Details.id_product" FOREIGN KEY ("id_product") REFERENCES "Products"("id_product")
);

INSERT INTO "Company" ("Name", "Rif", "Address") VALUES
  ('Apple', 45678589, 'USA Suite 54'),
  ('Alphabet', 234567, 'Canada PO Box 42303'),
  ('Meta', 85345678, 'France Room 1954'),
  ('Alibaba', 45566789, 'Australia Apartment 110'),
  ('Amazon', 56782690, 'Singapore Room 925');

INSERT INTO "Users" ("Name", "Email", "Password","id_company") VALUES
  ('Arianna', 'arianna@email.com', 'hashed_password',(SELECT "id_company" FROM "Company" WHERE "Name" = 'Apple')),
  ('Yonaiker', 'yonaiker@email.com', 'hashed_password',(SELECT "id_company" FROM "Company" WHERE "Name" = 'Alphabet')),
  ('Reynaldo', 'reynaldo@email.com', 'hashed_password',(SELECT "id_company" FROM "Company" WHERE "Name" = 'Meta'));

  INSERT INTO "Customers" ("Name", "LastName", "CI", "Email", "Phone", "Phone_Code", "Address") VALUES
  ('Juan', 'Perez', 123456, 'juan@email.com', '1234567890', '+1','mikasa'),
  ('Maria', 'Gomez', 234567, 'maria@email.com', '0987654321', '+1','av flores'),
  ('Pedro', 'Rodriguez', 345678, 'pedro@email.com', '1122334455', '+1', 'esquina de mariagas'),
  ('Ana', 'Lopez', 456789, 'ana@email.com', '5544332211', '+1', 'calle principal las americas'),
  ('Carlos', 'Garcia', 567890, 'carlos@email.com', '9988776655', '+1', 'Estudios Tecnicos, Av Juego');

INSERT INTO "Category" ("Name") VALUES
  ('Electronics'),
  ('Clothing'),
  ('Books'),
  ('Toys'),
  ('Groceries');

INSERT INTO "Products" ("Name", "Price", "Stock", "id_user", "id_category") VALUES
  ('Laptop', 1200, 10, (SELECT "id_user" FROM "Users" WHERE "Name" = 'Yonaiker'), (SELECT "id_category" FROM "Category" WHERE "Name" = 'Electronics')),
  ('T-Shirt', 20, 100, (SELECT "id_user" FROM "Users" WHERE "Name" = 'Arianna'), (SELECT "id_category" FROM "Category" WHERE "Name" = 'Clothing')),
  ('Novel', 15, 50, (SELECT "id_user" FROM "Users" WHERE "Name" = 'Reynaldo'), (SELECT "id_category" FROM "Category" WHERE "Name" = 'Books')),
  ('Action Figure', 30, 5, (SELECT "id_user" FROM "Users" WHERE "Name" = 'Arianna'), (SELECT "id_category" FROM "Category" WHERE "Name" = 'Toys')),
  ('Bread', 5, 1000, (SELECT "id_user" FROM "Users" WHERE "Name" = 'Yonaiker'), (SELECT "id_category" FROM "Category" WHERE "Name" = 'Groceries'));


INSERT INTO "Invoice" ("Date", "Payment_Method", "Subtotal", "Total", "Quantity", "id_user", "id_customer") VALUES
  ('2023-10-26 00:00:00', 'Credit Card', 1205, 1205, 1, (SELECT "id_user" FROM "Users" WHERE "Name" = 'Arianna'), (SELECT "id_customers" FROM "Customers" WHERE "Name" = 'Carlos')),
  ('2023-10-26 00:00:00', 'Debit Card', 25, 25, 1, (SELECT "id_user" FROM "Users" WHERE "Name" = 'Reynaldo'), (SELECT "id_customers" FROM "Customers" WHERE "Name" = 'Carlos')),
  ('2023-10-26 00:00:00', 'Cash', 16, 16, 1, (SELECT "id_user" FROM "Users" WHERE "Name" = 'Yonaiker'), (SELECT "id_customers" FROM "Customers" WHERE "Name" = 'Maria')),
  ('2023-10-26 00:00:00', 'PayPal', 35, 35, 1, (SELECT "id_user" FROM "Users" WHERE "Name" = 'Arianna'), (SELECT "id_customers" FROM "Customers" WHERE "Name" = 'Juan')),
  ('2023-10-26 00:00:00', 'Bank Transfer', 55, 55, 1, (SELECT "id_user" FROM "Users" WHERE "Name" = 'Yonaiker'), (SELECT "id_customers" FROM "Customers" WHERE "Name" = 'Ana'));



INSERT INTO "Details" ("id_product", "id_invoice") VALUES
  ((SELECT "id_product" FROM "Products" WHERE "Name" = 'Laptop'), (SELECT "id_invoice" FROM "Invoice" WHERE "Subtotal" = 1205)),
  ((SELECT "id_product" FROM "Products" WHERE "Name" = 'T-Shirt'), (SELECT "id_invoice" FROM "Invoice" WHERE "Subtotal" = 25)),
  ((SELECT "id_product" FROM "Products" WHERE "Name" = 'Novel'), (SELECT "id_invoice" FROM "Invoice" WHERE "Subtotal" = 25));

