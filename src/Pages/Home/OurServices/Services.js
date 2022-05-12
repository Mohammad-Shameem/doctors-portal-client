import React from 'react';
import flouride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';


const Services = () => {
    const services=[
        {
        _id:1,
        title:"Flouride Treatment",
        img:flouride
    },
    {
        _id:2,
        title:"Cavity Filling",
        img:cavity
    },
    {
        _id:3,
        title:"Teeth Whitening",
        img:whitening
    }
]
    return (
    <>
            <h1 className='mt-32 uppercase text-secondary font-bold text-center'>Our Services</h1>
            <h1 className='mt-6 text-center font-semibold text-3xl'>Service We Provide</h1>
  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
      {
          services.map(service=> <Service
          key={service._id}
          service={service}
          ></Service>)
      }
  </div>
    </>
    );
};

export default Services;