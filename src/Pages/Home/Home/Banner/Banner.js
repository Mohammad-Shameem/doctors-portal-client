import React from 'react';
import chair from '../../../../assets/images/chair.png'

const Banner = () => {
    return (
        <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img style={{width:"594px",height:"355px"}} src={chair} />
          <div>
            <h3 class="text-5xl font-bold">Your New Smile Start <br/>  Here</h3> 
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;