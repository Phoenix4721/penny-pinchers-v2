const con = require('./config')

module.exports = {
    getLeaders: () => {
        return new Promise(function (fulfill, reject) {
            con.query('SELECT username, allBudgets, allBills FROM user', (err, results) => {
                if (err) {reject(err)
                } else {
                    // console.log(results)
                    fulfill(results)
                }
            })
        })
    }
}

// SELECT username, allBudgets, allBills FROM user