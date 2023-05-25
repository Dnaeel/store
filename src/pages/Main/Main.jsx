import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import { products } from "../../constants/products";

const Content = () => {

    const items = products.map((item) => {
        return (
            <Fragment key={item.id}>
                <ProductCard
                    id={item.id}
                    name={item.name}
                    desc={item.desc}
                    price={item.price}
                    img={item.img}
                    availibility={item.availibility}
                />
                <hr />
            </Fragment>
        )
    })

    return (
        <div className="container d-flex justify-content-center">
            {items}
        </div>
    )
}

const Main = () => {
    return (
        <div className="container">
            <Header/>
            <Content />
        </div>
    )
}
export default Main;