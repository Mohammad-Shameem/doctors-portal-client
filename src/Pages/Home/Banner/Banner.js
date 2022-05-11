
import React from 'react';
import chair from '../../../assets/images/chair.png'
import './Banner.css'

const Banner = () => {
    return (
        <div class="hero min-h-screen banner">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img style={{width:"594px",height:"355px"}} src={chair}  />
          <div>
            <h3 class="text-5xl font-bold">Your New Smile Start  </h3>
           <h3 class='text-5xl font-bold mt-3'> Here</h3>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white uppercase">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;