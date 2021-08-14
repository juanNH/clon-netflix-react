import React from 'react'
import './FeatureMovie.css'


const FeatureMovie = ({item})=> {
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

                    </div>
                    <div className="featured--points">
                        Calificacion: {item.vote_average}
                    </div>
                    <div className="featured--year">
                        404
                    </div>
                    <div className="featured--seasons">
                        Temporadas: {item.number_of_seasons}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureMovie
