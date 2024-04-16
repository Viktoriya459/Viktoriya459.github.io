import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Lecture-33
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

  return (
    <>

      {jsxElement}
      {header}
      {jsxFragment}
      {footer}

    </>
  )
}

export default App
