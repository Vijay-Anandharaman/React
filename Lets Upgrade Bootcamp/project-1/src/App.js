import { useState, useEffect } from 'react'

function App() 
{

  const [color, setColor] = useState("yellow")
  const click = color => {
    setColor(color)
  }
  useEffect(()=>{
    document.body.style.backgroundColor = color
  }, [color])

  return (
    <div className="App">
      <button onClick =
      {
        () => click("red")
      }>Change Color</button>
      <div class>Changing background color by clicking toggle</div>
    </div>
  );
}

export default App;