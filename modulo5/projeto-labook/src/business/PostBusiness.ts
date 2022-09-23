import { PostDatabase } from "../database/PostDatabase"
import { ICreatePostInputDTO, Post } from "../models/Post"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

    public createPost = async (input: ICreatePostInputDTO) => {
        const token = input.token
        const content = input.content

        const payload = this.authenticator.getTokenPayload(token)
        if (!payload) {
            throw new Error("Token inválido ou faltando.")
        }

        if(!content || content.length < 1) {
            throw new Error("Contéudo do post inválido.")
        }

        const id = this.idGenerator.generate()

        const post = new Post(
            id,
            content,
            payload.id,
        )

        await this.postDatabase.createPost(post)

        const response = {
            message: "Post criado com sucesso"
        }

        return response
    }
}