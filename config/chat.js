const con = require('../config/config')

function leaveSocket() {
    con.query('SELECT * FROM user WHERE username = ?', ['username'], (err, result) => {
        if (err) {console.log(err)
        } else {
            console.log(result)
        }
    })
}

function getSocket() {
    con.query('SELECT * FROM user WHERE username = ?', ['username'], (err, result) => {
        if (err) {console.log(err)
        } else {
            console.log(result)
        }
    })
}

module.exports = { leaveSocket, getSocket } 