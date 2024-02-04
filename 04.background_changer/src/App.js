import { useState } from "react";


function App() {
  const [color, setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-700" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-11 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl">
          <button onClick={()=>setColor("red")} className="outline-none px-4 py-2 rounded-full shadow-xl" style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("green")} className="outline-none px-4 py-2 rounded-full shadow-xl" style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>setColor("blue")} className="outline-none px-4 py-2 rounded-full shadow-xl" style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>setColor("white")} className="outline-none px-4 py-2 rounded-full shadow-xl" style={{backgroundColor:"white"}}>White</button>
          <button onClick={()=>setColor("pink")} className="outline-none px-4 py-2 rounded-full shadow-xl" style={{backgroundColor:"pink"}}>pink</button>
          <button onClick={()=>setColor("orange")} className="outline-none px-4 py-2 rounded-full shadow-xl" style={{backgroundColor:"orange"}}>Orange</button>
          <button onClick={()=>setColor("grey")} className="outline-none px-4 py-2 rounded-full shadow-xl" style={{backgroundColor:"grey"}}>Grey</button>
          <button onClick={()=>setColor("yellow")} className="outline-none px-4 py-2 rounded-full shadow-xl" style={{backgroundColor:"Yellow"}}>Yellow</button>
          <button onClick={()=>setColor("brown")} className="outline-none px-4 py-2 rounded-full shadow-xl" style={{backgroundColor:"brown"}}>Brown</button>
        </div>
      </div>
    </div>
  );
}

export default App;
