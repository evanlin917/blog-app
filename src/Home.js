import {useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new blog", body: "Hello there!", author: "Evan", id: 1 },
    { title: "Welcome to my blog!", body: "This is a blog where I write about the experiences of my days in college.", author: "Evan Lin", id: 2 },
    { title: "Life at Princeton", body: "In general, life at Princeton is pretty hard.", author: "Evanski", id: 3 },
    { title: "Hello Everyone! Nice to meet you!", body: "Hey everyone! Thanks for visiting this blog site, read more to get to know about me!", author: "Evanski Lin", id: 4 }
  ]);

  const [name, setName] = useState("Evan");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }
  
  useEffect(() => {
    console.log("Use effect ran");
    console.log(blogs);
    console.log(name);
  }, []);

  return ( 
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs:" handleDelete={handleDelete} />
      <BlogList blogs={blogs.filter((blog) => blog.author === "Evan")} title="Evan's Blogs:" handleDelete={handleDelete} />
      <button onClick={() => setName("Evanski")}>Change Name</button>
      <p>{ name }</p>
    </div>
  );
}
 
export default Home;