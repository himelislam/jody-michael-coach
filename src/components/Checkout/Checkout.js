import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const {checkoutId} = useParams();
    
    
    return (
        <div>
            <h2 className="text-white text-center">Check Out Page {checkoutId}</h2>
        </div>
    );
};

export default Checkout;