import { Post } from "../models/Post"
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
}