import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";


export function PostsPage() {
  var posts = [
    {
      id : 1, 
      title: "First Blog post",
      image_url: "https://gregcartmell.com/wp-content/uploads/2018/02/claude-monet-plein-air-painting.jpg"

    },
    {
      id: 2,
      title: "Second Blog post",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
    },
    {
      id: 3,
      title: "Third blog post",
      image_url: "https://fs.artdevivre.com/storage/articles/contect-new/vermeer/vermeer-most-famous-painting.jpg"
    }

  ];
  return (
    <main>
      <PostsNew />
      <PostsIndex posts ={posts} />
    </main>
  )

}