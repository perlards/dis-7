"use server";
import getCollection, {POSTS_COLLECTION} from "@/db"
import { PostProps } from "@/types/PostProps"

export default async function createNewPost(
    title: string,
    content: string,
): Promise<PostProps> {
    console.log("Creating new post...");
    const p={
        title:title,
        content:content,
        upvotes:0,
        downvotes:0,
    };
    const postCollection = await getCollection(POSTS_COLLECTION);
    const res = await postCollection.insertOne({...p});

    if (!res.acknowledged) {
        throw new Error("DB insert failed")
    }
    return {...p, id: res.insertedId.toHexString()};
}
