import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
    const[title, setTitle] = useState("");
    const[body, setBody] = useState("");
    const[author, setAuthor] = useState("Evan");
    const[isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author }

        setIsPending(true);
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("New Blog Added!");
            setIsPending(false);
            history.push('/');
        })

        
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text"
                    placeholder="Enter your blog's title"
                    required
                    value={ title }
                    onChange={(e) => setTitle(e.target.value)} 
                />
                <label>Blog Contents:</label>
                <textarea
                    placeholder="Enter your blog's contents"
                    required
                    value={ body }
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author:</label>
                <select
                    value={ author }
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Evan">Evan</option>
                    <option value="Evan Lin">Evan Lin</option>
                    <option value="Evanski">Evanski</option>
                    <option value="Evanski Lin">Evanski Lin</option>
                </select>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled>Adding Blog...</button> }
            </form>
        </div>
     );
}
 
export default Create;