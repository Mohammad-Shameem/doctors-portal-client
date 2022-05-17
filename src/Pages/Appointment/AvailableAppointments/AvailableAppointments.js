import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import Service from "../Service/Service";
import BookingModal from "../../Appointment/AppointmentBanner/BookingModal/BookingModal";
import { useQuery } from "react-query";
import Loading from "../../../Loading/Loading";

const AvailableAppointments = ({ date, setDate }) => {
  const [treatment, setTreatment] = useState(null);
  // const [services, setServices] = useState([]);
  const formattedDate = format(date, "PP");
  /*   useEffect(() => {
    fetch(`http://localhost:5000/available?date=${formattedDate}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [formattedDate]); */

  const {
    isLoading,
    error,
    data: services, //ekhane amra services likhe map korchi tai datate   services add kore dichi tachara amra services remove kore data thekeo map korte partam.
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    //react query use korle amader obosshoi isLoading use korte hob nahole amra datagulo pabona.
    return <Loading></Loading>;
  }
  return (
    <>
      <div className="mt-4">
        <h5 className="text-center text-[22px] text-secondary mb-24">
          Available Appointments on {format(date, "PP")}
        </h5>
      </div>
      <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          setTreatment={setTreatment}
          treatment={treatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </>
  );
};

export default AvailableAppointments;
