import React, {useEffect, useState} from 'react';
import tmdb from './tmdb';
import MovieRow from './components/movieRow/MovieRow';
import './App.css'
import FeatureMovie from './components/featureMovie/FeatureMovie';
import Header from './components/header/Header';

const App = () => {

  const [movieList, setMovieList] = useState([]);

  const [featureData, setFeatureData] = useState([null]);

useEffect(() => {
  const loadAll = async () =>{
    // tomando la lista total
    let list = await tmdb.getHomeList();
    setMovieList(list);


    //Colocando featured de forma aleatoria
    let originals = list.filter(i=>i.slug === 'originals');
    let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
    let chosen = originals[0].items.results[randomChosen];
    let chosenInfo = await tmdb.getMovieInfo(chosen.id,'tv');    
    setFeatureData(chosenInfo);
  }
  loadAll();
}, []);

  return (
    <div className="page">
      
      <Header  />

      {featureData && 
        <FeatureMovie item={featureData}  />
      }

      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  )
}

export default App