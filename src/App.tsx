import "./App.css";
import CommentsSection from "./components/comments/CommentsSection";
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Thing from "./components/Thing";

function App() {
    return (
        <div className="mainContainer">
            <Thing title="ai" element={<Rating maxRating={5} onChange={(a) => console.log(a) } />} />
            <Thing title="title" element={<div />} />
            <Thing title="Comments" element={<CommentsSection />} />

        </div>
    );
}

function Rating({ maxRating, onChange }) {
    const [rating, setRating] = useState(0);
  
    function handleClick(newRating) {
      setRating(newRating);
      if (onChange) {
        onChange(newRating);
      }
    }
  
    return (
      <div className="rating">
        {[...Array(maxRating)].map((star, index) => (
          <FaStar
            key={index}
            className="rating-star"
            color={index < rating ? '#ffc107' : '#e4e5e9'}
            onClick={() => handleClick(index + 1)}
          />
        ))}
      </div>
    );
  }

export default App;
