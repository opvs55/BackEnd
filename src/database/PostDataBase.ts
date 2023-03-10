import { PostDB } from "../interface/Types";
import { BaseDatabase } from "./BaseDataBase";


export class PostDataBase extends BaseDatabase{
    public static TABLE_POST = "post"

    public getPost= async () => {
        const result = await BaseDatabase
            .connection(PostDataBase.TABLE_POST)
            .select('*')
        return result
    }

    public insert = async (postDB : PostDB): Promise<void>  => {

        await BaseDatabase
        .connection(PostDataBase.TABLE_POST)
        .insert(postDB)
    }

}