import React from 'react';
import './widget-style.css'; 
import CustomButton from '../../containers/button/CustomButton';
import { FaStar } from 'react-icons/fa';


const Tags = () => {
  const tags = [
    { name: 'Health', link: '/edger/tag/health/', color: '#FEBDD0' },
    { name: 'Inspiration', link: '/edger/tag/inspiration/', color: '#FFD682' },
    { name: 'Lifestyle', link: '/edger/tag/lifestyle/', color: '#B8F2E6' },
    { name: 'Music', link: '/edger/tag/music/', color: '#D5AAFF' },
    { name: 'News', link: '/edger/tag/news/', color: '#FFC1A1' },
    { name: 'Technology', link: '/edger/tag/technology/', color: '#A1E3FF' },
    { name: 'Travel', link: '/edger/tag/travel/', color: '#FFB7D5' },
    { name: 'Business', link: '/edger/tag/business/', color: '#A1FFC3' },
    { name: 'Food', link: '/edger/tag/food/', color: '#FFD3B6' },
    { name: 'Education', link: '/edger/tag/education/', color: '#C1C8E4' },
    { name: 'Sports', link: '/edger/tag/sports/', color: '#FFABAB' },

  ];

  return (
    <div className="tags-widget">
      <h3 className="tags-title">
        <span>Tag Cloud</span> <span className="dot"> <FaStar size={14} /></span>
      </h3>
      <div className="wrapper-tag-widget">
        <div className="tags-container">
            {tags.map((tag, index) => (
              <CustomButton
                key={index}
                title={tag.name}
                backgroundColor={tag.color}
                textColor="#333"
                link={tag.link}
                className=''
                buttonClassName='tag-item'
              />
            ))}
          </div>
      </div>
    </div>
  );
};

export default Tags;
