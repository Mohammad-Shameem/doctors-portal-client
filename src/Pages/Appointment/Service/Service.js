import React from 'react';
import Button from '../../Home/Shared/Button/Button'

const Service = ({service,setTreatment}) => {
    const {name,slots}=service;
  
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
<div className="card-body items-center text-center">  
          <h2 className="card-title text-secondary font-semibold text-xl mb-2">{name}</h2>
          <p className='mb-3'>
              {
                  slots.length
                  ? <span>{slots[0] }</span>
                  :<span className='text-red-600'>TRY ANOTHER DATE</span>
              }
          </p>
          <p className='text-xs font-normal mb-4'>{slots.length}  {slots.length > 1 ?"SPACES":"SPACE"} AVAILABLE</p>
          <div className={`card-actions ${slots.length=== 0 ? "hidden":'block'}`}>  
          {/* <Button onClick={()=> setTreatment(service)}>BOOK APPOINTMENT</Button>  disabled={slots.length===0} */}
          <label
           onClick={()=> setTreatment(service)}
           for="booking-modal"
            class="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white uppercase">
                BOOK APPOINTMENT
                </label>
          </div>
        </div>
      </div>
    );
};

export default Service;