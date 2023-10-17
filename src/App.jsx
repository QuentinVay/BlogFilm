import { useState } from 'react'
import SlideFilm from './components/slide'
import WelcomeFilm from './components/Welcome'
import films from './components/Films'
import MovieOfDay from './components/Today';
import './App.css';
import Footer from './components/Footer';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Tous les films');
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrer les films en fonction de la catégorie sélectionnée
  const filteredFilms = films.filter(film => {
    if (selectedCategory === 'Tous les films') {
      return true;
    }
    return film.categorie === selectedCategory;
  });

  return (
    <>
      <WelcomeFilm
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <MovieOfDay />
      <SlideFilm
        selectedCategory={selectedCategory}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm} />
      <Footer />
    </>
  );
}

export default App;





