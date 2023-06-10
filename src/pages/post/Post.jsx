import React from "react";

const Post = () => {
    const cartData = JSON.parse(localStorage.getItem('cart'));


    return (
            <div>
                <h2 className="title">Страничка пуста</h2>
                {cartData.map((item, test) => (
                    <ul>
                        <li key={test}><img src={item.img}/></li>
                        <li key={test}><h4><b>Товар:</b> {item.name}</h4></li>
                        <li key={test}><b>Описание:</b> {item.desc}</li>
                        <li key={test}><b>Описание:</b> {item.count}</li>
                    </ul>
                ))}
            </div>
    );
};

export default Post;
