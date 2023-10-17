import React, { useState } from 'react';
import './slide.css'
import films from './Films';

function SlideFilm({ selectedCategory, searchTerm, setSearchTerm }) {
    const [currentIndex, setCurrentIndex] = useState(2);

    // Filtrer les films en fonction de la catégorie sélectionnée et du terme de recherche
    const filteredFilms = films.filter(film => {
        if (selectedCategory === 'Tous les films' || film.categorie === selectedCategory) {
            return film.nom.toLowerCase().includes(searchTerm.toLowerCase());
        }
        return false;
    });


    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 4 ? 4 : prevIndex + 1));
    };
    return (
        <>
            <div className="blockcomponent">
                <div className="containercarrousel">
                    <div className="carousel">
                        <div className="carousel-container">
                            <div className="previous" onClick={prevSlide}></div>
                            {filteredFilms.map((film, index) => (
                                <div
                                    className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                                    key={index}
                                >
                                    <div className="child">
                                        <img src={film.image} />
                                    </div>
                                </div>
                            ))}
                            <div className="next" onClick={nextSlide}></div>
                        </div>
                    </div>
                </div>
                <div className="blockdescription">
                    <div className="contain-card">
                        <div className="card"><img src={filteredFilms[currentIndex].image} alt="" /></div>
                        <div className="contain-description"><h3>{filteredFilms[currentIndex].note}</h3></div>
                    </div>
                    <div className="contain-resume">
                        <h2>{filteredFilms[currentIndex].nom}</h2>
                        <article>{filteredFilms[currentIndex].resume}</article>
                        <article>{filteredFilms[currentIndex].avis}</article>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SlideFilm


