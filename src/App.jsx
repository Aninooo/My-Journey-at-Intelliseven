import React, { useState, useEffect } from 'react';
import pic1 from './assets/pic1.jpg';
import pic2 from './assets/pic2.jpg';
import i7Image from './assets/i7black.png';
import i71 from './assets/i71.jpg';
import i72 from './assets/i72.jpg';
import i73 from './assets/i73.jpg';
import i74 from './assets/i74.jpg';
import i75 from './assets/i75.jpg';
import i76 from './assets/i76.jpg';
import i77 from './assets/i77.jpg';
import i78 from './assets/i78.jpg';
import i79 from './assets/i79.jpg';
import i710 from './assets/i710.jpg';
import i712 from './assets/i712.jpg';
import i713 from './assets/i713.jpg';
import i714 from './assets/i714.jpg';
import i715 from './assets/i715.jpg';
import i716 from './assets/i716.jpg';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [showFrontPage, setShowFrontPage] = useState(false);
  const [showArticle, setShowArticle] = useState(false);
  const [showGallery, setShowGallery] = useState(false); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    document.addEventListener('contextmenu', event => event.preventDefault());
    return () => {
      clearTimeout(timer);
      document.removeEventListener('contextmenu', event => event.preventDefault());
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      setShowFrontPage(true);
    }
  }, [loading]);

  const handleJourneyClick = () => {
    setShowFrontPage(false);
    setShowArticle(true);
  };

  const handleBackButtonClick = () => {
    setShowFrontPage(true);
    setShowArticle(false);
    setShowGallery(false); 
  };

  const handleGalleryClick = () => {
    setShowFrontPage(false);
    setShowGallery(true);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (showFrontPage) {
    return <FrontPage onJourneyClick={handleJourneyClick} onGalleryClick={handleGalleryClick} />;
  }

  if (showArticle) {
    return <ArticlePage onBackButtonClick={handleBackButtonClick} />;
  }

  if (showGallery) {
    return <GalleryPage onBackButtonClick={handleBackButtonClick} />;
  }

  return null;
}

function FrontPage({ onJourneyClick, onGalleryClick }) {
  return (
    <div className="front-page">
      <h1>My Journey in Intelliseven</h1>
      <p>By Bryan N. Lomerio, a computer science student at Camarines Sur Polytechnic Colleges</p>
      <div className="buttons">
        <button className="button" onClick={onJourneyClick}>Read My Journey</button>
        <button className="button" onClick={onGalleryClick}>Gallery</button>
      </div>
    </div>
  );
}

function ArticlePage({ onBackButtonClick }) {
  return (
    <div className="container max-w-2xl px-4 py-8">
      <button className="back-button" onClick={onBackButtonClick}>Back</button>
      <div className="text-container mb-8">
        <h1 className="text-3xl font-bold mx-auto">Inside Intelliseven: My OJT Internship Journey</h1>
      </div>
      <div className="text-center mb-4">
        <div className="image-container">
          <img src={pic1} alt="Image 1" className="image" />
          <img src={pic2} alt="Image 2" className="image second" />
        </div>
      </div>
      <article>
        <div className="section">
          <p className="mb-4">
            Joining Intelliseven for my OJT was a decision I'll always cherish. From working on backend projects like the Cats API and DatesFruit Ph to venturing into frontend development with the 1568 Realty website, every task presented an opportunity to learn and improve.
          </p>
          <p className="mb-4"> At first, I learned about backend development by working on the Cats API Activity. It was my first time using Express.js and MongoDB. Even though it was tough at first, I felt happy when I figured out how to define routes and use middleware.
          Then, I started working on the DatesFruit Ph backend. It was a bit tricky because it used a new framework I hadn't used before. But I kept at it and got help when I needed it. Along the way, I learned a lot and gained some really useful skills.
          </p>
          <p>
          During my time at Intelliseven, I had the opportunity to work on the frontend of the 1568 Realty website, specifically focusing on the admin side. This involved designing and developing interfaces for managing property listings, user accounts, and other administrative tasks. It was a departure from my usual backend work, but it provided me with valuable experience in creating user interfaces for internal tools.
          </p>
          <p>
            Luckily, I had really helpful mentors and coworkers at Intelliseven. They were always there to help me when I ran into problems and cheer me on when things went well. Their support made me feel like I could tackle anything and made learning fun.
          </p>
          <p>
            Looking back on my time at Intelliseven, I feel really thankful for all the chances I got and the stuff I learned. Not only did I get better at the technical stuff, but I also feel more confident as a developer. I owe a lot of that to the seniors at Intelliseven who were always friendly and ready to teach me new stuff. Their guidance was super important for my growth, and I'm grateful for all they shared with me.
          </p>
          <p>
            As I move forward, I'll take all the experiences and lessons from Intelliseven with me. It was a big part of my journey, and I'm excited to keep using what I learned there. Thanks, Intelliseven, for giving me the chance to learn, improve, and be part of such an awesome team!
          </p>
        </div>
      </article>
    </div>
  );
}

function GalleryPage({ onBackButtonClick }) {
  return (
    <div className="gallery-page">
      <button className="back-button" onClick={onBackButtonClick}>Back</button>
      <h1>Gallery</h1>
      <div className="gallery-images">
        <img src={i71} alt="Image 1" />
        <img src={i72} alt="Image 2" />
        <img src={i73} alt="Image 3" />
        <img src={i74} alt="Image 4" />
        <img src={i75} alt="Image 5" />
        <img src={i76} alt="Image 6" />
        <img src={i78} alt="Image 8" />
        <img src={i79} alt="Image 9" />
        <img src={i715} alt="Image 15" />
        <img src={i77} alt="Image 7" />
        <img src={i710} alt="Image 10" />
        <img src={i712} alt="Image 12" />
        <img src={i713} alt="Image 13" />
        <img src={i714} alt="Image 14" />
        <img src={i716} alt="Image 16" />
      </div>
    </div>
  );
}

function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <img src={i7Image} alt="Loading..." />
      <div className="waves-circle"></div>
    </div>
  );
}

export default App;
