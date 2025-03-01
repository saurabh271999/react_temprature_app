import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0);
let age = 20
let canwatch = 'not available'
if(age >= 18) canwatch = 'available'
  return <>
<button>{canwatch}</button>

  </>;
}

export default App;
