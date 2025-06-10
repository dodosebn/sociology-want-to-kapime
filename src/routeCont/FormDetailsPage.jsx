import React, { useRef, useState, useMemo, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import postData from '../../src/data/postdata';
import '../styles/formDetails.css';
import { BiChevronDown } from 'react-icons/bi';

// Lazy-load FormOne for performance
const FormOne = lazy(() => import("../components/Forms/FormOne"));

const FormDetailsPage = () => {
  const { id } = useParams();

  const item = useMemo(() => {
    return postData.find(p => p.id === parseInt(id) && p.type === 'form');
  }, [id]);

  const [isCopied, setIsCopied] = useState(false);
  const [isTableOpen, setIsTableOpen] = useState(false);

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const linkInputRef = useRef(null);

  const currentUrl = window.location.href;

  const handleScrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const copyToClipboard = async () => {
    if (linkInputRef.current) {
      try {
        await navigator.clipboard.writeText(linkInputRef.current.value);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    }
  };

  const shareOnSocialMedia = (platform) => {
    let shareUrl = '';
    const title = item?.title || 'Check out this form';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(title + ' ' + currentUrl)}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(currentUrl)}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, '_blank');
  };

  if (!item) return <p>Post not found</p>;

  return (
    <div className='general-container-layout'>
      <div className="mainform-container">
        <div className="form-details-container">
          <header className='form-header'>
            <div className="form-hero-section-container">
              <div className="form-hero-box">
                <img
                  src={item.image}
                  alt="header"
                  className="form-hero-image"
                  loading="lazy"
                />
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
                  <img src={item.image} alt="author" loading="lazy" />
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
                  <Suspense fallback={<div>Loading form...</div>}>
                    <FormOne />
                  </Suspense>
                </div>
              </div>

              <div className="page-footer-section">
                <h3>Share Article:</h3>
                <div className="social-icons">
                  <button
                    className="icon facebook"
                    onClick={() => shareOnSocialMedia('facebook')}
                  >
                    f
                  </button>
                  <button
                    className="icon twitter"
                    onClick={() => shareOnSocialMedia('twitter')}
                  >
                    x
                  </button>
                  <button
                    className="icon whatsapp"
                    onClick={() => shareOnSocialMedia('whatsapp')}
                  >
                    w
                  </button>
                  <button
                    className="icon email"
                    onClick={() => shareOnSocialMedia('email')}
                  >
                    e
                  </button>
                </div>

                <div className="link-copy-section">
                  <input
                    type="text"
                    value={currentUrl}
                    readOnly
                    ref={linkInputRef}
                  />
                  <button
                    className="copy-button"
                    onClick={copyToClipboard}
                  >
                    {isCopied ? 'Copied!' : 'Copy Link'}
                  </button>
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
