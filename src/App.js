import { Route, Switch } from 'react-router-dom';
import './App.css';

// Pages
import Home from './pages/Home';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import ChestGame from './pages/ChestGame';
import ReferralSection from './pages/ReferralSection';

function App() {
  return (
    <div className="App vh-100 bg-light pt-5">
     <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/chestGame' component={ChestGame}  />
        <Route exact path='/referralSection' component={ReferralSection}  />
      </Switch>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
