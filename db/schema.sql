-- Create the database  and specified it for use.
CREATE DATABASE sonrise_db;
USE sonrise_db;

-- Create the mentor table.
CREATE TABLE mentor
(
id int AUTO_INCREMENT NOT NULL,
firstName varchar(255) NOT NULL,
--lastName varchar(255) NOT NULL,
email varchar(255) NOT NULL,
--birthday DATE NOT NULL,
zipcode int(5) NOT NULL,
adviseOne varchar(255) NOT NULL,
adviseTwo varchar(255),
bio text,
PRIMARY KEY (id)
);

CREATE TABLE mentee
(
id int AUTO_INCREMENT NOT NULL,
firstName varchar(255) NOT NULL,
--lastName varchar(255) NOT NULL,
email varchar(255) NOT NULL,
--birthday DATE NOT NULL,
zipcode int(5) NOT NULL,
needOne varchar(255) NOT NULL,
needTwo varchar(255),
bio text,
PRIMARY KEY (id)
);




