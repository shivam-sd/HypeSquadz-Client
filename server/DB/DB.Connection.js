const mongoose = require("mongoose");


const DBCONNECTION = () => {
    mongoose.connect(process.env.DB_URI).then(() => {
        console.log("Database Connected Successfully");
    }).catch((er) => {
        console.log("Error DB Connection");
    });
};


module.exports = DBCONNECTION;