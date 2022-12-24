import React, { useEffect, useState } from 'react';
import './Home.css';
import Searcher from './Searcher';
import Grid from './Grid'


function Home() {

  return (
    <div className="Home">
      <Searcher />
      <Grid />
    </div>
  );
}

export default Home;
