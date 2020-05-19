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
import Donate from './components/donate/Donate';
import LibraryCard from './components/libraryCard/LibraryCard';
import './App.css';
import './assets/main.css'

function App() {
  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-col overflow-hidden">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/locations" component={Locations} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/donate" component={Donate} />
          <Route exact path="/libraryCard" component={LibraryCard} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
