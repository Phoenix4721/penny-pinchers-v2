DROP DATABASE IF EXISTS pp2_db;
CREATE DATABASE pp2_db;

USE pp2_db;
create table user (
    userId INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    socket VARCHAR(30),
    groceries INT DEFAULT 0,
    transportation INT DEFAULT 0,
    dining INT DEFAULT 0,
    shopping INT DEFAULT 0,
    groceriesBudget INT DEFAULT 200,
    transportationBudget INT DEFAULT 200,
    diningBudget INT DEFAULT 200,
    shoppingBudget INT DEFAULT 200,
    PRIMARY KEY (userId)
);