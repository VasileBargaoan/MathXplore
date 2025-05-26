const express=require('express');
const app=express();

app.listen(3000,'localhost');
console.log("Listening...");

app.use(express.static('public'));

app.get('/',(req,res)=>
{
    res.sendFile(`${__dirname}/views/home.html`);
});

app.get('/about',(req,res)=>
{
    res.sendFile(`${__dirname}/views/about.html`);

});

app.use((req,res)=>
{
    res.status(404);
    res.send("404");
});