import React from "react";
import style from "./Cart.module.css"

const Cart = () => {
    const cartData = JSON.parse(localStorage.getItem('cart'));

    return (
        <div>
            <h2 className="title">Корзина</h2>
            {cartData.map((item, test) => (
                <ul>
                    <li key={test}><img src={item.img}/></li>
                    <li key={test}><h4><b>Товар:</b> {item.name}</h4></li>
                    <li key={test}><b>Описание:</b> {item.desc}</li>
                    <li key={test}><b>Цена:</b> {item.price}</li>
                    <li key={test}><b>Количество:</b> {item.count}</li>
                </ul>
            ))}
        </div>
    );
};

export default Cart;