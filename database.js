//DEPENDENCIES
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
//reading the file
const dataSql = fs.readFileSync('createDb.sql').toString();
console.log("file read")
//connecting database

let db= new sqlite3.Database('test5.db', (err)=>{
     if (err) {
         console.log(err.message);
     }
     else
       console.log("Database suceesfully connected");
 });
//after read

const dataArr=dataSql.toString().split(`;`)


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

});
// sample query
db.run("insert into mall values(69,420,1100,1200,20,20,2022-10-10,1,'delhi');");

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


