import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Locations from './components/locations/Locations';
import NavBar from './components/navbar/NavBar';
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
        </Switch>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
