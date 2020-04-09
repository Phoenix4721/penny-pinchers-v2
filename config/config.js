const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'newPassport'
})

con.connect(err => {
    if (err) {
        throw err
    }
    console.log('connected!')
})

module.exports = con