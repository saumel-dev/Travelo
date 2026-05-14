import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { ArrowUpRight, Calendar, LocationArrow } from '@gravity-ui/icons';
import NavLink from './NavLink';
import Link from 'next/link';
const DestinationCard = ({ destinations }) => {
    return (
        <>
            <div className='container mx-auto flex flex-wrap gap-4'>
                {
                    destinations.map(destination =>
                        <div className='w-90 card' key={destination._id}>
                            <div className='card-header'>
                                <Image
                                    src={destination.imageUrl}
                                    height={400}
                                    width={400}
                                    alt={destination.destinationName}
                                    className='max-h-[200px] rounded-md'
                                ></Image>
                            </div>
                            <div className='card-body'>
                                <div className='flex items-center pt-2 gap-1 justify-between'>
                                    <div>
                                        <LocationArrow></LocationArrow>
                                        <p className='text-sm'>{destination.country}</p>
                                    </div>
                                    <div>
                                        <p>{destination.price}<span>/person</span></p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h1 className='font-semibold'>{destination.destinationName}</h1>
                                        <div className='flex items-center text-[12px] gap-1'>
                                            <Calendar></Calendar>
                                            <p>{destination.duration}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-1 card-footer'>
                                <Link href={`/destinations/${destination._id}`}><button className='text-sky-400 cursor-pointer'>Book Now </button></Link>
                                <ArrowUpRight className='text-sky-400'></ArrowUpRight>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default DestinationCard;