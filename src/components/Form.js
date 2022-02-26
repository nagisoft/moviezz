import axios from 'axios';
import React, { useEffect,useState } from 'react';
import Card from './Card';

function Form() {

    const [moviesData, setMoviesData] = useState([]);
    const [search, setSearch] = useState("code");
    const [sortGoodBad, setSortGoodBad] = useState(null);
    const [sortLatest, setSortLatest] = useState(null);

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=47e40d3317515bb3eee4dfded788c54e&query=${search}&language=en-US&page=1&include_adult=false`).then((res)=> setMoviesData(res.data.results));
        
    },[search]);


  return (
  <div className='form-component'>
          <div className="form-container">
              <form>
                <input type="text" placeholder='Enter Title' id="search-input"  onChange={(e) => setSearch(e.target.value)}/>
                <input type="submit" value="Search"/>
              </form>

              <div className="btn-sort-container">
                  <div className="btn-sort" id="goodToBad" onClick={(e) => {setSortGoodBad("goodToBad")
                    setSortLatest(null)
                  }}>
                        Best <span>➝</span>
                  </div>

                  
                  <div className="btn-sort" id="badToGood" onClick={(e) => setSortLatest("latestFirst")}>
                      Latest <span>➝</span>
                  </div>
              </div>
          </div>

          <div className='result'>
                {moviesData.slice(0,12)
                .sort((a,b) => {
                    if(sortGoodBad ==="goodToBad")
                        return b.vote_average - a.vote_average;
                    else if(sortGoodBad === "badToGood")
                        return a.vote_average - b.vote_average;
                })
                .sort((a,b)=>{
                     if(sortLatest ==="latestFirst"){
                         return b.release_date.split("-")[0] - a.release_date.split("-")[0];
                     }
                        
                }).map((movie)=>{
                    return (<Card key={movie.id} movie={movie}/>)
                })}
          </div>
  </div>);
}

export default Form;

