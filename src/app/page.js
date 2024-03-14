
import ky from 'ky';
import { getData } from './utils/getData';
import PostComponent from './Post/page';

export default async function Home() {
  let data = await getData('1');
  console.log('🚀 ~ Home ~ data:');
  return (
    <div>
      <h2>TASK</h2>
     <PostComponent data={data} action={getData}/> 
      <div>
       
      </div>
    </div>
  );
}

/* 
Title
Next.js task

Make a page with next.js app router that retrieves a given post from https://jsonplaceholder.typicode.com/posts/{N} 
based on path parameter N. The page should have SSR
 but also work during client-side navigation, 
 preferably without an unnecessary round trip to the next.js server.
  Add Next/Previous post buttons at the bottom.
   Using react-query (aka tanstack query) and plugins for it is welcomed, as for data fetching library,
    anything goes but we use https://github.com/sindresorhus/ky. As usual, annotate everything with types.

import { useState } from "react";
import ky from "ky";


const Home = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 1;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const decrementPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const incrementPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <main>
      <div>
        <button onClick={decrementPage} disabled={currentPage === 1}>
          Prev
        </button>
        <div>
          <ul>
            {currentPosts.map(({ id, title }) => (
              <li key={id}>{title}</li>
            ))}
          </ul>
        </div>
        <button
          onClick={incrementPage}
          disabled={indexOfLastPost >= posts.length}
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default Home; */
