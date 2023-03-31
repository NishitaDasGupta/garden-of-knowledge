import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './SingleBlog.css'

const SingleBlog = (props) => {

    const {id, authorImg, authorName, blogTitle, coverImg, hashtag, publishDate, readTime } = props.blog;
    const handleBookmark = props.handleBookmark;
    const handleMarkAsRead = props.handleMarkAsRead;
    //console.log(handleBookmark);
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
                <div className='flex'>
                    <p className='text-xl text-slate-400 pr-2'>{readTime} min read </p>
                    <button className='p-2' onClick={() => handleBookmark(props.blog)}><img className='bookmark-img' src="icons8-bookmarks-64.png" alt="" /></button>
                </div>
            </div>
            <h1 className='text-3xl mb-4'>{blogTitle}</h1>
            <div className='flex gap-2'>
                {
                    hashtag.map((tag) => <p className='text-base text-slate-400'>#{tag}</p>)
                }
            </div>
            <button onClick={() => handleMarkAsRead(readTime)} className='text-violet-800 underline mb-4'>Mark as read</button>
            <hr />
        </div>
    );
};

export default SingleBlog;