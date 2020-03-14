import React, {useState} from 'react';
import fakedata from '../../data/fakedata.json';
import Profile from '../Profile/Profile';
import './Home.css';
import CartProfile from '../CartProfile/CartProfile';
const Home = () => {
    const [cart, setCart] = useState([]);
    var sal = 0;
    const cartFunction = (profile)=>{
        const newCart = [...cart, profile];
        setCart(newCart);
        //console.log(newCart);
    };
    let salary = [] ;
    salary = cart.map(pr=>parseFloat(pr.salary));
    sal = salary.reduce((total, salar)=>total+salar,0)
    console.log(sal);
    return (
        <div className="home">
            <div className="profile-section">
                {
                    fakedata.map(profile => <Profile profile={profile} cartFunction={cartFunction}>
                    </Profile>)
                }
            </div>
            <div className="cart-section">
                <h2>Added: {cart.length} </h2>
                <h2>Total salary: ${sal} </h2>
                <div className="cart-pro">
                {
                    cart.map(profile=><CartProfile profile={profile}></CartProfile>)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;