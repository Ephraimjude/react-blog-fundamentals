import BlogList from './blogList';
import useFetch from './useFetch';
import { Link } from 'react-router-dom';


const Home = () => {
    const { data:blogs, isPending, error} = useFetch('http://localhost:8080/blogs');
    
    return (    
        <div className="home">
    <p className="intro">All the Blogs</p>
    {error && (
        <div className="error-message">
            {error}
        </div>
    )}
    {isPending && <div>Loading...</div>}
    {blogs && blogs.length === 0 && (
        <div className="no_blog">
            <p>No blogs currently available.</p>
            <p>Create a new blog!</p>
            <button type="button">
                <Link to="/create" className="create-link">Create Blog</Link>
            </button>
        </div>
    )}
    {blogs && <BlogList blogs={blogs} />}
</div>

     );
}
 
export default Home;