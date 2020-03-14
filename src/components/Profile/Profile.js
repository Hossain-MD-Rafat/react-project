import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Profile.css';
const Profile = (props) => {

    const element = <FontAwesomeIcon icon={faPlus} />
    const { name, id, salary, image } = props.profile;
    return (
        <div className="profile">
            <div className="img">
                <img src={image} alt="" />
            </div>
            <div className="info">
                <h5>Name: {name}</h5>
                <h6>ID: {id}</h6>
                <p>Salary: ${salary}</p>
                <button onClick={()=>props.cartFunction(props.profile)}>
                    {element} add to list
                    </button>
            </div>
        </div>
    );
};

export default Profile;