import React, {useEffect, useState} from 'react';
import tmdb from './tmdb';
import MovieRow from './components/movieRow/MovieRow';
import './App.css'
import FeatureMovie from './components/featureMovie/FeatureMovie';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Loading from './components/loading/Loading';


const App = () => {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState([null]);
  const [blackHeader, setBlackHeader] = useState(false);

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

useEffect(()=>{
  const scrolllistener = () =>{
    if(window.scrollY > 20) {
      setBlackHeader(true)
    } else {
      setBlackHeader(false)
    }
  }

  window.addEventListener('scroll',scrolllistener);
  return () => {
    window.removeEventListener('scroll',scrolllistener);
  }
},[])

  return (
    <div className="page">
      
      <Header black={blackHeader} />

      {featureData && 
        <FeatureMovie item={featureData}  />
      }

      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      
      <Footer  />
          {movieList.length <= 0 &&
            <Loading  />
          }
   
    </div>
  )
}

export default App