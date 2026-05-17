'use client'
import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button, DateField, Label } from '@heroui/react';
import { useEffect, useState } from 'react';

const BookingCard = ({ destination }) => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const [departureDate, setDepartureDate] = useState(null);


    const handleBooking = async () => {
        if (!user) {
            alert("Please log in to book a destination.");
            return;
        }
        const bookingData = {
            userId: user.id,
            userImage: user.image,
            userName: user.name,
            destinationId: destination._id,
            destinationName: destination.destinationName,
            price: destination.price,
            image: destination.imageUrl,
            country: destination.country,
            departureDate: new Date(departureDate)
        }
        // console.log(bookingData);

        const res = await fetch(`http://localhost:5000/bookings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })

        const data = await res.json();

    }
    return (
        <div>
            <div className='w-90 card mt-5 bg-white rounded-xl'>
                <div className='flex flex-col justify-start'>
                    <p>Starting From</p>
                    <p>${destination.price}</p>
                    <p>Per Person</p>
                </div>
                <div>
                    <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
                        <Label>Date</Label>
                        <DateField.Group>
                            <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                        </DateField.Group>
                    </DateField>
                </div>
                <div>
                    <Button onClick={handleBooking} isDisabled={!user} className={`w-full'}`}>{user ? 'Book Now' : "Login to Book"}</Button>
                </div>
                <div>
                    <p className='flex gap-2 items-center'><Check className='text-green-500'></Check> Free cancellation up to 7 days</p>
                    <p className='flex gap-2 items-center'><Check className='text-green-500'></Check>Travel insurance included</p>
                    <p className='flex gap-2 items-center'><Check className='text-green-500'></Check>24/7 customer support</p>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;