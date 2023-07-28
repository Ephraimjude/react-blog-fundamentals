import BlogList from './blogList';
import useFetch from './useFetch';


const Home = () => {
    const { data:blogs, isPending, error} = useFetch('http://localhost:8080/blogs');
    
    return ( 
        <div key = {blogs} className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div>}
            { blogs && <BlogList blogs={blogs}/>}
        </div>
     );
}
 
export default Home;