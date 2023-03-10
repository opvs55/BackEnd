import express from "express"
import { PostBusiness } from "../business/PostBusiness"
import { PostController } from "../controller/PostController"
import { PostDataBase } from "../database/PostDataBase"
import { IdGenerator } from "../services/IdGenerator"



export const postRouter = express.Router()


const postController = new PostController(
    new PostBusiness(
        new PostDataBase(),
        new IdGenerator()
    )
)

postRouter.get("/", postController.getPost)
postRouter.post("/", postController.createPost)
