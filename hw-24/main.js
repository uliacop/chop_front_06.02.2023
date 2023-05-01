class PostService {
  static async getPost(postId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    if (!response.ok) {
      throw new Error('Post not found. Enter the correct  id');
    }
    return response.json();
  }
  static async getComments(postId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    if (!response.ok) {
      throw new Error('Comments not found. Enter the correct  id');
    }
    return response.json();
  }
}
class PostRenderer {
  constructor(postContainer) {
    this.postContainer = postContainer;
  }
  async renderPost(post) {
    const postHtml = `
      <div class="card mb-4">
        <div class="card-header">
          <h5 class="card-title">${post.title}</h5>
        </div>
        <div class="card-body">
          <p class="card-text">${post.body}</p>
          <button type="button" class="btn btn-secondary commentsBtn">View Comments</button>
  </div>
      </div>
    `;
    this.postContainer.innerHTML = postHtml;
    const commentsBtn = this.postContainer.querySelector('.commentsBtn');
    const handleClick = async () => {
      try {
        const comments = await PostService.getComments(post.id);
        const commentsHtml = comments.map(comment => `
          <div class="card mb-4">
            <div class="card-header">
              <h6 class="card-subtitle mb-2 text-muted">${comment.name}</h6>
              <h5 class="card-title">${comment.email}</h5>
            </div>
            <div class="card-body">
              <p class="card-text">${comment.body}</p>
            </div>
          </div>
        `).join('');
        this.postContainer.insertAdjacentHTML('beforeend', commentsHtml);
        commentsBtn.removeEventListener('click', handleClick);
      } catch (error) {
        console.error(error);
     }
    };
    commentsBtn.addEventListener('click', handleClick);

  }
}
const postForm = document.querySelector('#postForm');
const postIdInput = document.querySelector('#postIdInput');
const postContainer = document.querySelector('#postContainer');
postForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!postForm.checkValidity()) {
    postForm.classList.add('was-validated');
    return;
  }
  const postId = postIdInput.value;
  if (postId < 1 || postId > 100) {
    alert('Post not found. Enter the correct  id');
    return;
  }
  try {
    const post = await PostService.getPost(postId);
    const postRenderer = new PostRenderer(postContainer);
    await postRenderer.renderPost(post);
  } catch (error) {
    console.error(error);
    alert('Post not found. Enter the correct  id');
  }
});
















