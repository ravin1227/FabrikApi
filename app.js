import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config'
import postRouter from './routes/post-routes';

const app = express();
app.use(express.json());
app.use(cors());


app.use("/api/post", postRouter);


const PORT = process.env.PORT || 3000;
const URI = process.env.MONGO_DB_URI

mongoose.connect(URI)
.then(()=>app.listen(PORT))
.then(()=>console.log("Connected to server at "+ PORT))
 .catch((erroe)=> console.log(erroe));