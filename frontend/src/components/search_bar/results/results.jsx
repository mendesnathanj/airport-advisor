import React from 'react';
import "./Results.scss";
import ResultItem from './result_item';

const Results = ({ handleClear, searchItems }) => {
  if (searchItems.length === 0) return null;

  const resultItems = searchItems
                        .map((airport, i) =>
                          <ResultItem handleClick={handleClear} key={i} airport={airport} />
                        );

  return <div className="search-results">{resultItems}</div>;
}

export default Results;
