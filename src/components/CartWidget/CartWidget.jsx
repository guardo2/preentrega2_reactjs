import React from 'react';

const CartWidget = () => {
    return (
        <div className="flex items-center text-white">
            <img src="/public/cart.svg" alt="Cartwidget" className="h-6" />
            <span className="ml-2">0</span>
        </div>
    )
}

export default CartWidget;