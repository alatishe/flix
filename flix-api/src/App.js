import './App.css';
import React, { useEffect, useState } from "react";

export async function getFilmDetails() {
  const filmUrl = await fetch(
    `https://api.flixpremiere.com/v1/films/filter/now_showing?limit=10`
  ).then((res) => res.json());
  return (filmUrl);
}

function App() {

  const [filmList, setFilmList] = useState([]);
  const [ListTitle, setFilmTitle] = useState();

  const [repeater,setRepeater]= useState(0);

  useEffect(() => {
    async function getData() {
      const apiData = await getFilmDetails();
      const filmList = apiData.films;
      const ListTitle = apiData.title;
      setFilmList(filmList);
      setFilmTitle(ListTitle);
    }
    getData();
    setTimeout(() => setRepeater(prevState=>prevState+1), 50000);
  }, [repeater]);

  let minDuration = 5500;

  const filmTitles = filmList.map((film) => {

    return film.duration_seconds > minDuration ? (
      <div value={film} key={film.id}>
      {film.title} ({film.duration_seconds} seconds)
      </div>
    ) : "";
  });

  console.log(filmTitles);
  return (
    <div className="App">
      <header className="App-header">
      <h2>Film List Title: {ListTitle}</h2>
      <div>{filmTitles}</div>
      </header>
    </div>
  );
}

export default App;
