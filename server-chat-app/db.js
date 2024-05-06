const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("mydatabase.db");

// create chat database
const createChatTable = () => {
    let sql =
        "CREATE TABLE IF NOT EXISTS chats (id INTEGER PRIMARY KEY AUTOINCREMENT, sender TEXT, date TEXT, message TEXT, color TEXT)";
    db.run(sql, (err) => {
        if (err) {
            throw err;
        }
        console.log("chat table created");
    });
};

// insert chat in the table
const insertChat = async (details) => {
    const { sender, date, message, color } = details
    return await new Promise((resolve, reject) => {
        let sql = "INSERT INTO chats (sender, date, message, color) VALUES(?,?,?,?)";
        db.run(sql, [sender, date, message, color], (err) => {
            if (err) {
                throw(err)
            }
            resolve(true)
        })

    })
}

// get all chats
const getChats = async() =>{
    return await new Promise((resolve, reject)=>{
        let sql = "SELECT * from chats";
        db.all(sql, [], (err, rows)=>{
            if(err){
                throw err;
            }
            resolve(rows)
        })
    })
}

module.exports = {
    insertChat, getChats, createChatTable
}