import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import SortByName from './SortByName';
import SortByAge from './SortByAge'



ReactDOM.render(
  <>
  <h1 style={{color: "red"}}>Unsorted Data</h1>
  <App/>
  <h1 style = {{color: "Blue"}}>Sorted by Name in Ascending order</h1>
  <SortByName/>
  <h1 style = {{color: "green"}}>Sorted by Age in Ascending order</h1>
  <SortByAge/>
  </>,
  document.getElementById('root')
)


