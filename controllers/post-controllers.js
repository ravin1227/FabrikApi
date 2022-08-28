import mongoose from "mongoose";
import Post from "../model/Post.js";
import moment from "moment";
import fs from 'fs'

export const getAllPost = async (req, res, next) =>{

    await Post.find().then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log(err)
    })
    
}

export const postItem = async (req,res,next) => {
    const {name, title, object, } = req.body;


        const date = moment(new Date()).format("DD-MM-YYYY");

        const post = new Post({
            name:name,
            title:title,
            object:{
                data: fs.readFileSync("uploads/" + req.file.filename),
                contentType:"image/png",
            },
            date: date
        });
        try {
        await post.save();
        } catch (error) {
            console.log(error);
            res.status(401).json({error})
        }
    return res.status(200).json({post});
}

export const getById = async (req, res, next) => {
    const postId = req.params.id;
    Post.findById(postId).then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log(err)
    })
  
}
