import React from 'react';
import ContactForm from '../../ContactForm/ContactForm';
import Banner from '../Banner/Banner';
import DentalCare from '../DentalCare/DentalCare';
import Info from '../Info/Info';
import Services from '../OurServices/Services';
import TestiMonials from '../TestiMonials/TestiMonials';
import HomePageDental from './HomePageDental/HomePageDental';

const Home = () => {
    return (
        <>
        <div className='px-12'>
        <Banner></Banner>
          <Info></Info>
          <Services></Services>
            <DentalCare></DentalCare>
        </div>
            <HomePageDental></HomePageDental>
            <div className='px-12'>
            <TestiMonials></TestiMonials>
         <ContactForm></ContactForm>
            </div>
        </>
    );
};

export default Home;