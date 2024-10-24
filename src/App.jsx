import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {

  return (
    <>
      <Header></Header>
      <div className='w-10/12 mx-auto md:flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
