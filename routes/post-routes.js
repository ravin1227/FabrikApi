import express from 'express'
import { getAllPost, postItem, getById} from '../controllers/post-controllers.js'
// import upload from '../middleware/multer';
import upload from '../middleware/multer.js'

const postRouter = express.Router();


// get All post
postRouter.get("/", getAllPost)

// post post
postRouter.post("/add",upload.single('screenshot'),postItem)

// get by id
postRouter.get("/:id",getById)

export default postRouter;