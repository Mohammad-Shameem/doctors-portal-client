import React from 'react';
import doctor from '../../../../assets/images/doctor.png'
import Button from '../../Shared/Button/Button';
import './HomPageAppointment.css'

const HomePageDental = () => {
    return (
       <section  className='flex appointment justify-center items-center mt-36  h-[533] '>  {/* ekhane jevabe h-[533] lekha hoiche sevabe tailwind e dynamic vab eclass lekha jay. */}
           <div className='flex-1 hidden lg:block md:block'>
            <img src={doctor} className='mt-[-120px] '/>
           </div>
           <div className='flex-1 ml-12 mr-[130px] '>
               <h1 className= ' text-xl font-bold text-secondary mb-5'>Appointment</h1>
               <h2 className='text-4xl font-semibold text-white'>Make an appointment Today</h2>
               <p className='py-4 text-white'>
               It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
               </p>
               <Button>GET STARTED</Button>
           </div>
       </section>
    );
};

export default HomePageDental;