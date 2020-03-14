import React from 'react';
import './CartProfile.css';

const CartProfile = (props) => {
    const {name, image} = props.profile;
    return (
        <div className="main">
            <img src={image} alt=""/>
            <h5>{name}</h5>
        </div>
    );
};

export default CartProfile;