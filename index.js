import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config'
import postRouter from './routes/post-routes.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/post", postRouter);

const MONGO_DB_URI = "mongodb+srv://admin:CZDG5IAQ3VDydMRp@cluster0.qpbs7qx.mongodb.net/Fabrik?retryWrites=true&w=majority"
const PORT = process.env.PORT || 3000;
const URI = MONGO_DB_URI

mongoose.connect(URI)
.then(()=>app.listen(PORT))
.then(()=>console.log("Connected to server at "+ PORT))
 .catch((erroe)=> console.log(erroe));