const con = require('../config/config');
const bill = {
    set: function(bill, val, id) {
    let data = [val, val, bill, id];
    let sql = 'UPDATE user SET ?? = ?? + ? WHERE userId = ?'
    console.log(sql, data)
     con.query(sql, data,(err, results) => {
      if(err) throw err;
      console.log(results)
    });
},
}
  module.exports = bill