import { PostDB } from "../interface/Types";



export class Post{
    constructor(
        public id:string,
        public mensagem: string
    ){}


    public getId(): string{
        return this.id
    }

    public setId(value: string): void{
        this.id = value
    }

    public getMensagem(): string {
        return this.mensagem
    }

    public setMensagem(value: string): void {
        this.mensagem = value
    }


    public ToDBModel():PostDB{
        return{
            id:this.id,
            mensagem:this.mensagem
        }
    }
}