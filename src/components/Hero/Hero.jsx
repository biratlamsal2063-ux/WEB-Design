import React from 'react'
import './Hero.css'
import { Header } from '../Header/Header'


const Hero = () => {
    return (
        <div className="Hero">

            <div className="left-h">
                <Header />

                <div className="the-best-ad">
                    <div></div>
                    <span>
                        The Best Fitness Club In The Town
                    </span>
                </div>
                <div className='hero-text'>
                    <div>
                        <span className='stroke-text'>Shape</span>
                        <sapn>Your</sapn>
                    </div>
                    <div><span>Ideal Body</span></div>
                    <div className='span'>
                        In here we will help you shape and build your ideal body
                    </div>
                </div>
            </div>
            <div className="right-h">
                binit lamsal
            </div>
            <div>BIRAT LAMSAL THIS IS THE PORTION TO DELET BEFORE U START</div>

        </div>
    )
}

export default Hero
