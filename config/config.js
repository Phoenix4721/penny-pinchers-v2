const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root521',
    database: 'pp2_db'
})

con.connect(err => {
    if (err) {
        throw err
    }
    console.log('connected!')
})

module.exports = con