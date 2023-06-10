import React, { useState } from "react";
import styles from "./ProductCard.module.css";
import { setCart, getCart, checkProduct } from "../../helpers/cart";
import {Link, NavLink} from "react-router-dom";


const ProductCard = ({ id, name, desc, price, img, availibility }) => {
    const [count, setCount] = useState(1);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        // if (count > 1) {
        if (count === 1) return;
            setCount(count - 1);
    };

    const handleAddToCart = () => {
        const data = { name, desc, price, count, img, id };
        const cardList = getCart();
        let list;

        if (cardList) {
            if (checkProduct(cardList, id)) {
                list = [...cardList];
            } else {
                list = [...cardList, data];
            }
        } else {
            list = [data];
        }

        setCart(list)
    }

    return (
        availibility ? (<div className='m-2 card' style={{ width: "18rem" }}>
            <img src={img} className="card-img-top w-100 h-25 m-auto" alt="..." />
            <div className="card-body">
                <NavLink className="card-title" to= {`product/${id}`}><b>{name}</b></NavLink>
                <p className="card-text">
                    {desc}
                </p>
                <p>Price: <b>{price}</b> сомов</p>
                <p>
                    <span className={styles.minus} onClick={decrementCount}>-</span>
                    <span className={styles.count} id="count" onClick="tes">{count}</span>
                    <span className={styles.plus} onClick={incrementCount}>+</span>
                </p>
                {
                    !availibility && <p>
                        <mark>нет в наличии</mark>
                    </p>
                }
                <button onClick={handleAddToCart} className="btn btn-primary">
                    В корзину
                </button>
            </div>
        </div>) : null
    )
}

ProductCard.defaultProps = {
    name: 'Товар без названия',
    desc: 'Товар без опсинаия',
    price: 'Уточните у администрации',
    img: 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png'
}

export default ProductCard;