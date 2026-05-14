import DeleteCard from '@/Components/DeleteCard';
import EditModal from '@/Components/EditModal';
import { getDestination } from '@/lib/data';
import { ArrowLeft, Check, LocationArrow } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params;
    const destination = await getDestination(id);
    const { destinationName, country, category, price, duration, departureDate, imageUrl, description } = destination;
    return (
        <div className=' my-10 p-10'>
            <div className='flex justify-between'>
                <div className='flex items-center gap-1 text-gray-500'>
                    <ArrowLeft className='mb-1'></ArrowLeft>
                    <Link href={'/destinations'}>Back to Destinations</Link>
                </div>
                <div className='flex gap-2'>
                    <EditModal destination={destination}></EditModal>
                    <DeleteCard destination={destination}></DeleteCard>
                </div>
            </div>
            <div className='flex justify-center'>
                <Image
                    src={imageUrl}
                    alt={destinationName}
                    height={300}
                    width={500}
                    className='h-[500px] w-[1000px]'
                ></Image>
            </div>
            <div className='flex justify-between'>
                <div>
                    <div className='flex items-center mt-5'>
                        <LocationArrow className='mb-1'></LocationArrow>
                        <p>{country}</p>
                    </div>
                    <div>
                        <h1 className='text-3xl'>{destinationName}</h1>
                    </div>
                    <div>
                        <h1 className='text-xl'>Overview</h1>
                        <p>{description}</p>
                    </div>
                </div>
                <div className='w-90 card mt-5 bg-white rounded-xl'>
                    <div className='flex flex-col justify-start'>
                        <p>Starting From</p>
                        <p>${price}</p>
                        <p>Per Person</p>
                    </div>
                    <div>
                        <p className='bg-slate-100 p-2 rounded-md'>{departureDate}</p>
                    </div>
                    <div>
                        <Button className="w-full">Book Now</Button>
                    </div>
                    <div>
                        <p className='flex gap-2 items-center'><Check className='text-green-500'></Check> Free cancellation up to 7 days</p>
                        <p className='flex gap-2 items-center'><Check className='text-green-500'></Check>Travel insurance included</p>
                        <p className='flex gap-2 items-center'><Check className='text-green-500'></Check>24/7 customer support</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetailsPage;