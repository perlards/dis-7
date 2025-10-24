import Image from "next/image";
import PostPreview from "@/app/components/PostPreview";

export default function Home() {
  return (

          <div>

              <PostPreview
                  post={
                  {
                      id: "id",
                      title: "demo",
                      content: "bla h blah blah",
                      upvotes: 5,
                      downvotes: 3
                  }
              }
              />
              <h1> This is the home page </h1>
          </div>
  );
}
