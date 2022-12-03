import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// test my Hook
// const state = [];
// let index = 0;

// const useState = defaultValue => {
//   const id = index++;

//   if (state[id]) {
//     return state[id];
//   }

//   const setValue = newValue => {
//     state[id][0] = newValue;
//     render();
//   };

//   const currentState = [defaultValue, setValue];
//   state[id] = currentState;

//   return currentState;
// };

// const TestHook = props => {
//   const [value, setValue] = useState('start');
//   const [text, setText] = useState('drugi stan.');
//   return (
//     <>
//       <h1>Test</h1>
//       <p>{text}</p>
//       <input type='text' value={value} onChange={e => setValue(e.target.value)} />
//     </>
//   );
// };

// // const root = ReactDOM.createRoot();
// function render() {
//   index = 0;

//   ReactDOM.render(
//     <React.StrictMode>
//       <TestHook />
//       {/* <App /> */}
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }

// render();
