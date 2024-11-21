import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const connection = mysql.createPool({
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.NAME_DB,
  port: parseInt(process.env.PORT_DB || '3306')
  // host:'localhost',
  // user:'root123',
  // password:'12345',
  // database:'devices',
  // port:parseInt('3301'),
});


export default connection;
