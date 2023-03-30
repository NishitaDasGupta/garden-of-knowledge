import React from 'react';

const Header = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold underline">Garden Of Knowledge</h2>
            <a href="/home">Home</a>
            <a href="/libraryPrograms">Library Programs</a>
            <a href="/blogroll">Blogroll</a>
            <a href="/about">About</a>
        </div>
    );
};

export default Header;