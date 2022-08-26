import mongoose from "mongoose";
import Post from "../model/Post.js";
import moment from "moment";
import fs from 'fs'

export const getAllPost = async (req, res, next) =>{
    let post;

    try {
        post = await Post.find().populate("name");

    } catch (error) {
        return console.log(error);
    }

    if(!post){
        return res.status(404).json({message : "No post found"});
    }

    return res.status(200).json({post});
    
}

export const postItem = async (req,res,next) => {
    const {name, title, object, } = req.body;


        const date = moment(new Date()).format("DD-MM-YYYY");

        const post = new Post({
            name:name,
            title:title,
            // screenshot: {
            //     data: fs.readFileSync("uploads/" + req.file.filename),
            //     contentType:"image/png"
            // },
            object:{
                data: fs.readFileSync("uploads/" + req.file.filename),
                contentType:"image/png",
                contentType:"model/gltf-binary"
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

//     if(req.files){
//         console.log(req.files)
//         console.log("file uploaded")
//     }
}

export const getById = async (req, res, next) => {
    const postId = req.params.id;
    let post;

    try {
        post = await Post.findById(postId);
    } catch (error) {
        return console.log(error);
    }

    if(!post){
        return res.status(500).json({message: "Post not found"});
    }
    return res.status(200).json({post});
}
