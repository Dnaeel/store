import React from "react";
import styles from "./Cart.module.css"
import Header from "../../components/Header/Header";
import {getCart} from "../../helpers/cart";
import {useNavigate} from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate()
    const cartData = JSON.parse(localStorage.getItem('cart'));
    (function () {
        const cart = getCart();
        if (cart){
            setTimeout(()=> {
                navigate('/')
            },5000)
        }
    }())
    return (
        <>
            <div className="container">
                <Header/>
                <h2>Корзина</h2>
            </div>
            <div className={styles.cartsbasket}>

                {cartData.map((item, test) => (
                    <ul className={styles.ul}>
                        <img key={test} src={item.img} alt=""/>
                        <li className={styles.title} key={test}>Продукт: {item.name}</li>
                        <li key={test}> {item.desc}</li>
                        <li className={styles.title} key={test}> Цена: {item.price}</li>
                        <li className={styles.title} key={test}> Количество: {item.count}</li>
                    </ul>
                ))}
            </div>
        </>
    );
};

export default Cart;