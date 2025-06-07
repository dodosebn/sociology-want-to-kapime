import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import postData from '../../src/data/postdata';
import '../styles/postDetails.css';
import { BiChevronDown } from 'react-icons/bi';

const PostDetailsPage = () => {
  const { id } = useParams();
  const item = postData.find(p => p.id === parseInt(id) && p.type === 'article');
  const [isTableOpen, setIsTableOpen] = useState(false);

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  const handleScrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  if (!item) return <p>Post not found</p>;

  return (
    <div className='general-container-layout'>
      <header className="post-hero-section-container">
        <div className="post-hero-box">
            <img src={item.image} alt="header" className="post-hero-image" />
        </div>
      </header>

      <div className='post-details-container'>
        <div className="PostDescription">
          <h1>{item.title}</h1>
          <div className="dateAndTime">
            <p>Apr 26, 2019 </p>
            <div className='autoInfo'>
              <img src={item.image} alt="author" />
              <p>Auth name here</p>
            </div>
          </div>


          <div 
            className={`table-of-contents ${isTableOpen ? 'open' : ''}`}
            onClick={() => setIsTableOpen(!isTableOpen)}
          >
            <div className="table-header">
              <h2>Table of Contents</h2>
              <BiChevronDown className={`arrow-icon ${isTableOpen ? 'rotate' : ''}`} />
            </div>

            {isTableOpen && (
              <ul className="contents-list">
                <li onClick={() => handleScrollToSection(section1Ref)}>Section 1</li>
                <li onClick={() => handleScrollToSection(section2Ref)}>Section 2</li>
              </ul>
            )}
          </div>

          <div className="post-paragraph">
      


            <p ref={section1Ref}>
              Ghost comes with a beautiful default theme called Casper, which is designed to be a clean, readable publication 
              layout and can be adapted for most purposes. However, Ghost can also be completely themed to suit your needs. 
              Rather than just giving you a few basic settings which act as a poor proxy for code, we just let you write code.
            </p>
            <p ref={section2Ref}>
              Ghost comes with a beautiful default theme called Casper, which is designed to be a clean, readable publication 
              layout and can be adapted for most purposes. However, Ghost can also be completely themed to suit your needs. 
              Rather than just giving you a few basic settings which act as a poor proxy for code, we just let you write code.
            </p>

           <div className="section-inner">
            <div className='section-image-inner-container'>
              <img src={item.image} alt="image" />
              <span>Example caption</span>
            </div>
           </div>

           <div className="quote-box">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam commodi pariatur consequatur ab, sunt recusandae corporis sed, rerum quo explicabo voluptate, iusto eaque veritatis. Nam autem dolorem nobis quisquam vero.</p>
            <span>"</span>
           </div>

           <div className="paragraph-section">
           <p ref={section1Ref}>
              Ghost comes with a beautiful default theme called Casper, which is designed to be a clean, readable publication 
              layout and can be adapted for most purposes. However, Ghost can also be completely themed to suit your needs. 
              Rather than just giving you a few basic settings which act as a poor proxy for code, we just let you write code.
            </p>
            <p ref={section2Ref}>
              Ghost comes with a beautiful default theme called Casper, which is designed to be a clean, readable publication 
              layout and can be adapted for most purposes. However, Ghost can also be completely themed to suit your needs. 
              Rather than just giving you a few basic settings which act as a poor proxy for code, we just let you write code.
            </p>

            <div className="bullet-point-texts">
              <ul>
                <li>
                  default.hbs is the main template file
                </li>
                <li>
                  default.hbs is the main template file
                </li>
                <li>
                  default.hbs is the main template file
                </li>
                <li>
                  default.hbs is the main template file
                </li>
              </ul>
            </div>


           </div>
          </div>

{/* ----------footer------------ */}
            <div className="page-footer-section">
              <h3>Share Article:</h3>
              <div className="social-icons">
                <button className="icon facebook">f</button>
                <button className="icon twitter">x</button>
                <button className="icon whatsapp">w</button>
                <button className="icon email">e</button>
              </div>

              <div className="link-copy-section">
                <input 
                  type="text" 
                  value="https://ghost.estudiopatagon.com/edger/nosidebar/" 
                  readOnly 
                />
                <button className="copy-button">Copy Link</button>
              </div>

              <hr />
            </div>

        </div>
      </div>
    </div>
  );
};

export default PostDetailsPage;
