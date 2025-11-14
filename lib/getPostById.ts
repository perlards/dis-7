import getCollection, {POSTS_COLLECTION} from "@/db";
import {PostProps} from "@/types/PostProps";
import {ObjectId} from "bson";

export default async function getPostById(id: string): Promise<PostProps | null> {

    const postCollection = await getCollection(POSTS_COLLECTION);

    let objectId;

    try {
        objectId = new ObjectId(id);
    } catch {
        return null;
    }

    const data = await postCollection.findOne({ _id: objectId });

    if (!data) return null;

    return {
        id: data._id.toString(),
        title: data.title,
        content: data.content,
        upvotes: data.upvotes,
        downvotes: data.downvotes,
    };
}
