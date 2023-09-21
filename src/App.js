// import logo from './logo.svg';
//import { useState } from 'react';
import { type } from '@testing-library/user-event/dist/type';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import React, { useState  } from 'react';
//import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Routes } from "react-router-dom";






// function App() {
//   const [mode,setMode] = useState("light"); // wethor darck mode is anable or not
//   const [alert,setAlert] = useState(null)


//   const showAlert = (message , type) => {
//     setAlert({
//       mag : message,
//       type : type 
//     })
//   }

//   const toggleMode = () => {
    
//     if( mode === "light"){
//       setMode ("dark");
//       document.body.style.backgroundColor = "gray"// color code
//       showAlert("Dark mode hass been enable ","success");
//   }
//   else {
//     setMode ("light");
//     document.body.style.backgroundColor = "white"
//     showAlert("Light mode has been enable ","success");
//   }
// }
//   return (




//       <>
       
//         {/* <Navbar title= "TextUtils" aboutText="About Text"/> */}
//         {/* {<Navbar />} */}
//         {<Navbar title= "TextUtils" mode={mode} toggleMode = {toggleMode} />}
//         <Alert alert = {alert}/>
//         <div className="container my-3">
//         {<TextForm heading = "Enter the text to analyze" mode ={mode}/>}
//         {/* <About/> */}
//         </div>
      
//       </>


//   );
// }


// export default App;




function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TitalUtils - Darkmood';
      setInterval(() => {
        document.title = 'TitalUtils - Darkmood1111111111111111111';
      },2000);
      setInterval(()=>{
        document.title = "install ths app now";
      },1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TitalUtils - Light mood'
    }
  };

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
        <Route exact path='/about' element={<About />} />
        <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
      </Routes>

        </div>
        </Router>
       
    </>
  );
}

export default App;