import React, { useState, useEffect } from 'react';
import './PostCard.css';
import { Link } from 'react-router-dom'; 
import { FaComments, FaCalendarAlt } from 'react-icons/fa';
import CustomButton from '../../../containers/button/CustomButton';
import postData from '../../../data/postdata';
import { FastAverageColor } from 'fast-average-color';

const ITEMS_PER_PAGE = 6;

const PostCard = ({ filterType }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [colors, setColors] = useState({});

  const filteredData = filterType
    ? postData.filter(item => item.type === filterType)
    : postData;

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

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

  useEffect(() => {
    const fac = new FastAverageColor();

    currentData.forEach(item => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = item.image;

      img.onload = () => {
        fac.getColorAsync(img)
          .then(color => {
            setColors(prev => ({
              ...prev,
              [item.id]: color.hex
            }));
          })
          .catch(e => console.error(e));
      };
    });
  }, [currentPage, currentData]);

  return (
    <div className='post-card-main-container'>
      <div className="form-grid-layout">
        {currentData.map((item) => (
          <div className="main-card-container" key={item.id}>
          <div className="wrapper">
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
                  <div className="label-column">
                    <div 
                      className="label-text-container"
                      style={{ backgroundColor: colors[item.id] || '#FEBDD0' }}
                    >
                      <Link to={item.categoryLink} className="label-text">
                        {item.category}
                      </Link>
                      <div className="tooltip category-tooltip">
                        Discover
                      </div>
                    </div>

                    <div 
                      className="circle"
                      style={{ backgroundColor: colors[item.id] || '#FEBDD0' }}
                    >
                      <FaComments className="icon" />
                      <div className="tooltip comment-tooltip">
                        Comment
                      </div>
                    </div>

                    <div 
                      className="circle"
                      style={{ backgroundColor: colors[item.id] || '#FEBDD0' }}
                    >
                      <FaCalendarAlt className="icon" />
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
                backgroundColor={colors[item.id] || '#FEBDD0'} 
                textColor="#333"
                link={getLink(item)}
              />
            </div>
          </div>
          </div>
        ))}
      </div>

      <div className="pagination-controls">
      {totalPages > 1 && (
  <div className="pagination-controls">
    {currentPage > 1 && (
      <CustomButton
        title="Previous"
        backgroundColor="#FFD682"
        textColor="#000"
        onClick={goToPrevPage}
      />
    )}

    <div className="page-numbers">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`page-number-button ${currentPage === index + 1 ? 'active' : ''}`}
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>

    {currentPage < totalPages && (
      <CustomButton
        title="Next"
        backgroundColor="#FFD682"
        textColor="#000"
        onClick={goToNextPage}
      />
    )}
  </div>
)}

      </div>
    </div>
  );
};

export default PostCard;
