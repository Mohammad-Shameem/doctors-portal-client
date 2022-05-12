
import React from 'react';
import chair from '../../../assets/images/chair.png'
import Button from '../Shared/Button/Button';
import './Banner.css'

const Banner = () => {
    return (
        <div className="hero min-h-screen banner">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img style={{width:"594px",height:"355px"}} src={chair}  />
          <div>
            <h3 className="text-5xl font-bold">Your New Smile Start  </h3>
           <h3 className='text-5xl font-bold mt-3'> Here</h3>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
           <Button>GET STARTED</Button>
          </div>
        </div>
      </div>
    );
};

export default Banner;