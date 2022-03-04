const PostSummaryItem = (post) => {
  return(`
  <li class="list-group-item">
  <div class="row">
    <div class="col-10">
      <p class="text-muted">
        ${post.topic}
      </p>
      <div class="fw-bold">
        ${post.userName}
      <i class="fa fa-check-circle"></i>
        - ${post.time}
      </div>
      <p class="fw-bold">
        ${post.title}
      </p>
    </div>
    <div class="col-2">
      <img class="img-fluid rounded-3" src=${post.image}>
    </div>
  </div>
</li>

  `);
}

export default PostSummaryItem;