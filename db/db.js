const mysql=require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'password',
    database:'blog'
});
connection.connect((err)=>{
    if(err)throw err;
    console.log('connected to mysql');
    
}
);
module.exports=connection;