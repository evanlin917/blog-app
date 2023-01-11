import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "Evan", id: 1 },
    { title: "Welcome to my blog!", body: "This is a blog where I write about the experiences of my days in college.", author: "Evan Lin", id: 2 },
    { title: "Blog writing tips", body: "Below are outlined some common tips on how to write blogs!", author: "Evanski", id: 3 },
    { title: "Hello Everyone! Nice to meet you!", body: "Hey everyone! Thanks for visiting this blog site, read more to get to know about me!", author: "Evanski Lin", id: 4 }
  ]);
  
  return ( 
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs:" />
    </div>
  );
}
 
export default Home;