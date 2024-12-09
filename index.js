import express from 'express'
import bodyParser from 'body-parser';
import userRouter from './routes/usersRoute.js';
import mongoose from 'mongoose';
import galleryItemRouter from './routes/galleryItemRoute.js';


const app = express();

app.use(bodyParser.json());

//database connection string
const connectionString = "mongodb+srv://rohitha:123@cluster0.to2cf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//db conn library
mongoose.connect(connectionString).then(
    ()=>{
        console.log("Connected to the database")
    }
).catch(
    ()=>{
        console.log("Connection failed")
    }
)

app.use("/api/users",userRouter)
app.use("/api/gallery",galleryItemRouter)


app.listen(5000,(req,res)=>{
    console.log("Server is running on port 5000")
    }); 