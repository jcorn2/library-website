import React from 'react';

function FilterMenu() {
    return (
        <div className="w-1/6 bg-gray-200 p-2 h-full">
            <h5>Filters</h5>
            <div>
                <div>
                    <h6>Keyword Search</h6>
                    <input type="text" id="search-bar" placeholder="Search" className="p-2" />
                </div>
                <div>
                    <h6>Ongoing Events</h6>
                    <form className="flex flex-col p-2">
                        <div>
                            <input type="radio" value="Show" id="Show" className="mr-2" />
                            <label htmlFor="Show">Show</label>
                        </div>
                        <div>
                            <input type="radio" value="Hide" id="Hide" className="mr-2" />
                            <label htmlFor="Hide">Hide</label>
                        </div>
                    </form>
                </div>
                <div>
                    <h6>Registration Types</h6>
                    <form className="flex flex-col p-2">
                        <div>
                            <input type="radio" value="Any" id="Any" className="mr-2" />
                            <label htmlFor="Any">Any</label>
                        </div>
                        <div>
                            <input type="radio" value="Registration Required" id="Registration-Required" className="mr-2" />
                            <label htmlFor="Registration-Required">Registration Required</label>
                        </div>
                        <div>
                            <input type="radio" value="No Registration" id="No-Registration" className="mr-2" />
                            <label htmlFor="No-Registration">No Registration</label>
                        </div>
                    </form>
                </div>
                <div>
                    <h6>Start Time</h6>
                    <input type="date" />
                    <h6>End Time</h6>
                    <input type="date" />
                </div>
                <div>
                    <h6>Age</h6>
                    <form className="flex flex-col p-2">
                        <div>
                            <input type="radio" value="Preschool" id="Preschool" className="mr-2" />
                            <label htmlFor="Preschool">Preschool</label>
                        </div>
                        <div>
                            <input type="radio" value="Kids" id="Kids" className="mr-2" />
                            <label htmlFor="Kids">Kids</label>
                        </div>
                        <div>
                            <input type="radio" value="Teens" id="Teens" className="mr-2" />
                            <label htmlFor="Teens">Teens</label>
                        </div>
                        <div>
                            <input type="radio" value="Adults" id="Adults" className="mr-2" />
                            <label htmlFor="Adults">Adults</label>
                        </div>
                        <div>
                            <input type="radio" value="All" id="All" className="mr-2" />
                            <label htmlFor="All">All</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FilterMenu;
