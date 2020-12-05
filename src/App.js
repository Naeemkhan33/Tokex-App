import { Route, Switch } from 'react-router-dom';
import './App.css';

// Pages
import Home from './pages/Home';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import ChestGame from './pages/ChestGame';

function App() {
  return (
    <div className="App vh-100 bg-light pt-5">
     <Header/>
      <Switch>
        <Route path='/home' component={Home} />
        <Route exact path='/' component={ChestGame}  />
      </Switch>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
