import { useState } from 'react'
import './Welcome.css'
import films from './Films'

function WelcomeFilm() {

    const [selectedCategory, setSelectedCategory] = useState('Tous les films');
    const [searchTerm, setSearchTerm] = useState('');

    // Fonction de tri des films par catégorie
    const filteredFilms = films.filter(film => {
        if (selectedCategory === 'Tous les films') {
            return true; // Affiche tous les films si "Tous les films" est sélectionné
        }
        // Sinon affiche par catégorie si une catégorie sélectionné
        return film.categorie === selectedCategory;
    });

    // Fonction de filtrage des films par nom
    const filteredFilmsByName = filteredFilms.filter(film => {
        return film.nom.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <>
            <div className='cover'>
                <h1 className='title'>Fanblog Film</h1>
            </div>

            <div className='navbar'>
                <div className='navbarCategories'>
                    <ul>
                        <li onClick={() => setSelectedCategory('Tous les films')}>Tous les films</li>
                        <li onClick={() => setSelectedCategory('Action')}>Action</li>
                        <li onClick={() => setSelectedCategory('Science-Fiction')}>Science-fiction</li>
                        <li onClick={() => setSelectedCategory('Fantastique')}>Fantastique</li>
                        <li onClick={() => setSelectedCategory('Horreur')}>Horreur</li>
                        <li onClick={() => setSelectedCategory('Animation')}>Animation</li>
                    </ul>
                </div>
                <div className='navbarSearch'>
                    <form className="navbarSearchForm">
                        <input
                            type="text"
                            placeholder="Rechercher un film..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit">🔎</button>
                    </form>
                </div>
            </div>

            {/* Pour Quentin, à supprimer pour Marcelo et Adrien
                <div className="filteredFilms">
                    {filteredFilmsByName.map((film, index) => (
                        <div key={index}>
                            <img src={film.image} />
                            <h2>{film.nom}</h2>
                            <p>Catégorie: {film.categorie}</p>
                            <p>Note: {film.note}</p>
                            <p>Résumé: {film.resume}</p>
                        </div>
                    ))}
                </div> */}
        </>
    )
}

export default WelcomeFilm

