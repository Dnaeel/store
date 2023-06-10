import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {products} from "../constants/products";
import {useSearchParams} from "react-router-dom";

const Product = () => {
    const params = useParams();
    const [test, setTest] = useState(true)
    const id = params.id;
    const [productData, setProductData] = useState(
        products.find((product) => product.id === Number(id))
    );
    const url = new URL("https://www.example.com/search?q=javascript&category=tutorials");
    //   const searchParams = new URLSearchParams(url.search);

    const [searchParams] = useSearchParams();
    const brand = searchParams.get("brand");
    const tt = searchParams.get("sail")
    const log = () => {
        console.log("test")
    }
    useEffect(log,)

    const changeState = () => {
        setTest(!test)
    }

    const changeState2 = () => {
        setProductData({name:'Iphone'})
    }

    return (
        <>
            <h1>Страница продукта</h1>
            <h3>{params.id}</h3>
            <img src={productData.img} alt=""/>
            <h2>{productData.name}</h2>
            <p>{productData.desc}</p>
            <p>Цена: {productData.price}</p>
            <p>
                Наличие: {productData.availibility ? "Есть в наличии" : "Нет в наличии"}
            </p>
            <p>Brand: {brand}</p>
            <p>Скидка:{tt}</p>
            <button onClick={changeState}>Изменить стейт</button>
            <button onClick={changeState2}>Изменить стейт</button>

        </>
    );
};

export default Product;