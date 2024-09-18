function Header() {
  return (
    <header>
    <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
  </header>
  )
}


function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New Blog Post</h1>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Content: <input type="text" />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      {props.posts.map(post => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.summary}</p> {/* Summary of the post */}
          <img src={post.image_url} alt={post.title} />
          <button>Read more</button>
        </div>
      ))}
    </div>
  );
}
function Footer() {
  return (
    <footer>
      <p>Copyright 2022</p>
    </footer>
  )
}

function PostsPage() {
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



function App() {
  return (
    <div>
      <Header />
      <PostsPage />
      <Footer />
    </div>
  );
}

export default App;

