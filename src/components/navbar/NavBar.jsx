import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

function NavBar() {
    return (
        <nav className="w-full h-32 flex justify-between items-center border-b border-black">
            <Link to="/" className="h-full">
                <img src={Logo} alt="logo" className="h-full" />
            </Link>
            <div className="flex flex-col h-full w-full justify-between">
                <div className="bg-teal-600 flex justify-around items-center">
                    <Link to="/locations" className="hover:bg-teal-400 flex-1 p-4 text-black font-bold text-center">
                        Locations/Hours
                    </Link>
                    <Link to="/events" className="hover:bg-teal-400 flex-1 p-4 text-black font-bold text-center">
                        Events
                    </Link>
                    <button className="hover:bg-teal-400 flex-1 p-4 text-black font-bold">Get a Library Card</button>
                    <button className="hover:bg-teal-400 flex-1 p-4 text-black font-bold">Reserve a Meeting Room</button>
                    <Link to="/donate" className="hover:bg-teal-400 flex-1 p-4 text-black font-bold text-center">
                        Donate
                    </Link>
                    <button className="hover:bg-teal-400 flex-1 p-4 text-black font-bold">Career</button>
                </div>
                <div className="flex justify-around items-center w-5/6 my-0 mx-auto">
                    <button className="text-black font-bold p-4 hover:bg-gray-200">Books &amp; More</button>
                    <button className="text-black font-bold p-4 hover:bg-gray-200">Digital Library</button>
                    <button className="text-black font-bold p-4 hover:bg-gray-200">Research &amp; Learn</button>
                    <button className="text-black font-bold p-4 hover:bg-gray-200">Help</button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
