import React from 'react'

const getAllPosts = async (id) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if(!result.ok){
    throw new Error('There was an error fetching posts');
  }
  return result.json();
}

export default getAllPosts