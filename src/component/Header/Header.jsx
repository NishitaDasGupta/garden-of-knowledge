import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='flex justify-between items-center'>
            <h2 className="text-3xl font-bold "
            >Garden Of Knowledge</h2>
            <div className='text-lg font-bold '>
                <a href="/home" className='hover:text-cyan-500' >Home</a>
                <a href="/libraryPrograms" className='pl-4 hover:text-cyan-500'>Library Programs</a>
                <a href="/blogroll" className='pl-4 hover:text-cyan-500'>Blogroll</a>
                <a href="/about" className='pl-4 hover:text-cyan-500'>About</a>
            </div>
            </div>
            <hr className='mt-8'/>
        </div>
    );
};

export default Header;