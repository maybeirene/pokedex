import React from 'react';
import './Searcher.css';

function Searcher() {
  return (
    <div className="Searcher">
        <form className="Searcher__form" action="" >
            <input className="Searcher__input" placeholder="Search..." type="text" />
            <button className="Searcher__button" type="submit">
              Go!
            </button>
        </form>
    </div>
  );
}

export default Searcher;