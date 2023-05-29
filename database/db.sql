CREATE DATABASE db_nodeJS;

USE db_nodeJS;

-- users table
CREATE TABLE users(
id INT(11) NOT NULL  PRIMARY KEY,
username varchar(25) NOT NULL,
password varchar(50) NOT NULL,
fullname varchar(100) NOT NULL
);
ALTER TABLE users 
    MODIFY id INT(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT =2 ;


--  Links Table
CREATE TABLE links (
    id INT(11) NOT NULL,
    title VARCHAR(16) NOT NULL,
    url VARCHAR(60) NOT NULL,
    user_id INT(11) NOT NULL,
    description varchar(255) NOT NULL
    );

    ALTER TABLE links
    ADD PRIMARY KEY (id);

    ALTER TABLE links
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;