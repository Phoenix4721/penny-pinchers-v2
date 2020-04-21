const con = require('./config')

module.exports = {
    addSocket: (data) => {
        con.query('SELECT userId, username FROM user WHERE username = ?',[data.username], (err, results) => {
            if (err) {console.log(err)
            } else {
                console.log(results[0].userId)
                con.query(`UPDATE user SET socket = ? WHERE userId = ?`,[data.socket, results[0].userId], (err, result) => {
                    if(err) {console.log(err)
                    } else {
                        console.log(result)
                    }
                })
            }
        })
    },
    delSocket: (id) => {
        con.query('SELECT userId, socket FROM user WHERE socket = ?', [id], (err, results) => {
            if (err) {console.log(err)
            } else {
                // console.log(results)
                if (results[0]){
                    con.query('UPDATE user SET socket = null WHERE userId = ?', [results[0].userId], (err, result) => {
                        if (err) {console.log(err)
                        } else {
                            console.log(result)
                        }
                    })
                }
                
            }
        })
    },
    listFriends: () => {
        return new Promise(function (fulfill, reject) {
            con.query('SELECT userId, username, socket FROM user', (err, results) => {
                if (err) reject(err)
                else {
                    fulfill(results)
                }
            })
        })   
    }, 
    findSocket: (user) => {
        return new Promise(function (fulfill, reject) {
            con.query('SELECT userId, username, socket FROM user WHERE username = ?', [user], (err, results) => {
                if (err) reject(err)
                else {
                    // console.log(results)
                    fulfill(results)
                }
            })
        })
    }
}

