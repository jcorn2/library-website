import React from 'react';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import './App.css';
import './assets/main.css'

function App() {
  return (
    <div class="w-screen h-screen bg-gray-100 flex flex-col">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
