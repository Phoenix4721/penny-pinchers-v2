const con = require('../config/config');

function addBills(type, amount, desc, id) { // this creates the data in db 
    con.query('UPDATE notes SET billType = ?, billAmount = ?, billDescription = ? WHERE userId = ?', [type, amount, desc, id], (err, results) => {
        if (err) {console.log(err)
        } else {
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