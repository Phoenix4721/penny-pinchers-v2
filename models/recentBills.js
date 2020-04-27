const con = require('../config/config');

function addBills(type, amount, desc, id, date) { // this creates the data in db 
    con.query('INSERT INTO notes (billType, billAmount, billDescription, userId, date) VALUES (?, ?, ?, ?, ?)', [type, amount, desc, id, date], (err, results) => {
        if (err) {console.log(err)
        } else {
            
        }
    })
}

function recentBills(id) { // this pulls recent bills 
    return new Promise(function(resolve, reject) {
    con.query('SELECT * FROM notes WHERE userId = ? ORDER BY fulldate DESC LIMIT 10', [id], (err, results) => {
        if (err) {
            reject(err)
        } else {
            resolve(results)
        }
    })
})
}

module.exports = { addBills, recentBills } 