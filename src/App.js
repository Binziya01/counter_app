import { useState } from "react";


function App() {
  const [count, setCount]=useState(0)

  const increment=()=>{
    count<10? setCount(count+1): setCount(count)
   
  }

  const decrement=()=>{
    count>1? setCount(count-1): setCount(count)
    
    
  }
  const reset=()=>{
    setCount(0)
  }
  
  return (
    <div className="flex flex-col justify-center items-center gap-10  min-h-screen bg-black ">
      <div>
      
      <span className="px-6 bg-red-600 rounded-full text-5xl text-white"> {count}</span>
      </div>
      <div className="flex gap-8 ">
      <button onClick={increment} className="flex justify-center font-semibold item-center h-12 w-12 bg-pink-600 text-3xl rounded-md">+</button>
      <button onClick={reset} className="h-12 w-28 bg-blue-600 font-semibold text-xl rounded-md">Reset</button>
      <button onClick={decrement} className="flex justify-center font-semibold item-center h-12 w-12 bg-pink-600 text-3xl rounded-md" >-</button>
      </div>
    </div>
    
  );
}

export default App;
