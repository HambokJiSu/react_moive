import React, {useState, useEffect} from 'react';
import Moive from '../components/Moive';

function Home() {
  const apiUrl = `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`;

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (  await fetch(apiUrl) ).json();
    setMovies(json.data.movies);
    setLoading(false);
  }

  //  예전 방식임 Start
  // useEffect(() => {
  //   fetch(apiUrl)
  //     .then(  (response) => response.json() )
  //     .then(  (json) => {
  //       setMovies(json.data.movies);
  //       setLoading(false);
  //       console.log(json);
  //     })
  // }, []);
  //  예전 방식임 End

  useEffect(() => {
    getMovies();
  }, []);

  //console.log(movies);
  return (
    <div>
      {loading ? (<h1>Loading...</h1>) : movies.map(item => (
        <Moive 
          id={item.id} 
          m_cover_img={item.medium_cover_image} 
          title={item.title} 
          summary={item.summary} 
          genres={item.genres}
        />
        ))}
    </div>
  );
}

export default Home;