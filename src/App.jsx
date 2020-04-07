import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Locations from './components/locations/Locations';
import NavBar from './components/navbar/NavBar';
import Events from './components/events/Events';
import './App.css';
import './assets/main.css'

function App() {
  return (
    <div class="w-screen h-screen bg-gray-100 flex flex-col overflow-hidden">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/locations" component={Locations} />
          <Route exact path="/events" component={Events} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
