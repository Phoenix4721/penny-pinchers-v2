const con = require('../config/config');

const bill = {
    set: function(groceries, transportation, dining, shopping) {
    let data = [groceries, transportation, dining, shopping];
    let sql = 'update user set groceries = groceries + ?, transportation = transportation + ?, dining = dining + ?, shopping = shopping + ? WHERE userId = 1'
     con.query(sql, data,(err, results) => {
      if(err) throw err;
      console.log(results)
    });
},
}


  module.exports = bill