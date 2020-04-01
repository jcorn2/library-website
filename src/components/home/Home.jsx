import React from 'react';

function Home() {
    return (
        <div class="grid grid-cols-4 h-full">
            <div class="col-span-1 mx-auto w-5/6 mb-auto mt-32 border border-black">
                <div class="bg-teal-600 p-2 text-center">New York Times Bestsellers</div>
                <div class="bg-gray-300 p-2">Category</div>
                <ul class="p-4">
                    <li className="p-2">Book 1</li>
                    <li className="p-2">Book 2</li>
                    <li className="p-2">Book 3</li>
                    <li className="p-2">Book 4</li>
                    <li className="p-2">Book 5</li>
                    <li className="p-2">Book 6</li>
                    <li className="p-2">Book 7</li>
                    <li className="p-2">Book 8</li>
                </ul>
            </div>
            <div class="col-start-2 col-end-4">Main Area</div>
            <div class="ccol-span-4">
            <div class="col-span-1 mx-auto w-5/6 mb-auto mt-32">
                <div className="border border-black">
                    <div class="bg-teal-600 p-2 text-center">Events and More</div>
                    <ul class="p-4">
                        <li className="p-2">Event 1</li>
                        <li className="p-2">Event 2</li>
                        <li className="p-2">Event 3</li>
                        <li className="p-2">Event 4</li>
                    </ul>
                </div>
                <div className="border border-black mt-8">
                    <div className="bg-teal-600 p-2 text-center">Library News</div>
                    <ul className="p-4">
                        <li className="p-2">Library News 1</li>
                        <li className="p-2">Library News 2</li>
                        <li className="p-2">Library News 3</li>
                        <li className="p-2">Library News 4</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Home;

