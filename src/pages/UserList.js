
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Card from "../components/Card";
import Header from '../components/Header';

function UserList() {

   const [listData, setListData] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=47e40d3317515bb3eee4dfded788c54e&language=fr-FR`
        )
        .then((res) => setListData((listData) => [...listData, res.data]));
    }
  }, []);

  return <div className='user-list-page'>
      <Header />
      <h2>Favorites <span>❤️</span></h2>
      <div className="result">
        {listData.length > 0 ? (
          listData.map((movie) => <Card movie={movie} key={movie.id} />)
        ) : (
          <h2>No Favorites for now</h2>
        )}
      </div>
  </div>;
}

export default UserList;
