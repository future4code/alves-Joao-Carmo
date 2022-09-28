import { IGetAllPostsDBDTO, Post, ILikeDB } from "../models/Post"
import { BaseDatabase } from "./BaseDatabase"
import { IPostDB } from "../models/Post"

export class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    public createPost = async (post: Post) => {
        const postDb: IPostDB = {
            id: post.getId(),
            content: post.getContent(),
            user_id: post.getUserId(),
        }

        await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .insert(postDb)
    }

    public getAllPosts = async (input: IGetAllPostsDBDTO) => {
        const limit = input.limit
        const offset = input.offset

        const postsDb: IPostDB[] = await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .select()
            .limit(limit)
            .offset(offset)

        return postsDb
    }

    public getLikes = async (post_id: string) => {
        const likesDb: ILikeDB[] = await BaseDatabase
            .connection(PostDatabase.TABLE_LIKES)
            .select()
            .where({ post_id })

        return likesDb
    }
}