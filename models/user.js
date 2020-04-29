const con = require('../config/config')



const bcrypt = require('bcryptjs')

const create = {
    create: function(username, email, password) {
        return new Promise(function(resolve, reject) {
    con.query("SELECT COUNT (*) AS cnt FROM user WHERE username = ?" , 
        [username] , function(err , data){
    if(err){
        reject(err)
    }   
   else{
       if(data[0].cnt > 0){  
           resolve('user')
       }else {
        con.query("SELECT COUNT (*) AS cnt FROM user WHERE email = ?" , 
        [email] , function(err , data){
            if(data[0].cnt > 0){  
                resolve('email')
           }else {
                password = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
                
                con.query('INSERT INTO user (username, email, password) VALUES (?, ?, ?)', 
                [username, email, password], (err, data) => {
                    if (err) {
                        throw err
                    }
                    resolve('userCreated')
        
                }) 
            }
        })
       }
     }
   })
  })
 }
}

module.exports = create