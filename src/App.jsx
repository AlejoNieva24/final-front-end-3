import './Styles/index.css'
import { Route, Routes } from "react-router";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Projects from "./Routes/Projects"
import Home from "./Routes/Home";
import { useState } from 'react'
import { ThemeContext, themes } from './Components/utils/global.context'


function App() {
  const [theme, setTheme] = useState(themes.light)
  
  function themeHandler() {
    if(theme === themes.dark) setTheme(themes.light)
    if(theme === themes.light) setTheme(themes.dark)
  }
  return (
  <ThemeContext.Provider value={{theme,themeHandler}}>
    <div style={{background:theme.color2, color:theme.colorLetra}}>
      <Navbar/>
      <div className="App">
        <Routes>
          <Route path="*" element={<div>404</div>} />
          <Route path="/" element={<Home/>} />
          <Route path="/project/*" element={<Projects />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  </ThemeContext.Provider>
  );
}

export default App;
