// blog.js

// Get the new blog post form
const newBlogPostForm = document.getElementById('new-blog-post-form');

// Add an event listener to the form submission
newBlogPostForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the form data
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  // Create a new blog post object
  const blogPost = {
    title: title,
    content: content
  };

  // Send the blog post data to the server
  fetch('/api/blog-posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(blogPost)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Redirect to the blog list page
    window.location.href = '/blog';
  })
  .catch(error => {
    console.error(error);
  });
});

// Get the blog post editor
const blogPostEditor = document.getElementById('blog-post-editor');

// Add an event listener to the save button
blogPostEditor.addEventListener('click', (e) => {
  e.preventDefault();

  // Get the blog post ID
  const blogPostId = blogPostEditor.dataset.blogPostId;

  // Get the updated blog post content
  const content = document.getElementById('editor').value;

  // Send the updated blog post data to the server
  fetch(`/api/blog-posts/${blogPostId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ content: content })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Redirect to the blog list page
    window.location.href = '/blog';
  })
  .catch(error => {
    console.error(error);
  });
});