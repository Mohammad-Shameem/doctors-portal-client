import React from 'react';
import Button from '../Shared/Button/Button';
import treatment from '../../../assets/images/treatment.png'

const DentalCare = () => {
    return (
        <div className="hero min-h-screen px-20 ">
  <div className="hero-content flex-col lg:flex-row">
    <img  src={treatment} style={{width:"458px",height:"576px"}} />
    <div className='ml-24'>
      <h1 className="text-5xl font-bold text-5xl font-bold">Exceptional Dental</h1>
      <h1 className="text-5xl font-bold text-5xl font-bold">Care, on Your Terms</h1>
      <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
  <Button>GET STARTED</Button>
    </div>
  </div>
</div>
    );
};

export default DentalCare;