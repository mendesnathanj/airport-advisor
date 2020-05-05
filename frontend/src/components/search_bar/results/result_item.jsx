import React from 'react';
import { Link } from "react-router-dom";

const ResultItem = ({ handleClick, airport }) => (
  <Link onClick={handleClick} to={`/airports/${airport.id}`} className='result-item-link'><div className="result-item">{ `${airport.name} (${airport.code})` }</div></Link>
);

export default ResultItem;
