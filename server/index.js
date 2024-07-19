const express = require('express')
const pg = require('pg');
const app = express();
app.use(express.json());
const data = require('./data').data;

app.listen(4000, ()=>{
    console.log("Server is listening on port 4000")
})

// get all recipes
app.get('/api/items', (req, res) => {
    const itemList = data.map((v) => v.name) 
    return res.status(200).send(itemList)
})

// get selected recipes
app.get('/api/items/:item', (req, res) => {
    const {item} = req.params
    console.log(item); 
    const liked_item = data.filter((d) => d.name === item) 
    console.log(liked_item)
    if(liked_item.length){
        return res.status(201).send(liked_item)
    }
    return res.sendStatus(404)   
})

// add an item to data list
app.post('/api/items', (req, res) => {
    const { body } = req;
    if(req.body){
        
        console.log(body); 
        const newItem = { id: data[data.length - 1].id + 1, ...body };
        data.push(newItem);
        return res.status(201).send(newItem);
    }
    return res.status(404).send( {msg: "Data cannot be added."});
})

app.get('/', (req, res) => {
    res.redirect('/api/items');
})




