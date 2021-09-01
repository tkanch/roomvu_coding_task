
import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import Video from './components/Video';

function App() {

  //defining state
  const [data,setData] = useState({
        fullname:'your name here',
        phnum:'555-5555-555',
        brkname:'your realty here'
    })

  //defining function
    const inputEvent =(e)=>{
      
      const inputData={
          name:e.target.name,
          value:e.target.value
      }
      const name=inputData.name
      const value=inputData.value
      setData((prevval)=>{
           return {
               ...prevval,
               [name]:value
               
           }
       })
   }

   
  //defining myFunc function
  const dispOverlay=()=>{
    
    setTimeout(function(){
    document.querySelector('#overlay1').style.display = "block";
    }, 3000);
   
   setTimeout(function(){
    document.querySelector('#overlay1').style.opacity = "0"; 
    document.querySelector('#overlay2').style.display = "block";
    }, 8000);

 setTimeout(function(){
  document.querySelector('#overlay2').style.opacity = "0"; 
  document.querySelector('#overlay3').style.display = "block"; 
  }, 20000);
  }


  
  return (
    <>
    <h1>Branded Real Estate Videos for Real Estate Agents</h1>
    <main>
        <Form data={data}  inputEvent={inputEvent}/>
        <Video data={data} dispOverlay={dispOverlay} />
    </main>

    </>
  )
}

export default App;
