import "./App.css";
import React,{ useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import Payment from "./components/Payment";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom"


function App() {
  const [mode,setMode] =useState('light'); //whether dark mode enables or not
  const [alert,setAlert]= useState(null);
  const showAlert= (message,type)=>{
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);

    },600)
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    
  }
  const toggleMode=(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='#0a0a33';
      showAlert('Dark mode has been enabled','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert('Light mode has been enabled','success');
    }
  }
  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>  
      <div className="container my-3">
        <Routes>   
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>} />
          <Route path="/payment" element={<Payment mode={mode} />} />
        </Routes>
      </div>
      
      
   </Router>

  );
}

export default App;
