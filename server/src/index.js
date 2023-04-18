const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
require('dotenv').config();



const app=express()
app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
    res.send("Api running well...")
})

mongoose.connect(process.env.URL).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`listening to http://localhost:${process.env.PORT}`);
    })
})