import React from 'react';
import './Home.css'
import Product from './Product';

function Home() {
    return (
        <div className='home'>
           <div className='home_container'>
            <img className='home_image'
            src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/Other/Holiday/DESKTOP_TALL_HERO_1X_3219_Generic_Promo_Creative_EN_1500x600._CB417666422_.jpg" 
                alt="banner" />

            <div className="home_row">
                <Product id={1} title='Echo Dot (3rd gen) - Smart speaker with Alexa - Charcoal' 
                price={29.99}
                image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_SX522_.jpg"
                rating={5}/>
                <Product id={2} title='Tenet (BIL/ Blu-ray + Digital + 4K Ultra HD)'
                price={10.00}
                image="https://images-na.ssl-images-amazon.com/images/I/81d0DPvluPL._AC_SX342_.jpg"
                rating={4}/>
            </div>

            <div className="home_row">
                <Product id={3} title='Nestle Quality Street Imported Caramels, Crèmes & Pralines, Christmas & Holiday Candy, 725 g'
                price={10.47}
                image="https://images-na.ssl-images-amazon.com/images/I/51nuYvWWqvL._AC_.jpg"
                rating={3}/>
                <Product id={4} title="Oster Prima Latte Espresso, Cappuccino and Latte Maker, Stainless Steel"
                price={249.99}
                image="https://images-na.ssl-images-amazon.com/images/I/81iC24QsowL._AC_SX679_.jpg"
                rating={4}/>
                <Product id={5} title="Canon SELPHY Square QX10 Compact Photo Printer (Pink)"
                price={157.89}
                image="https://images-na.ssl-images-amazon.com/images/I/61Mfr8hmD1L._AC_SX679_.jpg"
                rating={5}/>             

            </div>

            <div className="home_row">
                <Product id={6} title="'Sceptre Curved 27' 75Hz LED Monitor HDMI VGA Build-in Speakers, Edge-Less Metal Black 2019 (C275W-1920RN)"
                price={336.67}
                image="https://images-na.ssl-images-amazon.com/images/I/914W%2BOtJQ-L._AC_SX569_.jpg"
                rating={2} />
            </div>

           </div>
            
        </div>
    )
}

export default Home
