import logo from './logo.svg';
import wavyback from './images/blackWevy.jpg';
import './App.css';

function App() {
  const name  = "EBEDI";
  return (
    <div className="App">
      <header className="header-cont">
          
        <nav className='header-cont'>
       <span className='logo'>&lt;{name}&gt; </span> 
      
          <ul className='link-cont'>
            <li className='nav-link'>
              <a >Home</a>
            </li>
            <li className='nav-link'>
              <a >Abaut</a>
            </li>
            <li className='nav-link'>
              <a >Poject</a>
            </li>
            <li className='nav-link'>
              <a >Contact</a>
            </li>
          </ul>
          <button className='demo-button'> Request Demo </button>
        </nav>
      </header>
      <div className='cont-back-one'>
         <img src={wavyback} className='cont-back' />
      </div>
     
    </div>
  
  );
}

export default App;
