import React from 'react';
import bg from '../../../assets/images/bg.png'
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = ({date,setDate}) => {

    let footer = <p>Please pick a day.</p>;
    if (date) {
      footer = <p>You picked {format(date, 'PP')}.</p>;
    }
    return (
<section style={{
    background:`url(${bg})`,
    backgroundSize:"cover",
    backgroundPosition:"center"
}}>
    <div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row-reverse items-center ">
    <img src={chair} className="max-w-sm rounded-lg shadow-2xl ml-32" alt="" />
    <div>
     <DayPicker
           mode="single"
           selected={date}
           onSelect={setDate}
           footer={footer}
     ></DayPicker>
    </div>
  </div>
</div>
</section>
    );
};

export default AppointmentBanner;