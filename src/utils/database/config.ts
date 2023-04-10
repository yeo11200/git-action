import mysql from 'mysql2/promise';

const dbConfig = mysql.createPool({
  host: 'database-1.cnsrjenfjqhb.us-east-1.rds.amazonaws.com',
  port: 3306,
  user: 'admin',
  password: 'tlswlstjq1!',
  database: 'User'
});

const getConn = async() => {
    return await dbConfig.getConnection();
};

export default getConn;