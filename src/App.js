// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';


function App() {
  let todos=[
    {
      sno: 1,
      title: "abc",
      desc: "xhbxdh qwdhu"
    },
    {
      sno: 2,
      title: "def",
      desc: "xhbxdh qwdhu huhu"
    },{
      sno: 3,
      title: "ghi",
      desc: "xhbxdh qwdhu gyuy"
    }
  ]
  return (
    // <div classNameName="App">
    //   <header classNameName="App-header">
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <Header title="To do List"  searchbar={false}/>
    <Todos todo={todos}/>
    <Footer/>
    </>
  );
}

export default App;
