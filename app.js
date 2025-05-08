const express=require('express');
const app=express();

app.listen(3000,'localhost');
console.log("Listening...");

app.get('/',(req,res)=>
{
    res.sendFile(`${__dirname}/sites/home.html`);
});

app.get('/about',(req,res)=>
{
    res.sendFile(`${__dirname}/sites/about.html`);

});

app.use((req,res)=>
{
    res.status(404);
    res.send("404");
});