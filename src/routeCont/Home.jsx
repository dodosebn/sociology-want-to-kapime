import React from 'react'
import Hero from '../components/home/Hero/Hero'
import PostCard from '../components/home/posts/PostCard'

const Home = () => {
  return (
    <div className='general-container-layout'>
        <Hero/>
        <PostCard/>
    </div>
  )
}

export default Home