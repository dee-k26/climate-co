import React from 'react';
import './AboutUs.css';
import family from './family.jpg';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="image-container">
        <img src={family} alt="About Us" className="about-us__image" />
      </div>
      <div className="content-container">
      <p>With over 13 years of experience in the heating and cooling industry, our founder embarked on a mission six years ago to set up Climate Co, a family-owned venture that prioritizes not only the comfort of our clients but the well-being of our team. We firmly believe that people are the bedrock of any successful business. At Climate Co, we don't just hire the best; we make them a part of our family.

Our philosophy is simple: when you treat your team with respect, loyalty, and the familial bond they deserve, they, in turn, go the extra mile for our customers. This tight-knit bond radiates through our services, making every installation, maintenance, or repair job a testament to our collective dedication and passion.

Choose Climate Co for your heating and cooling needs, and experience the difference of a company that doesn't just provide services, but builds lasting relationships. Welcome to our family!</p>
</div>
</div>
  );
};

export default AboutUs;
