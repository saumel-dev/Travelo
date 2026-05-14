import DestinationCard from '@/Components/DestinationCard';
import { getAllDestinations } from '@/lib/data';
import React from 'react';

const DestinationsPage = async () => {
    const destinations = await getAllDestinations();
    console.log(destinations);
    return (
        <div>
            <h1 className='text-center text-2xl font-bold'>All Destinations:</h1>
            <DestinationCard destinations={destinations}></DestinationCard>
        </div>
    );
};

export default DestinationsPage;