import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FilteredPagination from './FilteredPagination'
import Search from './Search'
import axios from 'axios'
import Info from './info';
import Login from './Login';


function Main() {
  const [checkedState, setCheckedState] = useState([]);
  const types = useRef([])

  useEffect(() => {
    async function getTypes() {
      const result = await axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/types.json');
      types.current = result.data.map(type => type.english);
      setCheckedState(new Array(result.data.length).fill(false))
    }
    getTypes();
  }, [])

  return (
    <>
      <Login/>
      <Search types={types} checkedState={checkedState} setCheckedState={setCheckedState} />
      <FilteredPagination types={types} checkedState={checkedState} />
      <Info/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Main />
);