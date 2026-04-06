import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function App() {

  const [item,setItem]=useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
fetch("http://localhost:3000")
.then(res=>res.json())
.then(data=>{
  setItem(data);
  setLoading(false);
})
.catch(err=>console.log("Error fetching",err))

const moveToEnd=(id)=>{
  const filtered=item.filter(item=>item.id!==id);
  setItem([...filtered,item.find(item=>item.id===id)])
}

  },[])
  return (
    <div className='App'>

      <h1>Container</h1>
      <div className='container-wrapper'>
        {item.map((item)=>(
             <div key={item.id}
             className='card'
             style={{borderLeft:`10px ${item.color}`}}
             >
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <button onClick={()=>moveToEnd(item.id)}>Move to End</button>
              
            </div>
        ))}
        </div>     
    </div>
  )
}
