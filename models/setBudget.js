const con = require('../config/config');
const budget = {
    set: function(budget, val, id) {
    let data = [val, budget, id];
    let sql = 'UPDATE user SET ?? = ? WHERE userId = ?'
    console.log(sql, data)
     con.query(sql, data,(err, results) => {
      if(err) throw err;
      console.log(results)
    });
},
}
  module.exports = budget