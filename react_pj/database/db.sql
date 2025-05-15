create database auditsystem;
use auditsystem;
CREATE TABLE audits (
    auditId INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    contractName VARCHAR(255) NOT NULL,
    userName VARCHAR(255) NOT NULL,
    created DATETIME NOT NULL,
    trackingId VARCHAR(255) NOT NULL
);