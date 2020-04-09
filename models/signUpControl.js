const crypto = require('crypto-random-string');

const con = require('../config/config')



const send = {
    send: function(userId, userEmail) {
        //console.log(userId)
        con.query('INSERT INTO auth (userId, token) VALUES (?, ?)',[userId, crypto({length: 10})], async (err, result) => {
            
            if(err) {
                throw err
            }
    
            
        })
        .then(res => {res.status(200).json(`${user.email} account created successfully`)})
            .catch((error) => {
                return res.status(500).json(error);
              });
    }
}



module.exports = send