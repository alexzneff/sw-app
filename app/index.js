const React = require('react');
const ReactDOM = require('react-dom');

// class HelloWorld extends React.Component {
//     render() {
//       return (
//         <div>
//           Hello World
//         </div>
//       );
//     }
//   }

// ReactDOM.render(
//     <HelloWorld/>,
//     document.getElementById('myapp')
// );

const root = document.getElementById('myapp');
root.innerHTML = '<h2>My App goes here!</h2>';