const API_KEY = 'a9563946a44445795b4e8183ec65ccc5';
const API_BASE = 'https://api.themoviedb.org/3';


/*
- originales de netflix
- recomendados trending
- top rated
- accion
- terror 
- romance
- documentales
*/

const basicFetch = async (endpoint) => {
    const REQ = await fetch(`${API_BASE}${endpoint}`);
    const JSON = await REQ.json();
    return JSON;
}


const tmdb =  {
    getHomeList: async () => {
        return [
            {
                slug:'originals',
                title:'Originales de netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=es-ES&api_key=${API_KEY}`)
            },
            {
                slug:'trending',
                title:'recomendados para usted',
                items: await basicFetch(`/trending/all/week?language=es-ES&api_key=${API_KEY}`)
            },
            {
                slug:'toprated',
                title:'Mejores reseñas',
                items: await basicFetch(`/movie/top_rated?language=es-ES&api_key=${API_KEY}`)
            },
            {
                slug:'action',
                title:'Accion',
                items: await basicFetch(`/discover/movie?with_genderes=28?language=es-ES&api_key=${API_KEY}`)
            },
            {
                slug:'comedy',
                title:'Comedia',
                items: await basicFetch(`/discover/movie?with_genderes=35?language=es-ES&api_key=${API_KEY}`)
            },
            {
                slug:'horror',
                title:'Terror',
                items: await basicFetch(`/discover/movie?with_genderes=27?language=es-ES&api_key=${API_KEY}`)
            },
            {
                slug:'romance',
                title:'Romance',
                items: await basicFetch(`/discover/movie?with_genderes=10749?language=es-ES&api_key=${API_KEY}`)
            },
            {
                slug:'documentary',
                title:'Documentales',
                items: await basicFetch(`/discover/movie?with_genderes=99?language=es-ES&api_key=${API_KEY}`)
            },
        ];
    }
}

export default tmdb

