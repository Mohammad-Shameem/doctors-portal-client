import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg'

const Info = () => {
    return (
        <div  class="grid grid-cols-1 lg:grid-cols-3 gap-5 px-4">
            <InfoCard img={clock}/>
            <InfoCard img={clock}/>
            <InfoCard img={clock}/>
        </div>
    );
};

export default Info;