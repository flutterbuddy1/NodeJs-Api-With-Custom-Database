const express = require("express");
const router = express.Router();
const fs = require("fs");
const users = require("../db/users.json");
const uuid = require("uuid");
const dotenv = require("dotenv");

dotenv.config();

router.get("/",(req ,res)=>{
    res.header('Access-Control-Allow-Origin', process.env.ACCESS_SITE);
    res.send(users);
});

router.post("/",(req , res)=>{
    let data = {
        uid:uuid.v4(),...req.body
    }
    users.push(data);
    let newData = JSON.stringify(users);

    fs.writeFile("db/users.json",newData,err => {
        if(err){
            res.send(`Data Not Edited \n ${err}`);
        }else{
            res.send(users);
        }
    });
});

router.get("/:id",(req,res)=>{
    const { id } = req.params;
    const findedUser = users.find((user)=> user.uid === id);
    res.send(findedUser);
});


router.delete("/:id",(req,res)=>{
    const { id } = req.params;
    let newData = JSON.stringify(users.filter((user)=> user.uid !== id));
    fs.writeFile("db/users.json",newData,err => {
        if(err){
            res.send(`Data Not Edited \n ${err}`);
        }else{
            res.send(`User Deleted Successfully for this id ${id}`);
        }
    });
});


router.patch("/:id",(req,res)=>{
    const { id } = req.params;
    const {
        firstname,
        lastname,
        age,
    } = req.body;
    const user = users.find((user)=> user.uid === id);

    if(firstname){
        user.firstname = firstname
    }
    if(lastname){
        user.lastname = lastname
    }
    if(age){
        user.age = age
    }
    let newData = JSON.stringify(users);
    fs.writeFile("db/users.json",newData,err => {
        if(err){
            res.send(`Data Not Edited \n ${err}`);
        }else{
            res.send(user);
        }
    });

});

module.exports = router;
