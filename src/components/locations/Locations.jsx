import React from 'react';
import Map from '../../assets/images/locations-map.png';

const locations = [
    { name: 'Broadneck', address: '1275 Green Holly Drive, Annapolis, MD 21409', number: '(410) 222-1905' },
    { name: 'Busch Annapolis', address: '1410 West Street in Annapolis, MD 21401', number: '' },
    { name: 'Brooklyn Park', address: '1 East 11th Avenue, Baltimore, MD 21225', number: '(410) 222-6260' },
    { name: 'Crofton', address: '1681 Riedel Road, Crofton, MD 21114', number: '(410) 222-7915' },
    { name: 'Deale', address: '5940 Deale-Churchton Road, Deale, MD 20751', number: '(410) 222-1925' },
    { name: 'Discoveries: The Library at the Mall', address: '2260 Annapolis Mall Road, Annapolis, MD 21401', number: '(410) 222-0133' },
    { name: 'Eastport-Annapolis Neck', address: '269 Hillsmere Drive, Annapolis, MD 21403', number: '(410) 222-1770' },
    { name: 'Edgewater', address: '25 Stepneys Lane, Edgewater, MD 21037', number: '(410) 222-1538' },
    { name: 'Glen Burnie', address: '1010 Eastway, Glen Burnie, MD 21060', number: '(410) 222-6270' },
    { name: 'Linthicum', address: '400 Shipley Road, Linthicum, MD 21090', number: '(410) 222-6265' },
    { name: 'Maryland City at Russett', address: '3501 Russett Common, Laurel, MD 20724', number: '(410) 222-1070' },
    { name: 'Mountain Road', address: '4730 Mountain Road, Pasadena, MD 21122', number: '(410) 222-6699' },
    { name: 'Odenton', address: '1325 Annapolis Road, Odenton 21113', number: '(410) 222-6277' },
    { name: 'Riviera Beach', address: '1130 Duvall Highway, Pasadena, MD 21122', number: '(410) 222-6285' },
    { name: 'Severn', address: '2624 Annapolis Road, Severn, MD 21144', number: '(410) 222-6280' },
    { name: 'Severna Park', address: '45 West McKinsey Road, Severna Park, MD 21146', number: '(410) 222-6290' },    
    { name: 'Library Headquarters Administrative Offices only', address: '5 Harry S. Truman Parkway, Annapolis, MD 21401', number: '(410) 222-7371' },
];

function Locations() {
    return (
        <div className="p-8 flex">
            <div className="w-1/2 h-full">
                <p className="px-2 mb-2 text-xl">Locations and Hours</p>
                <div className="flex flex-wrap justify-between overflow-scroll">
                    {locations.map((location) => (
                        <div key={location.name} className="w-5/12 bg-gray-200 py-4 px-2 mx-1 my-2 whitespace-no-wrap rounded">
                            <h6>{location.name}</h6>
                            <p>{location.address}</p>
                            <p>{location.number}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-1/2 top-0 sticky flex justify-center items-center">
                <img src={Map} alt="Map of all the AACPL locations."/>
            </div>
        </div>
    );
}

export default Locations;
