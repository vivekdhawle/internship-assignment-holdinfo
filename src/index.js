import dotenv from "dotenv"
import connectDb from "./db/index.js"
import app from "./app.js"
import { getData, setData } from "./controllers/data.controller.js"
dotenv.config({
    path:"./env"
})

connectDb().then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log("listening")
    })
}).catch((error)=>{
    console.log(error)
})



