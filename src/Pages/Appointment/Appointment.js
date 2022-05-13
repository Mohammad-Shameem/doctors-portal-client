import React, { useState } from 'react';
import Footer from '../Home/Shared/Footer/Footer';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import BookingModal from './AppointmentBanner/BookingModal/BookingModal';
import AvailableAppointments from './AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [date,setDate]=useState(new Date())
    return (
      <>
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableAppointments date={date}></AvailableAppointments>
      
      <Footer></Footer>
        </div>
        </>
    );
};

export default Appointment;