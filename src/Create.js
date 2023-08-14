import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author };

        setIsPending(true);

        fetch('http://localhost:8080/blogs', {
            method:'POST',
            headers: {"Content-type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);
            history.push('/');
        })

        history.go(-1)
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                type="text" 
                required
                value={title}
                onChange={(e) =>{setTitle(e.target.value)}}
                />
                <label>Blog body:</label>
                <textarea
                required
                value={body}
                onChange={(e)=>{setBody(e.target.value)}}
                ></textarea>
                <label>Blog author:</label>
                <input 
                type='text'
                value={author}
                required
                onChange={(e) => {setAuthor(e.target.value)}}
                />
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Adding blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;