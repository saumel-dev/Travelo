import BookingCard from '@/Components/BookingCard';
import DeleteCard from '@/Components/DeleteCard';
import EditModal from '@/Components/EditModal';
import { getDestination } from '@/lib/data';
import { ArrowLeft, Check, LocationArrow } from '@gravity-ui/icons';
import { Button, DateField, Label } from '@heroui/react';
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
                <BookingCard destination={destination}></BookingCard>
            </div>
        </div>
    );
};

export default DestinationDetailsPage;