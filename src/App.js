import React from 'react';
import Data from './components/data/Data'
import Search from './components/search/Search'
import "./App.css"
const App = () => {
  return (
    <div className="App">
      <div>
        <Search />
        <Data />
      </div>
    </div>
  );
}

export default App;
