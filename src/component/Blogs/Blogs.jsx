import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Blogs.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [cartBlogs, setCartBlogs] = useState([]);
    const handleBookmark = (blog) => {
        // console.log(blog);
       const duplicate = cartBlogs.find((cartBlog)=> cartBlog.id === blog.id);
       if(duplicate){
        toast("You Have Already Bookmarked This Blog!!");
       }
       else{
        const newCartBlogs = [...cartBlogs, blog];
        setCartBlogs(newCartBlogs);
       }
      
    }
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-16 gap-6 relative'>
            <div className="blogs-container">
                {
                    blogs.map((blog) => <Blog
                        blog={blog}
                        handleBookmark={handleBookmark}
                        key={blog.id}
                    ></Blog>)
                }
            </div>
<div>
    <div className="bookmarked-container sticky top-0">
        <div className='mt-8 mb-6'>
           <h4 className='text-violet-700 text-xl font-semibold py-5 px-5 border border-violet-700 rounded-lg bg-violet-50'>Spent time on read : 177 min</h4>
        </div>
        <div className='border rounded-lg  bg-gray-100'>
            <h4 className='text-xl font-semibold py-5 px-5 '>Bookmarked Blogs : {cartBlogs.length}</h4>

            {cartBlogs.map((cartBlog) => 
            <p className='py-5 px-5 my-3 mx-4 bg-white'>{cartBlog.blogTitle}</p>)
            }
        </div>

    </div>
</div>
<ToastContainer />
        </div>
    );
};

export default Blogs;