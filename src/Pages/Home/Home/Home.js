import React from 'react';
import ContactForm from '../../ContactForm/ContactForm';
import Banner from '../Banner/Banner';
import DentalCare from '../DentalCare/DentalCare';
import Info from '../Info/Info';
import Services from '../OurServices/Services';
import Footer from '../Shared/Footer/Footer';
import TestiMonials from '../TestiMonials/TestiMonials';
import HomePageDental from './HomePageDental/HomePageDental';

const Home = () => {
    return (
        <>
        <Banner></Banner>
          <Info></Info>
          <Services></Services>
            <DentalCare></DentalCare>
            <HomePageDental></HomePageDental>
            <TestiMonials></TestiMonials>
         <ContactForm></ContactForm>
         <Footer></Footer>
        
        </>
    );
};

export default Home;