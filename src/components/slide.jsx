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
                        <div className="card"><img src="src/assets/Inception.jpg" alt="" /></div>
                        <div className="contain-description"><h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quidem.</h3></div>
                    </div>
                    <div className="contain-resume">
                        <h2>Titre du Film</h2>
                        <article>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt facere aliquam veniam ipsam itaque aperiam veritatis iure totam sunt ut culpa, dignissimos earum obcaecati enim eum accusamus ea eos impedit beatae asperiores alias corrupti ratione sit quae? Aliquam excepturi nemo sunt obcaecati ut alias eos repellat quam itaque voluptates quisquam voluptatum velit pariatur laboriosam quibusdam enim eveniet, debitis, temporibus ullam.</article>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SlideFilm

  
