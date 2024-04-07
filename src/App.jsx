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
          <h1 className="text-3xl font-bold mx-auto">Inside Intelliseven: My OJT Internship Journey</h1>
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
    </div>
  );
}

export default App;
