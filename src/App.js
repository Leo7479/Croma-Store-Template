import './App.css';
import ThemeContext from './ThemeContext';
import Header from './Components/Header';
import React, {useState, useEffect, useContext} from 'react';
import Main from './Components/Main';

function App() {
  var [theme, setTheme] = useState("dark");
  return (
    <div>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <Header/>
        <Main/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
