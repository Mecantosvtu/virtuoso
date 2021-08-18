const {
    createPool
} = require('mysql');

const pool = createPool({
    host: "localhost", 
    user: "root",
    password: "",
    database: "register",
    connectionLimit: 10
})

pool.query('select * from userreg',(err, result, fields)=>{
    if (err){
        return console.log(err);
    }
    return console.log(result);
})