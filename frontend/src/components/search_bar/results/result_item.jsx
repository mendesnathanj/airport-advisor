import React from 'react';
import { Link } from "react-router-dom";

const ResultItem = ({ handleClick, airport }) => (
  // TODO: add url to redirect to specific airport later after routing is determined
  <Link onClick={handleClick} to={`/airports/${airport.id}`} className='result-item-link'><div className="result-item">{ airport.string }</div></Link>
);

export default ResultItem;
