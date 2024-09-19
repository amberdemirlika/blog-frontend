export function PostsNew() {
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