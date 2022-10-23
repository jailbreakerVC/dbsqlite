//DEPENDENCIES
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
//reading the file
const dataSql = fs.readFileSync('createDb.sql').toString();
console.log("file read")
//connecting database
// let db= new sqlite3.Database('testDB',sqlite3.OPEN_CREATE, (err)=>{
//     if (err) {
//      //    console.log(err.message);
//         console.error("db_create:Err",{err})
//     }
//     console.log("Database suceesfully connected");
// });
let db= new sqlite3.Database('test5.db', (err)=>{
     if (err) {
         console.log(err.message);
     }
     else
       console.log("Database suceesfully connected");
 });
//after read
//console.log('after read')
const dataArr=dataSql.toString().split(`;`)
//const dataSql = fs.readFileSync('createDb.sql').toString();

db.serialize(()=>{

     console.log("serialising...")
     
    db.run('PRAGMA foreign_keys=ON;');
    dataArr.forEach((query)=>{
        if (query) {
          //query=query.trim();
           query=query.replace(/\r?\n|\r/g, " ");
           console.log({query})
            query+=`;`;
            db.run(query, (err)=>{
                if (err) {
                    // onsole.log("in serialising")c
                    //console.log(err.message);
                    console.error("serialize:Err",{err})
                }
            });
        }
    });
    console.log("not serialising error")
//     db.run('COMMIT;');
     //   db.commit();
});
// sample query
// Note for bhavya, use this way to query anything from the data
//also add a test row
//db.run("INSERT INTO mall (id,time_in) VALUES(1,1400);");
//closing connection
db.close((err)=>{
    if (err) {
        console.error(err.message);
    }
    console.log('Database Connection Closed');
});


