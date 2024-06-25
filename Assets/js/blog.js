document.addEventListener("DOMContentLoaded", function () {
  const postsContainer = document.getElementById("posts");
  const posts = JSON.parse(localStorage.getItem("posts")) || [];

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.className = "post";

    const titleElement = document.createElement("h2");
    titleElement.innerText = post.title;
    postElement.appendChild(titleElement);

    const contentElement = document.createElement("p");
    contentElement.innerText = post.content;
    postElement.appendChild(contentElement);

    const authorElement = document.createElement("p");
    authorElement.innerText = `by ${post.username}`;
    postElement.appendChild(authorElement);

    postsContainer.appendChild(postElement);
  });

  document.getElementById("toggleMode").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });

  document.getElementById("backButton").addEventListener("click", function () {
    window.location.href = "index.html";
  });
});
