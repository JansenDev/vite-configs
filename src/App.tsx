import { useState } from 'react'
import { ReactComponent as Logo } from '@assets/images/cash.svg'
import reactLogo2 from "@assets/react.svg";
import './App.scss'

function App() {
  const [count, setCount] = useState(0)
  console.log(process.env.JAVA_HOME);
  const java_version = process.env.JAVA_HOME
  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}
        <Logo />
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo2} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br />
        <p>Java Version: {java_version}</p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App



