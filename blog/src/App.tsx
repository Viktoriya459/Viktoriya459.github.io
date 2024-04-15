import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// створити новий JSX-елемент з назвою jsxElement з таким вмістом:
// відобразити елемент jsxElement
// створити новий JSX-елемент header з таким вмістом:
// відобразити елемент header
// створити новий JSX-фрагмент з таким вмістом
// відобразити JSX-фрагмент
// створити новий JSX-елемент footer з таким вмістом:
// відобразити елемент footer
const jsxElement = <h1>I am a JSX element</h1>;
const header = (
  <div>
    <h1>Welcome to React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
  </div>
);
const jsxFragment = (
  <>
    <h1>Welcome to React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
  </>
);
const footer = <p>Copyright &copy; 2024</p>;

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div> */}
      {jsxElement}
      {header}
      {jsxFragment}
      {footer}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <h3 style={{backgroundColor:'blue', color:'gold'}}>It's today: {today.toLocaleDateString()}</h3> */}
    </>
  )
}

export default App
