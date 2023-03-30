import React from 'react';
import './Blog.css'
const Blog = (props) => {
   
    const { authorImg, authorName, blogTitle, coverImg, hashtag, publishDate, readTime } = props.blog;
    console.log(hashtag);
    return (
        <div className='blog my-8'>
            <img className='coverImg rounded-lg' src={coverImg} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex mt-8 mb-4'>
                    <img className='authorImg rounded-full mr-6' src={authorImg} alt="" />
                    <div>
                        <h5 className='text-xl font-bold'>{authorName}</h5>
                        <p className='text-base text-slate-400'>{publishDate}</p>
                    </div>
                </div>
                <div>
                    <p className='text-xl text-slate-400'>{readTime} min read</p>
                </div>
            </div>
            <h1 className='text-3xl mb-4'>{blogTitle}</h1>
           <div className='flex gap-2'>
             {
                hashtag.map((tag) => <p className='text-base text-slate-400'>#{tag}</p>)
            }
            </div>
            <button className='text-violet-800 underline mb-4'>Mark as read</button>
            <hr />
        </div>
    );
};

export default Blog;