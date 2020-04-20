const con = require('../config/config');

const set = {
    set: function(groceriesBudget, transportationBudget, diningBudget, shoppingBudget) {
    let data = [groceriesBudget, transportationBudget, diningBudget, shoppingBudget];
    let sql = 'update user set groceriesBudget = ?, transportationBudget = ?, diningBudget = ?, shoppingBudget = ? WHERE userId = 1'
     con.query(sql, data,(err, results) => {
      if(err) throw err;
      console.log(results)
    });
},
}


  module.exports = set