const usernameInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const blogs = blogs.push(blog);

function createAndRenderBlog() {
  const blog = {
    username: usernameInput.value,
    title: titleInput.value,
    content: contentInput.value,
  };

  localStorage.getItem("blogs");
  const blogs = blogs.push(blog);
  localStorage.setItem("blogs");
}
