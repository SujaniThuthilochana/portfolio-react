import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import video from '../videos/Fash.mp4'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={video} autoPlay loop muted/>
             {/* <img src={video}/> */}
            <h2>Welcome to LaDy Shopping !</h2>
            <p>Let's take a round..</p>
            {/* <div className='hero-btns'>
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
Get Started<i className='far fa-play-circle'/>
                </Button>
                <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
Watch Trailer
                </Button>
            </div> */}
        </div>
    )
}

export default HeroSection;
