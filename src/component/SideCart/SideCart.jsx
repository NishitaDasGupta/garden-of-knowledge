import React from 'react';

const SideCart = (props) => {
    console.log(props.cartBlogs);
    return (
        <div>
              <div className='mt-8 mb-6'>
           <h4 className='text-violet-700 text-xl font-semibold py-5 px-5 border border-violet-700 rounded-lg bg-violet-50'>Spent time on read : 177 min</h4>
        </div>
        <div className='border rounded-lg  bg-gray-100'>
            <h4 className='text-xl font-semibold py-5 px-5 '>Bookmarked Blogs : 8</h4>

          
        </div>
        </div>
    );
};

export default SideCart;