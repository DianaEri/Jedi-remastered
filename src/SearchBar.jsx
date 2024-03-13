import { useEffect, useState } from 'react';

let SWAPI_URI = 'https://swapi.info/api/films/';

const SearchBar = (args) => {
  const [value, setValue] = useState(''); // Text bar input
  const [matches, setMatches] = useState(0);

  const logData = (data) => {
    console.log('Data fetched...');
    console.log(data);
  };

  const logValue = (value) => {
    console.log('The Value is: ' + value);
  };

  const searchFilm = (value, films) => {
    const propsToMatch = [
      'title',
      'director',
      'opening_crawl',
      'producer',
      'release_date',
    ];

    let filmResult = [];

    value = value.trim();
    if (value.length < 1) {
      films = [];
    }

    let filmsFound = 0;
    for (const film of films) {
      for (const prop of propsToMatch) {
        if (prop in film) {
          if (film[prop].toLowerCase().indexOf(value.toLowerCase()) != -1) {
            console.log(film.title);
            console.log('Matched by: ' + prop);

            filmsFound++;
            console.log(matches)

            if(args.oneResultOnly && filmResult.length == 1)
            {
              break;
            }

            filmResult.push(film);
            break;
          }
        }
      }
    }

    setMatches(filmsFound);
    args.callback(filmResult);
  };

  useEffect(() => {
    fetch(SWAPI_URI)
      .then((response) => response.json())
      .then((films) => searchFilm(value, films));
  }, [value]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search.."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <p className="read-the-docs">
        Number of movies matching: {matches}
      </p>
    </div>
  );
};

// React funktion komponent “Searchbar” har som roll att ta värdet
// från textfältet och jämföra det med API Films och hitta matchningar.
// Den är skiftlägesokänslig och söker igenom filmtitlar, producenter,
// regissörer, utgivningsdatum och filmsammanfattning. React funktion
// komponent “Searchbar” använder React props för att matcha värdet med
// API. Så nyckeln från API har gjorts om till en React Props så att
// funktionen kan läsa den som ett argument. Min React Props heter
// “prop”, och är en sträng (string). Jag skapade en if-funktion inuti
// en if-funktion, inuti en for-funktion som i sin tur är inuti en
// for-funktion.

export default SearchBar;
