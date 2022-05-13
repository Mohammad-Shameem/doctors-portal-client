import { format } from 'date-fns';
import React,{useState,useEffect} from 'react';
import Service from '../Service/Service';
import BookingModal from '../../Appointment/AppointmentBanner/BookingModal/BookingModal'

const AvailableAppointments = ({date,setDate}) => {
    const [treatment,setTreatment]=useState(null)
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch("services.json")
        .then(res=> res.json())
        .then(data => setServices(data))
    },[])
    return (
       <>
        <div className='mt-4'>
            <h5 className='text-center text-[22px] text-secondary mb-24'>Available Appointments on {format(date, 'PP')}</h5>
        </div>
        <div className='grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
            {
                services.map(service=> <Service
                key={service._id}
                service={service}
                setTreatment={setTreatment}
                ></Service>)
            }
        </div>
        {treatment && <BookingModal 
        date={date}
        setTreatment={setTreatment}
        treatment={treatment}></BookingModal>}
        
       </>
    );
};

export default AvailableAppointments;