import React from 'react';
import '../App.css';
import {Button} from'./Button';
import './Hero.css';

function Hero() {
    return (
        <div className='hero-container'>
        
            <h1> THE FURIOUS THAT BLEWS EVERYTHING</h1>
            <p>ON IT'S WAY</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle='btn--outline'
                buttonSize='btn--large'  >
                   GET STARTED 
                </Button>
                <Button className="btns" buttonStyle='btn--primary'
                buttonSize='btn--large'>
                   Watch trailer<i className='far fa-play-circle' />
                </Button>

            </div>
            
        </div>
    )
}

export default Hero
//<video src="/videos/video-2.mp4" autoPlay loop muted />


/*<Button className="btns" buttonStyle='btn--primary'
                buttonSize='btn--large'>
                   Watch trailer<i className='far fa-play-circle' />
                </Button>*/