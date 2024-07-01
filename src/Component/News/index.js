import React from 'react';
import './News.css'; // Import your CSS file for styling

const News = () => {
  return (
    <div className="news-section">
      <div className="container">
        <div className="news-info">
          <h2 className="info-title">Latest News</h2>
          <p className="info-desc">
            Stay updated with the latest news and announcements from our camera shop. We bring you
            information about new product launches, promotions, and industry insights.
          </p>
          <div className="news-item">
            <h4 className="info-dir">New Product Launch</h4>
            <p className="info-desc">
              Introducing the latest DSLR model from Canon. Explore its advanced features and
              capabilities for capturing stunning images.
            </p>
          </div>
          <div className="news-item">
            <h4 className="info-dir">Holiday Promotion</h4>
            <p className="info-desc">
              Don't miss out on our special holiday promotion! Enjoy discounts on selected cameras
              and accessories. Limited time offer, so shop now!
            </p>
          </div>
          <div className="news-item">
            <h4 className="info-dir">Photography Tips</h4>
            <p className="info-desc">
              Learn new photography techniques with our expert tips. Enhance your skills and
              capture memorable moments with ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
