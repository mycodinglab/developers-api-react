import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';
import './DeveloperTeam.css';

const DeveloperTeam = () => {
    const [developers, setDevelopers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setDevelopers(data))
    }, []);

    const handleAddToCart = (developer) => {
        const newCart = [...cart, developer];
        setCart(newCart);
    }

    return (
        <div>
            <div className='developers-container mx-auto'>
                <div className='developers'>
                    {
                        developers.map(developer => <Developer
                            key={developer.id}
                            developer={developer}
                            handleAddToCart={handleAddToCart}
                        ></Developer>)
                    }

                </div>
                <div className='cart'>
                    <Cart cart={cart}></Cart>
                </div>

            </div>
        </div>
    );
};

export default DeveloperTeam;