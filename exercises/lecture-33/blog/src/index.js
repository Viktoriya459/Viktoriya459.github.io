import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
    
//     </React.StrictMode>
// );
// створити новий JSX-елемент з назвою jsxElement з таким вмістом:
// відобразити елемент jsxElement
const jsxElement = <h1>I am a JSX element</h1>;


// створити новий JSX-елемент header з таким вмістом:
// відобразити елемент header
const header = (
  <div>
    <h1>Welcome to React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
  </div>
);


// створити новий JSX-фрагмент з таким вмістом
// відобразити JSX-фрагмент
const jsxFragment = (
  <>
    <h1>Welcome to React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
  </>
);


// відобразити JSX-фрагмент
// відобразити елемент footer
const footer = <p>Copyright &copy; 2024</p>;
const allElements = (
  <div>
    {jsxElement}
    {header}
    {jsxFragment}
    {footer}
  </div>
);
root.render(
  <React.StrictMode>
    <App />
    {allElements}
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
