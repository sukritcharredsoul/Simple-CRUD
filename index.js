console.log("Hello ;")

const express = require('express') ;
const mongoose = require('mongoose') ;
const productRoute = require('./routes/product.routes'); // Adjust path as needed


// Import model from models folder ;


const app = express() ;

// middlewares ;
app.use(express.json()) ;
app.use(express.urlencoded({extended : false })) ;

app.get('/', (req, res) => {
    console.log("Hello");
    res.send("Welcome to the API");
});



app.use('/api/products',productRoute) ;


mongoose.connect("mongodb+srv://sukritcharredsoul:quadProject%4088@cluster1.jeyit.mongodb.net/Simple-CRUD?retryWrites=true&w=majority&appName=Cluster1").then(
    () => {
           console.log("Connected to DataBase");
           app.listen(3030, () => {
            console.log("Server is running on port number 3000 .") ;
        });
    }
).catch(() => {
     console.log("Connection Failed ") ;
})