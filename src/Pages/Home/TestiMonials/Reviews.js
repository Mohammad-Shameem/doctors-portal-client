import React from 'react';

const Reviews = ({review}) => {
    const {name,location,reviews,img}=review
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <p className='mb-11'>{reviews}</p>
    <div className='flex items-center'>
    <div className="avatar">
  <div className=" w-16 h-16 mr-4  rounded-full ring ring-secondary ring-offset-2">
        <img className='' src={img} />
  </div>
</div>
        <div>

    <h2 className="card-title">{name}</h2>
        <h4 className='text-base font-normal'>{location}</h4>
        </div>
    
    </div>
  </div>
</div>
    );
};

export default Reviews;