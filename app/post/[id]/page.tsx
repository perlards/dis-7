import getPostById from "@/lib/getPostById";
import {redirect} from "next/navigation";
import FullPost from "@/app/components/FullPost";

export default async function fullPostPage({
   params,
}:{
    params:Promise<{id: string}>}){
    const{id} = await params;
    let post = null;

    try{
        post = await getPostById(id);

    }catch(err){
        console.log("this error occured: ", err);
        redirect("/");
    }
    if(!post){
        redirect("/");
    }
    return <FullPost post={post}/>;
}