import { PostDataBase } from "../database/PostDataBase"
import { CreatePostInputDTO, GetPostOutputDTO } from "../dto/PostDto"
import { BadRequestError } from "../Errors/BadRequestError"
import { PostDB } from "../interface/Types"
import { Post } from "../model/Post"
import { IdGenerator } from "../services/IdGenerator"


export class PostBusiness{
    constructor(
        private postDataBase: PostDataBase,
        private idGenerator: IdGenerator,
    ){}

    public getPost = async (): Promise<GetPostOutputDTO>   =>  {


        const postDB: PostDB[] = 
            await this.postDataBase
                .getPost()

        
        const post = postDB.map(
            (postInDB) => {
                const post = new Post(
                    postInDB.id,
                    postInDB.mensagem,
                )

            return post.ToDBModel()
            }
        )
        return post
    }

    public createPost = async (input: CreatePostInputDTO): Promise<void> => {
        const {mensagem} = input

        if(typeof mensagem !== "string"){
            throw new BadRequestError("Context deve ser string")
        }

        

        const id = this.idGenerator.generate()

        const post = new Post(
            id,
            mensagem
        )

        const postDB = post.ToDBModel()
        await this.postDataBase.insert(postDB)
    }
    
}