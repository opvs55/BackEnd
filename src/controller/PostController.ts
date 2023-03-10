import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness"
import { CreatePostInputDTO } from "../dto/PostDto"
import { PostDB } from "../interface/Types"


export class PostController{
    constructor(
        private postBusiness: PostBusiness
    ){}

    public getPost = async ( req:Request, res: Response) => {
        try {

            const output:PostDB[] = await this.postBusiness.getPost()

            res.status(200).send(output)

        } catch (error) {
            console.log(error)
            res.status(500).send("erro inesperado")
        }  
    }

    public createPost = async (req:Request, res: Response) => {
        try {

            const input: CreatePostInputDTO = {
                mensagem: req.body.mensagem
            }
        
            await this.postBusiness.createPost(input)

            res.status(201).send("sucesso").end
        } catch (error) {
                res.status(500).send("erro inesperado")
        }  
    }
}