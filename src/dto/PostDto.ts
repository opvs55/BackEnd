import { PostDB } from "../interface/Types";


export type GetPostOutputDTO = PostDB[]


export interface CreatePostInputDTO {
    mensagem: unknown
}
