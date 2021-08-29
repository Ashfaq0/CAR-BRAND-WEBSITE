import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>STYLE IS WHAT YOU FEEL</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                         src="images/black.jpg"
                         alt='car'
                         text="THE COLOR THAT ATTRACTS EVERY FELLOW"
                         label="LAMBORGHINI"
                         path="/services" />
                        <CardItem
                         src="images/panaroma.jpg"
                         alt='car'
                         text="EXPLORE INSIDE AND SMELL THE LEATHER"
                         label="PANAROMAIC VIEW"
                         path="/services" />
                        <CardItem
                         src="images/gear.jpg.jpg"
                         alt='car'
                         text="GEAR THAT SOUNDS WHEN YOU LOOK"
                         label="DESK VIEW"
                         path="/services" />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                         src="images/porsche.jpg"
                         alt='car'
                         text="THE CAR THAT YOU INNEED"
                         label="PORSCHE"
                         path="/services" />
                        <CardItem
                         src="images/yellow.jpg"
                         alt='car'
                         text="THE DESIGN THAT SPEAKS EVERYTHING"
                         label="MC CLAREN"
                         path="/services" />
                        <CardItem
                         src="images/products.jpg.jpg"
                         alt='car'
                         text="THE LOOK THAT FIERCING"
                         label="MC CLAREN"
                         path="/services" />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
