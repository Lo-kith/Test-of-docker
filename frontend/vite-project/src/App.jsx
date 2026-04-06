import React, { useEffect, useState } from 'react';

export default function App() {
  const [items, setItems] = useState([]); // Use plural 'items' for clarity
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Added /container to the URL
    fetch("http://localhost:3000/container")
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setLoading(false);
      })
      .catch(err => console.log("Error fetching", err));
  }, []);

  // Moved outside useEffect so the button can access it
  const moveToEnd = (id) => {
    const target = items.find(i => i.id === id);
    const filtered = items.filter(i => i.id !== id);
    setItems([...filtered, target]);
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className='App'>
      <h1>Container </h1>
      <div className='container-wrapper'>
        {items.map((item) => (
          <div key={item.id}
               className='card'
               style={{ borderLeft: `10px solid ${item.color}`, margin: '10px', padding: '10px' }}
          >
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <button onClick={() => moveToEnd(item.id)}>Move to End</button>
          </div>
        ))}
      </div>     
    </div>
  );
}