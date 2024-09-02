import express from 'express' ;

const app = express() ;
const port = 3000 ;
app.get('/' , (req , res)=>{
    res.send('Server is ready') ;
}) ;

const Jokes = [
               
    { id: 1, title: "Why don't scientists trust atoms?", content: "Because they make up everything!" },
    { id: 2, title: "Why did the chicken join a band?", content: "Because it had the drumsticks!" },
    { id: 3, title: "What do you call fake spaghetti?", content: "An impasta!" }
            ] ; 

app.get('/api/jokes' , (req , res) =>{
    res.json(Jokes) ;
}) ;

app.listen(port , ()=>{
    console.log('Server is running') ;
}) ;
