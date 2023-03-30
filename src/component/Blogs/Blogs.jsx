import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-16 gap-6'>
            <div className="blogs-container">
{
    blogs.map((blog)=><Blog 
    blog={blog}
    key={blog.id}
    ></Blog>)
}
            </div>
            <div className="bookmarked-container">
                <h1>byrr</h1>
            </div>
        </div>
    );
};

export default Blogs;