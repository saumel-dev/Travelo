'use client'
import { Check } from '@gravity-ui/icons';
import { Button, DateField, Label } from '@heroui/react';

const BookingCard = ({destination}) => {
    return (
        <div>
            <div className='w-90 card mt-5 bg-white rounded-xl'>
                <div className='flex flex-col justify-start'>
                    <p>Starting From</p>
                    <p>${destination.price}</p>
                    <p>Per Person</p>
                </div>
                <div>
                    <DateField className="w-[256px]" name="date">
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