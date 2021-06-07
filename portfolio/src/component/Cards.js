import React from 'react'
import CardItem from './CardItem';
import './Cards.css';
import image1 from '../images/cas-3.jpg';
import image2 from '../images/aut-1.jpg';
import image3 from '../images/win-1.jpg';
import image4 from '../images/sum-1.jpg';
import image5 from '../images/cas-2.jpg';
import image6 from '../images/win-3.jpg';
import image7 from '../images/cas-4.jpg';
import image8 from '../images/aut-4.jpg';
import image9 from '../images/win-4.jpg';
import image10 from '../images/sum-4.jpg';
import image11 from '../images/cas-5.jpg';


function Cards() {
    return (
        <div className="cards">
            <h1>Checkout</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src={image1}
                        text='Casual Black Frock with Button designed'
                        label='Casual'
                        path='/products'
                        />
                     
                        <CardItem
                        src={image2}
                        text='LaDy jackets for Autom season'
                        label='Autom'
                        path='/products'
                        />

                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src={image3}
                        text='Winter LaDy Clothes'
                        label='Winter'
                        path='/products'
                        />
                     
                        <CardItem
                        src={image4}
                        text='Blue Summer Frock'
                        label='Summer'
                        path='/products'
                        />

<CardItem
                        src={image5}
                        text='Top and Jean for your casual days'
                        label='Casual'
                        path='/products'
                        />

                        <CardItem
                        src={image6}
                        text='Special Winter white jacket'
                        label='Winter'
                        path='/products'
                        />

                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src={image7}
                        text='Black and White top'
                        label='Casual'
                        path='/products'
                        />
                     
                        <CardItem
                        src={image8}
                        text='White warm jacket'
                        label='Autom'
                        path='/products'
                        />

<CardItem
                        src={image9}
                        text='Wool jearsy for winter season'
                        label='Winter'
                        path='/products'
                        />

                        <CardItem
                        src={image10}
                        text='Blue dots as Casual blouse'
                        label='Casual'
                        path='/products'
                        />

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
