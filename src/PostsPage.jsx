import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
// import axios from "axios";

export function PostsPage() {
  var posts= [];

  const getPostData = () => {
    console.log('hello');
  }
  
  return (
    <main>
      <PostsNew />
      <PostsIndex posts ={posts} />
      <button onClick= {getPostData}>get the data button</button>
    </main>
  )

}