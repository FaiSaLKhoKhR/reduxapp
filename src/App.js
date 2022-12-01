import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';

function App() {
  return (
    <>
      <Navbar/>
      <p>For Redux: npm i redux react-redux redux-thunk</p>
      <hr />
    <div className="container">
      <Shop/>
    </div>
    </>
  );
}

export default App;
