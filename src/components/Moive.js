import React from 'react';
import PropTypes from "prop-types";
import './Moive.css';
import {
  Link
} from "react-router-dom";

function Moive({id, m_cover_img, title, summary, genres}) {
  //  Link 사용시 브라우저가 새로고침 되지 않는다.
  return (
    <div key={id}>
        <img src={m_cover_img} alt="" />
        <h2>
          <Link to={`/moive/${id}`}>{title}</Link>
        </h2>
        <p>{summary}</p>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
  );
}

Moive.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Moive;