import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [moiveDetail, setMoiveDetail] = useState([]);

    const { id } = useParams();
    //console.log(id);
    const getMovie = async () => {
        const json = await (
          await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json.data.movie);
        setMoiveDetail(json.data.movie);
        setLoading(false);
      };
    useEffect(() => {
        getMovie();
    }, []);
    return (
    <div>
        <h1>Detail</h1>
        {loading ? <h1>Now Loading...</h1> : 
            <div key={moiveDetail.id}>
                <img src={moiveDetail.large_cover_image} alt="" />
                <h3>{`Rating : ${moiveDetail.rating}`}</h3>
                <h3>{`Runtime : ${moiveDetail.runtime}min`}</h3>
            </div>
        }
    </div>
    );
}
export default Detail;