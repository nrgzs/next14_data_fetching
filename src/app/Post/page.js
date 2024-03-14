'use client';

import { useState } from 'react';

export default function PostComponent({ data, action }) {
  const [post, setPost] = useState(data);

  async function updatePost() {
    const newPost = await action('2');
    setPost(newPost);
  }

  return (
    <div>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
      <button>prev</button>
      <button
        onClick={() => {
          return updatePost();
        }}
      >
        next
      </button>
    </div>
  );
}
