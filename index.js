const express = require('express');
const bodyParser = require('body-parser');
const usersRoutes = require("./routes/users.js");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use("/users",usersRoutes);
app.get("/",(req , res)=> res.send("<h1>❤️ Welcome To NodeJs Simple Api. Developed By @codeking5</h1><br>Please Read The README.md File."));

app.listen(PORT,()=>{
    console.log(`Server running on Port: http://localhost:${PORT}`);
})