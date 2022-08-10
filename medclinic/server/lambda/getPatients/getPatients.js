
module.exports.handler = async event => {

  
    const mysql = require('mysql')
    
       
    const db = mysql.createConnection({
        host: 'mysqlserver.cfe3iex6wkfl.us-east-1.rds.amazonaws.com',
        user: 'admin',
        password: 'arima1995',
        database: 'dbmedclinic'
    })
    
    const p = new Promise((resolve, reject) => {
        db.query("SELECT * FROM pacientes", function(err, results) {
          resolve(results);
          reject (err)
        })
    })

    const result = await p;


  return {
    body: JSON.stringify({result})
  };
};
