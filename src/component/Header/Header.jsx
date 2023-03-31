import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='md:flex justify-between items-center'>
            <h2 className="text-3xl md:text-4xl font-bold "
            >Garden Of Knowledge</h2>
            <div className='text-lg font-bold '>
                <a href="/home" className='hover:text-cyan-500 text-violet-800' >Home</a>
                <a href="/libraryPrograms" className='pl-2 md:pl-4 hover:text-cyan-500 text-violet-800'>Library</a>
                <a href="/blogroll" className='pl-2 md:pl-4 hover:text-cyan-500 text-violet-800'>Blogroll</a>
                <a href="/about" className='pl-2 md:pl-4 hover:text-cyan-500 text-violet-800'>About</a>
            </div>
            </div>
            <hr className='mt-8'/>
        </div>
    );
};

export default Header;