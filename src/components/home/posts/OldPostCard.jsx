import React, { useState } from 'react';
import './PostCard.css';
import { Link } from 'react-router-dom'; 
import { FaComments, FaCalendarAlt } from 'react-icons/fa';
import CustomButton from '../../../containers/button/CustomButton';
import postData from '../../../data/postdata';

const ITEMS_PER_PAGE = 6;

const PostCard = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(postData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = postData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  const getLink = (item) => {
    const slug = slugify(item.title);
    return item.type === 'form'
      ? `/form-details/${item.id}/${slug}`
      : `/post-details/${item.id}/${slug}`;
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className='post-card-main-container'>
      <div className="form-grid-layout">
        {currentData.map((item) => (
          <div className="wrapper" key={item.id}>
            <Link to={getLink(item)} className="card-link"> 
              <div className="card-group">
                <div
                  className="card-background"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                ></div>

                <div className="card-foreground">
                  {/* <div className="label-column">
                   <div className='label-text-container'>
                    <Link to={item.categoryLink} className="label-text">
                      {item.category}
                    </Link>
                   </div>
                    <div className="circle">
                      <FaComments className="icon" />
                    </div>
                    <div className="circle">
                      <FaCalendarAlt className="icon" />
                    </div>
                  </div> */}

                    <div className="label-column">
                    <div 
                        className="label-text-container"
                        style={{ backgroundColor: colors[item.id] || '#FEBDD0' }} 
                    >
                        <Link to={item.categoryLink} className="label-text">
                        {item.category}
                        </Link>
                        {/* Tooltip for Category */}
                        <div className="tooltip category-tooltip">
                        Discover
                        </div>
                    </div>

                    <div 
                        className="circle"
                        style={{ backgroundColor: colors[item.id] || '#FEBDD0' }} 
                    >
                        <FaComments className="icon" />
                        {/* Tooltip for Comment Circle */}
                        <div className="tooltip comment-tooltip">
                        Comment
                        </div>
                    </div>

                    <div 
                        className="circle"
                        style={{ backgroundColor: colors[item.id] || '#FEBDD0' }} 
                    >
                        <FaCalendarAlt className="icon" />
                        {/* Tooltip for Calendar Circle */}
                        <div className="tooltip calendar-tooltip">
                        Calendar
                        </div>
                    </div>
                    </div>

                </div>
              </div>
            </Link>

            <div className="card-Info">
              <div className="card-description">
                <h1 className='animated-link-lines'>{item.title}</h1>

                <p>{item.description}</p>
              </div>
              <CustomButton
                title="Read More"
                backgroundColor="#FEBDD0"
                textColor="#333"
                link={getLink(item)}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="pagination-controls" >
        <CustomButton
          title="Previous"
          backgroundColor="#FEBDD0"
          textColor="#000"
          onClick={goToPrevPage}
          disabled={currentPage === 1}
        />
        <span>Page {currentPage} of {totalPages}</span>
        <CustomButton
          title="Next"
          backgroundColor="#FEBDD0"
          textColor="#000"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        />
      </div>

    </div>
  );
};

export default PostCard;
