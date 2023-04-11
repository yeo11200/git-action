import mysql from 'mysql2/promise';

const dbConfig = mysql.createPool({
  host: process.env.DATABASE_HOST,
  port: 3306,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});

const getConn = async() => {
    return await dbConfig.getConnection();
};

export default getConn;
