import React from 'react';

const Button = ({children}) => {
    return (
        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white uppercase">{children}</button>  //iekhane ei children mane hoocch emara jokhon e ei component ke use korbo tokhon ei component er vo=itore jai dibno tokhon eta children hishebe tai niyenibe.
    );
};

export default Button;