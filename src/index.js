const {Sequelize} = require("sequelize");
const dotenv = require("dotenv");
const {User} = require("./models/user_model");
const express = require("express");
const bodyParser = require("body-parser");

dotenv.config();

const sequelize = new Sequelize(process.env.MYSQL_URL);

(async function() {
    try{
        await sequelize.authenticate();
        console.log("connection established successfully");
    } catch(error) {
        console.log(error);
    }
})();

const app = express();

app.listen(process.env.PORT, function() {
    console.log("listening at port", process.env.PORT);
})

app.use(bodyParser.urlencoded({extended: false}));

app.post("/",async function(req, res) {
    const data = req.body;
    await User.sync();
    await User.create({firstName: data.firstname, lastName: data.lastname});
    console.log(data);
    console.log("inserted successfully");
    res.end("inserted" + JSON.stringify(data));
}) 
