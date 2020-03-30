import React from 'react';
import Logo from '../../assets/images/logo.png';

function NavBar() {
    return (
        <nav class="w-full h-32 flex justify-between items-center border-b border-black">
            <img src={Logo} alt="logo" class="h-full" />
            <div class="flex flex-col h-full w-full justify-between">
                <div class="bg-teal-600 flex justify-around items-center">
                    <button class="hover:bg-teal-400 flex-1 p-4 text-black font-bold">Locations/Hours</button>
                    <button class="hover:bg-teal-400 flex-1 p-4 text-black font-bold">Events</button>
                    <button class="hover:bg-teal-400 flex-1 p-4 text-black font-bold">Get a Library Card</button>
                    <button class="hover:bg-teal-400 flex-1 p-4 text-black font-bold">Reserve a Meeting Room</button>
                    <button class="hover:bg-teal-400 flex-1 p-4 text-black font-bold">Donate</button>
                    <button class="hover:bg-teal-400 flex-1 p-4 text-black font-bold">Career</button>
                </div>
                <div class="flex justify-around items-center w-5/6 my-0 mx-auto">
                    <button class="text-black font-bold p-4 hover:bg-gray-200"n>Books &amp; More</button>
                    <button class="text-black font-bold p-4 hover:bg-gray-200">Digital Library</button>
                    <button class="text-black font-bold p-4 hover:bg-gray-200">Research &amp; Learn</button>
                    <button class="text-black font-bold p-4 hover:bg-gray-200">Help</button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
