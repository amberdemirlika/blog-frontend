export function PostsIndex(props) {
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