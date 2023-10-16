import React, { useState } from 'react';
import './slide.css'

function SlideFilm(params) {
    const [currentIndex, setCurrentIndex] = useState(2);
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
    };
    
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 4 ? 4 : prevIndex + 1));
    };
    return(
        <>
            <div className="blockcomponent">
                <div className="containercarrousel">
                    <div className="carousel">
                        <div className="carousel-container">
                            <div className="previous" onClick={prevSlide}></div>
                                {Array.from({ length: 5 }, (_, index) => (
                                    <div
                                        className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                                        key={index}>
                                        <div className="child"></div>
                                    </div>
                                ))}
                            <div className="next" onClick={nextSlide}></div>
                        </div>
                    </div>
                </div>
                <div className="blockdescription">
                    <div className="contain-card">
                        <div className="card"></div>
                        <div className="contain-description"></div>
                    </div>
                    <div className="contain-resume">
                        <h3>titre du film</h3>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SlideFilm

  
