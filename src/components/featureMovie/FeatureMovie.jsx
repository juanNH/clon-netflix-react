import React from 'react'
import './FeatureMovie.css'


const FeatureMovie = ({item})=> {
    let firstDate = new Date(item.first_air_date);
    let genres = [];

    for (let i in item.genres){
        genres.push(item.genres[i].name)
    }

    let description = ''
    if (item.overview) {
        description = item.overview;
        if(description.length > 200){
            description = description.substring(0, 200)+'...'
        }
    }


    return (
        <section className="featured" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">
                        {item.original_name}
                    </div>
                    <div className="featured--info">
                        <div className="featured--points">
                            Calificacion: {item.vote_average}
                        </div>
                        <div className="featured--year">
                            {firstDate.getFullYear()}
                        </div>
                        <div className="featured--seasons">
                            Temporada{item.number_of_seasons !== 1 ? 's' : ''}: {item.number_of_seasons}
                        </div>
                    </div>
                    <div className="featured--description">
                        {description}
                    </div>
                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="featured--watchbutton">► Mirar</a>
                        <a href={`/list/add/${item.id}`}  className="featured--mylistbutton">+ Agregar a mi lista</a>
                    </div>
                    <div className="featured--genres">
                        <strong>Generos: {genres.join(', ')}</strong>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureMovie
