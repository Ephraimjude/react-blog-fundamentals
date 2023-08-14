import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
    return (
        <div className="blog-list" >
            <h2>{ title }</h2>
                { /* map through blogs array and display each blog */ }
                {blogs.map((blog) => (
                    // pass in props for title/body
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`} >
                            <h2>{blog.title}</h2>
                            <p>By {blog.author}</p>
                        </Link>

                    </div>
                ))}
            </div>
    );
}

export default BlogList;