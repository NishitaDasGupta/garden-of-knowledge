import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/Header'
import Blogs from './component/Blogs/Blogs'
import Blog from './component/Blog/Blog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    
    <div className='body my-12 mx-5 md:mx-20'>
    <Header></Header>
    <Blogs></Blogs>
    <Blog></Blog>
    </div>
    </div>
  )
}

export default App
