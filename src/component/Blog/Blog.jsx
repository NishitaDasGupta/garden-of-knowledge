import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div>
            <h3 className='text-center text-3xl font-bold'>Question & Answer</h3>
            <hr />
            <br />
            <h2 className='text-2xl font-bold'>1. State vs Props.</h2>
            <p className='text-xl'>Ans: State is kept inside of a component. In the component, the state itself updated by the setStatus function. State is internal and controlled by the component itself.
            Props is a parameter. It comes from a parent component by calling child component. It can't update until the parent component update the value. It can be load with array, function, object etc.
            </p>
            <br />
            <h2 className='text-2xl font-bold'>2. How does useState work.</h2>
            <p className='text-xl'>Ans: useState is React Hook that allows us to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.
            </p>
            <br />
            <h2 className='text-2xl font-bold'>3. Purpose of useEffect other than fetching data.</h2>
            <p  className='text-xl'>Ans: useEffect is kept inside a component. useEffect run the component everytime , when re-renders and When the component gets not mounted. useEffect  Only run once When the component gets mounted. useEffect with a condition run the component every time when the condition is changed.
            </p>
            <br />
            <h2 className='text-2xl font-bold'>4. How does react work.</h2>
            <p  className='text-xl'>Ans: React creates a VIRTUAL DOM in memory. React only changes what needs to be changed. ReactJS divides the UI into reusable pieces of code known as components. Component can identify in 4 types. 
                <ol>
                    <li>1. Similar in look, different in data,</li>
                    <li>2. Container Component,</li>
                    <li>3. No pattern, But Breakdown for working purpose,</li>
                    <li>4. Stand alone component like - footer, header.</li>
                </ol>
            </p>
        </div>
    );
};

export default Blog;