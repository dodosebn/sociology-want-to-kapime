import React from 'react';
import '../styles/CategoryPageStyle.css';
import PostCard from '../components/home/posts/PostCard';

const Forms = () => {
  return (
    <div className='general-container-layout'>
      <div className="category-details-page">
        <div className="category-header">
          <div className="category-header-left">
            <h1>Forms</h1>
            <p>A collection of <b>11 Posts</b></p>
          </div>
          <div className="category-header-right">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorum illum accusantium, quia doloremque nemo, nobis rem numquam dolores sint laboriosam nisi hic, ad laborum. Repudiandae soluta eum tempore non?</p>
          </div>
        </div>
        <div className="post-card-section">
          <PostCard filterType="form" />
        </div>
      </div>
    </div>
  );
}

export default Forms;
