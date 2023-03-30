import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs , setBlogs] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-16 gap-6'>
         <div className="blogs-container">
<h1>Hiiii</h1>
         </div>
         <div className="bookmarked-container">
            <h1>byrr</h1>
         </div>
        </div>
    );
};

export default Blogs;