const express = require ('express');
const cors =require('cors')

const app =express();
const port =process.env.PORT || 5000;

app.use (cors());

const hotels =require('./data/hotel.json')
const destinations =require('./data/destination.json')

app.get('/' , (req, res)=>{
    res.send('hey tonu ,travel guru server is running')
});

app.get('/hotels' , (req,res)=>{
    res.send(hotels)
})

app.get('/destinations',(req,res)=>{
    res.send(destinations)
})

app.get('/destinations/:id', (req, res)=>{
    const id= req.params.id;
    const destination=destinations.find(dt=>dt.id ==id)
    res.send(destination)
})

app.get('/hotels/:id',(req, res)=>{
    const id =req.params.id;
    const hotel = hotels.find(ht =>ht.id == id)
    res.send(hotel)
})
app.listen(port, ()=>{
    console.log(`Travel guru running on port , ${port}`);
})