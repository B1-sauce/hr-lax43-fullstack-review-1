/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

DROP DATABASE IF EXISTS hrlax43students;

CREATE DATABASE hrlax43students;

USE hrlax43students;

CREATE TABLE students (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE images (
  id int NOT NULL AUTO_INCREMENT,
  imgurl varchar(250) NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO students (id, name) VALUES (1, "Bingyi");
INSERT INTO students (id, name) VALUES (2, "Chris");
INSERT INTO students (id, name) VALUES (3, "Darien");
INSERT INTO students (id, name) VALUES (4, "Michael");
INSERT INTO students (id, name) VALUES (5, "Nathaniel");
INSERT INTO students (id, name) VALUES (6, "Sue Ann");
INSERT INTO students (id, name) VALUES (7, "Nader");
INSERT INTO students (id, name) VALUES (8, "Travis");
INSERT INTO students (id, name) VALUES (9, "Tobias");
INSERT INTO students (id, name) VALUES (10, "Dennis");
INSERT INTO students (id, name) VALUES (11, "Raul");

INSERT INTO images (id, imgurl) VALUES (1, "https://ca.slack-edge.com/T2SV1LBC6-U01Q22W80PM-4a9b4f10e90f-512");
INSERT INTO images (id, imgurl) VALUES (2, "https://ca.slack-edge.com/T2SV1LBC6-U01Q1SABYCA-dc19954a7353-512");
INSERT INTO images (id, imgurl) VALUES (3, "https://ca.slack-edge.com/T2SV1LBC6-U01QEFBGUF3-1bf65cfb4669-512");
INSERT INTO images (id, imgurl) VALUES (4, "https://ca.slack-edge.com/T2SV1LBC6-U01PV3GJLTY-166182619cff-512");
INSERT INTO images (id, imgurl) VALUES (5, "https://ca.slack-edge.com/T2SV1LBC6-U01QEFDCXLH-690ad50dcb50-512");
INSERT INTO images (id, imgurl) VALUES (6, "https://ca.slack-edge.com/T2SV1LBC6-U01QRM77FKJ-0333eecad61a-512");
INSERT INTO images (id, imgurl) VALUES (7, "https://ca.slack-edge.com/T2SV1LBC6-U01PM3LH9LP-23abdb9c3a43-512");
INSERT INTO images (id, imgurl) VALUES (8, "https://ca.slack-edge.com/T2SV1LBC6-U01QRM74JDN-d80d9175ab02-512");
INSERT INTO images (id, imgurl) VALUES (9, "https://ca.slack-edge.com/T2SV1LBC6-U01Q81SUACU-37eed04c1ced-512");
INSERT INTO images (id, imgurl) VALUES (10, "https://ca.slack-edge.com/T2SV1LBC6-U01Q1SA90R0-ea0c91dc0248-512");
INSERT INTO images (id, imgurl) VALUES (11, "https://ca.slack-edge.com/T2SV1LBC6-U01Q1SAEKEE-8b80c53376cb-512");
