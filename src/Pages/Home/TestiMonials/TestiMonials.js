import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Reviews from './Reviews';

const TestiMonials = () => {
    const reviews=[
        {
            _id:1,
            name:"Winson Herry",
            location:"California",
            img:people1,
            reviews:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"

        },
        {
            _id:2,
            name:"Winson Herry",
            location:"California",
            img:people2,
            reviews:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"

        },
        {
            _id:3,
            name:"Winson Herry",
            location:"California",
            img:people3,
            reviews:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
    ]
    return (
       <section className='mt-[84px]'>
           <div className='flex justify-between'>
<div>
    <h4 className='font-bold text-sm text-secondary'>Testimonial</h4>
    <h2 className='font-normal text-4xl'>Whats Our Patient Says</h2>
</div>
<div>
    <img className='w-[98] h-[79] lg:w-[192px] lg:h-[156px]  ' src={quote} />
</div>
           </div>
           <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 mt-36'>
               {
                   reviews.map(review=> <Reviews
                   key={review._id}
                   review={review}
                   ></Reviews>)
               }

           </div>
       </section>
    );
};

export default TestiMonials;