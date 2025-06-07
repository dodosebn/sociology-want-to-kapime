import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import postData from '../../src/data/postdata';
import FormOne from "../components/Forms/FormOne";
import '../styles/formDetails.css';
import { BiChevronDown } from 'react-icons/bi';

const FormDetailsPage = () => {
  const { id } = useParams();
  const item = postData.find(p => p.id === parseInt(id) && p.type === 'form');

  const [isTableOpen, setIsTableOpen] = useState(false);
  
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  
  const handleScrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  if (!item) return <p>Form not found</p>;

  return (
    <div className='general-container-layout'>
      <div className="mainform-container">
        <div className="form-details-container">
          <header className='form-header'>
            <div className="form-hero-section-container">
              <div className="form-hero-box">
                <img src={item.image} alt="header" className="form-hero-image" />
              </div>
            </div>
            <div className="form-header-info">
              <h1>{item.title}</h1>
            </div>
          </header>

          <div className="form-paragraph-container"></div>

          <div className='post-details-container'>
            <div className="PostDescription">
              <div className="dateAndTime">
                <p>Apr 26, 2019</p>
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
                </p>
                <p ref={section2Ref}>
                  Ghost comes with a beautiful default theme called Casper, which is designed to be a clean, readable publication 
                </p>

                <div className="form-sample-container">
                  <FormOne/>
                </div>
              </div>

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
      </div>
    </div>
  );
};

export default FormDetailsPage;