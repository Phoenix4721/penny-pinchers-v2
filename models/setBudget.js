const con = require('../config/config');
const budget = {
    set: function(budget, val, id) {
    let data = [val, budget, id];
    let sql = 'UPDATE user SET ?? = ? WHERE userId = ?'
    con.query(sql, data, (err, results) => {
      if (err) {console.log(err)
      } else  {
        con.query('SELECT groceriesBudget, diningBudget, transportationBudget, shoppingBudget FROM user WHERE userId = ?', [id], (err, r) => {
          if (err) {console.log(err)
          } else {
            con.query('UPDATE user SET allBudgets = ?+?+?+? WHERE userId = ?', [r[0].groceriesBudget, r[0].transportationBudget, r[0].diningBudget, r[0].shoppingBudget, id], (err, res) => {
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

  module.exports = budget