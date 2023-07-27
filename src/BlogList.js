const BlogList = ({blogs, title}) => {

    return (
        <div className="blog-list">
            <h1>{title}</h1>
                {/* map through blogs array and display each blog */}
                {blogs.map((blog) =>(
                    // pass in props for title/body
                    <div className="blog-preview">
                        <h2>{blog.title}</h2>
                        <p>By {blog.author}</p>
                    </div>
                ))}
            </div>
    );
}

export default BlogList;