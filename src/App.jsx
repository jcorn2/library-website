import React from 'react';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Locations from './components/locations/Locations';
import NavBar from './components/navbar/NavBar';
import './App.css';
import './assets/main.css'

function App() {
  return (
    <div class="w-screen h-screen bg-gray-100 flex flex-col overflow-hidden">
      <NavBar />
      <Locations />
      <Footer />
    </div>
  );
}

export default App;
