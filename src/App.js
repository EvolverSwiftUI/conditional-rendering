// import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import Welcome from './components/Welcome';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  state = {isLoggedIn: true};

  // renderAuthButton = () => {
  //   const {isLoggedIn} = this.state;
  //   if (isLoggedIn === true) {
  //     return <button>Log In</button>
  //   }
  //   return <button>Log Out</button>
  // }

  render() {
    // const {isLoggedIn} = this.state;

    // let authButton;
    // if (isLoggedIn === true) {
    //   authButton = <button>Log In</button>
    // } else {
    //   authButton = <button>Log Out</button>
    // }
    return(
      <div>
        {/* <Welcome greeting="Hello" user="Sivaram"/> */}
        {/* {this.renderAuthButton()}         */}
        {/* {authButton} */}
        {/* {isLoggedIn ? <button>Log Out</button> : <button>Log In</button>} */}
        {/* {isLoggedIn && <button>Log Out</button>}
        {!isLoggedIn && <button>Log In</button>} */}
        <Welcome />

      </div>
    )
  }
}


export default App;
