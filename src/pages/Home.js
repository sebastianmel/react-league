import React from 'react';
import Champions from '../components/Champions';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation/>
            <Logo/>
            
            <h1>Champions : </h1>

            <Champions/>            
        </div>
    );
};

export default Home;