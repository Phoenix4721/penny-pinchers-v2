const con = require('../config/config');

const bill = {
  set: function(name, amount, id) {
    let data = [amount, amount, name, id]
    let sql = 'UPDATE user SET ?? = ?? + ? WHERE userID = ?'
      con.query(sql, data, (err, results) => {
        if (err) {console.log(err)
        } else  {
          con.query('SELECT groceries, dining, transportation, shopping FROM user WHERE userId = ?', [id], (err, r) => {
            if (err) {console.log(err)
            } else {
              con.query('UPDATE user SET allBills = ?+?+?+? WHERE userId = ?', [r[0].groceries, r[0].transportation, r[0].dining, r[0].shopping, id], (err, res) => {
                if (err) {console.log(err)
                } else {
                  console.log(res)
                }
              })
            }
          })
        }
      })
  }
}

 module.exports = bill