import React, {Fragment, useEffect, useState} from "react";
import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import Container from "../../components/Container";

const Content = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const url = 'http://localhost:3001/product';
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
    };

    useEffect(() => {
        getProducts();
    },[]);
    
    return (
        <div className="container d-flex justify-content-center">
            {products.map((item) => {
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
                );
            })}
        </div>
    );
};

const Main = () => {
    return (
        <div className="container">
            <Header/>
            <Container/>
            <Content/>
        </div>
    );
};

export default Main;
