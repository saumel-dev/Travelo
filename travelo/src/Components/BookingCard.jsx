'use client'
import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button, DateField, Label } from '@heroui/react';
import { useState } from 'react';

const BookingCard = ({ destination }) => {
    const {data: session} = authClient.useSession();
    const user = session?.user;
    console.log(user);
    const [departureDate, setDepartureDate] = useState(null);
    console.log(new Date(departureDate));
    const handle
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
                    <Button className="w-full">Book Now</Button>
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