import React from 'react';
import { useState } from 'react';
import jediLogo from './assets/jediLogo.png';
import './App.css';
import SearchBar from './SearchBar';

const FilmList = ({ list }) => {
  return (
    <ul>
      {list.map((film) => (
        <ul>
          <li>
            <span>Title:</span> {film.title}
          </li>
          <li>
            <span>Director:</span> {film.director}
          </li>
          <li>
            <span>Producer:</span> {film.producer}
          </li>
          <li>
            <span>Opening Crawl:</span> {film.opening_crawl}
          </li>
          <li>
            <span>Release Date:</span> {film.release_date}
          </li>
          <li>
            <span>Number of characters:</span> {film.characters.length}
          </li>
          <li>
            <span>Number of starships:</span> {film.starships.length}
          </li>
        </ul>
      ))}
    </ul>
  );
};

// React funktion komponenten Filmlist loopar igenom en array lista
// för att hämta specifika nycklar och lägga in de i en onumrerad lista.
// Sökresultatet presenteras i text direkt under sökrutan.

function App() {
  const [filmResult, setFilmResult] = useState([]);

  return (
    <div>
      <img src={jediLogo} className="logo react" alt="Jedi logo" />
      <h1>The Jedi Archive</h1>
      <p className="read-the-docs">
        Use the search bar to access Star Wars data.
      </p>
      <SearchBar callback={setFilmResult} />
      <FilmList list={filmResult} />
    </div>
  );
}

// React funkion komponent App returnerar en div som innehåller
// html-komponenter som img, h1, p och två HTML-block som innehåller
// React funktion komponent “Searchbar” och React funktion komponent
// “Filmlist”.

export default App;
