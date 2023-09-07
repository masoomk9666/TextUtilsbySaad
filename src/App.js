import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [switchText, setSwitchText] = useState('Enable Dark Mode');
  // const [switchTextColor, setSwitchTextColor] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null)
  const showAlert =(message , type)=>{
     setAlert({
      msg : message,
     type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
    
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      // setSwitchTextColor('light')
      setSwitchText('Disable Dark Mode');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
      document.title = 'TextUtilsbySaad - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtilsbySaad - Is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtilsbySaad Now!';
      // }, 1500);

    }
    else{
      setMode('light')
      // setSwitchTextColor('dark')
      setSwitchText('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", 'success');
      document.title = 'TextUtilsbySaad - Light Mode'
    }
  }
  return (
    <>
      <Router>
      <Navbar title="TextUtilsbySaad" aboutText="About" mode={mode} switchText={switchText}  toggleMode ={toggleMode}/>
      {/* <Navbar  /> */}
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />}/>
          <Route exact path="/about" element={ <About />}/>
        </Routes>
      </div>
      </Router>
    </>
    
  );
}

export default App;
