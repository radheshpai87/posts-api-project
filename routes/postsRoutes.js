const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const filePath = path.join(__dirname, "./data/posts.json");

function readJSON(filePath){
    try{
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    }catch(err){
        console.error(`Error reading the JSON file: ${err}`);
        return [];
    }
}

function writeJSON(filePath, data){
    try{
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        return true;
    }catch(err){
        console.log(`Error writing to te JSON file: ${err}`);
        return false;
    }
}

app.get("/", (req, res) => {
    const data = readJSON(filePath);
    return res.json(data);    
});

app.post("/", (req, res) => {
    const {content, author, tags} = req.body;
    if(!content || !author){
        res.status(400).json({error: "content and author are required fields!"});
    }else if(content.length < 1 && content.length > 280){
        res.status(400).json({error: "Content length should be less than 280 characters."})
    }else if(Array.isArray(tags) && tags.length > 5){
        res.status(400).json({error: "Tags should be an array less than 5 length"});
    }
    const posts = readJSON(filePath);
    const data = {
        postsID: Date.now().toString(),
        content,
        author,
        tags,
        createdAt: new Date().toISOString(),
        likes: 0,
        status: "published",
    }
    posts.push(data);
    writeJSON(filePath, posts);
    res.status(201).json({Success: "Posts added!", ...data});
})

module.exports = app;