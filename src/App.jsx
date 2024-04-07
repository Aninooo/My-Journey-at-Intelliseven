// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import pic1 from './assets/pic1.jpg';
import pic2 from './assets/pic2.jpg';
import './index.css'; 

function App() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className={`flex justify-center items-center h-screen ${hovered ? 'show-text-container' : ''}`}>
      <div className="container max-w-2xl px-4 py-8">
        <div className="text-container mb-8">
          <h1 className="text-3xl font-bold mx-auto">My Journey at Intelliseven</h1>
        </div>

        <div className="text-center mb-4">
          <div className="image-container">
            <img src={pic1} alt="Image 1" className="image" />
            <img
              src={pic2}
              alt="Image 2"
              className="image second"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            />
          </div>
        </div>

        <article>
          <div className="section">
            <p className="mb-4">
              Joining Intelliseven for my OJT was a decision I'll always cherish. From working on backend projects like the Cats API and DatesFruit Ph to venturing into frontend development with the 1568 Realty website, every task presented an opportunity to learn and improve.
            </p>
            <p className="mb-4">
              At the start, I delved into backend development with the Cats API. It was my introduction to using Express.js and MongoDB, and despite the initial difficulties, I found satisfaction in mastering route definitions and middleware usage. As I transitioned to the DatesFruit Ph backend, I faced the challenge of learning a new framework, but with dedication and support, I navigated through it, gaining valuable skills along the way.
            </p>
            <p>
              During my time at Intelliseven, I got to try my hand at building the 1568 Realty website. It was a cool change from backend work, letting me create property listings and design how users see the site. This helped me learn new things and see development in a different way.
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
    </div>
  );
}

export default App;
