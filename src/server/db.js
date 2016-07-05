import mysql from "mysql"

export default var pool = mysql.createPool({
	connectionLimit : 1,
  host     : '123.57.10.24',
  user     : 'root',
  password : '123456',
  database : 'vnavigate'
});
pool.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('数据库连接成功');
});