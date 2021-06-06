import React from 'react'
import CardItem from './CardItem';
import './Cards.css';
import image from '../images/img-3.jpg';
import image2 from '../images/img-3.jpg';
import image3 from '../images/img-3.jpg';
import image4 from '../images/img-3.jpg';
import image5 from '../images/img-3.jpg';
import image6 from '../images/img-3.jpg';

function Cards() {
    return (
        <div className="cards">
            <h1>Checkout</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src={image}
                        text='See this waterfall deep inside the Amazon jungle'
                        label='Adventure'
                        path='/services'
                        />
                     
                        <CardItem
                        src={image3}
                        text='Enjoy the life with travelling.Its fantastic.'
                        label='Luxary'
                        path='/services'
                        />

                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src={image2}
                        text='Awesome scenaries like this are rare'
                        label='Adventure'
                        path='/services'
                        />
                     
                        <CardItem
                        src={image4}
                        text='Do you feel this? How beautiful!'
                        label='Luxary'
                        path='/services'
                        />

<CardItem
                        src={image5}
                        text='Look this place. Come and get the real feeling'
                        label='Luxary'
                        path='/services'
                        />

                        <CardItem
                        src={image6}
                        text='Do you feel this? How beautiful!'
                        label='Luxary'
                        path='/services'
                        />

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
