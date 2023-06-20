import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"
import AllProducts from './components/Products'
function App() {
  const [data,setdata]=useState([])
  useEffect(()=>{
   axios.get('http://192.168.2.181:5500/api/getProduct')
   .then((res)=>{
    setdata(res.data)
   })
   .catch((err)=>{
    console.log(err)
   })
  },[])
  return (
    <div className="App">
      
     {data.map((el)=>(<AllProducts product={el}/>))}
   
    </div>
  );
}

export default App;
