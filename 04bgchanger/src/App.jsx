import { useState } from 'react'

function App() {
  const[color, setColor] = useState('olive');


  return (
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {/* Red */}
          <button 
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          {/* Blue */}
          <button 
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
          {/* Green */}
          <button 
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          {/* Yellow */}
          <button 
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-md text-black shadow-lg"
          style={{backgroundColor: "yellow"}}
          >Yellow</button>
          {/* Purple */}
          <button 
          onClick={() => setColor("purple")}
          className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
          style={{backgroundColor: "purple"}}
          >Purple</button>
          {/* Brown */}
          <button 
          onClick={() => setColor("brown")}
          className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
          style={{backgroundColor: "brown"}}
          >Brown</button>
          {/* White */}
          <button 
          onClick={() => setColor("white")}
          className="outline-none px-4 py-1 rounded-md text-black shadow-lg"
          style={{backgroundColor: "white"}}
          >White</button>
          {/* Black */}
          <button 
          onClick={() => setColor("black")}
          className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
          style={{backgroundColor: "black"}}
          >Black</button>
          {/* Olive */}
          <button 
          onClick={() => setColor("olive")}
          className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
          style={{backgroundColor: "olive"}}
          >Olive</button>
          {/* Pink */}
          <button 
          onClick={() => setColor("pink")}
          className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
          style={{backgroundColor: "pink"}}
          >Pink</button>
          {/* Orange */}
          <button 
          onClick={() => setColor("orange")}
          className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
          style={{backgroundColor: "orange"}}
          >Orange</button>
          {/* Teal */}  
          <button 
          onClick={() => setColor("teal")}
          className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
          style={{backgroundColor: "teal"}}
          >Teal</button>
          {/* Navy */}    
          <button 
          onClick={() => setColor("navy")}
          className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
          style={{backgroundColor: "navy"}}
          >Navy</button>
          {/* Maroon */}      
          <button 
          onClick={() => setColor("maroon")}
          className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
          style={{backgroundColor: "maroon"}}
          >Maroon</button>
          {/* Indigo */}              
          <button 
          onClick={() => setColor("indigo")}
          className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
          style={{backgroundColor: "indigo"}}
          >Indigo</button>
          {/* Violet */}
          <button 
          onClick={() => setColor("violet")}
          className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
          style={{backgroundColor: "violet"}}
          >Violet</button>
          {/* Gray */}
          <button 
          onClick={() => setColor("cyan")}
          className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
          style={{backgroundColor: "cyan"}}
          >Cyan</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
