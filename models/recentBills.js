const con = require('../config/config');

function addBills(type, amount, desc, id) { // this creates the data in db 
    con.query('INSERT INTO notes (billType, billAmount, billDescription, userId) VALUES (?, ?, ?, ?)', [type, amount, desc, id], (err, results) => {
        if (err) {console.log(err)
        } else {
            console.log('hiii')
            console.log(results)
        }
    })
}

function recentBills(id) { // this pulls recent bills 
    con.query('SELECT * FROM notes WHERE userId = ?', [id], (err, results) => {
        if (err) {console.log(err)
        } else {
            console.log(results)
        }
    })
}

module.exports = { addBills, recentBills } 