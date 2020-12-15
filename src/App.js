
import { useState } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';

// Pages
import Home from './pages/Home';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import ChestGame from './pages/ChestGame';
import ReferralSection from './pages/ReferralSection';
import SideBar from './components/sideBar/SideBar';
import { Col, Row } from 'react-bootstrap';


function App({location}) {
  const [show, setShow] = useState(false);
  return (
    <div className="App vh-100 bg-light pt-5">
     <Header onClickToggle={() => setShow(!show)}/>
      <Switch>
        <Row className='mx-0 main-height'>
        <SideBar className={show ? 'sidebar-c border shadow-sm' : 'w-0'}/>
         <Col className='px-0 h-100'>
         <Route exact path='/' component={Home} />
        <Route exact path='/chestGame' component={ChestGame}  />
        <Route exact path='/referralSection' component={ReferralSection}  />
        </Col>
        </Row>
      </Switch>
      <Footer location={location}/>
    </div>
  );
}

export default withRouter(App);
