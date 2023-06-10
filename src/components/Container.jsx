import React from "react";
import MyButton from "./MyButton";

const Container = () => {
    return (
        <>
            <MyButton class="btn-primary" text="Primary"/>
            <MyButton class="btn-secondary" text="Secondary"/>
            <MyButton class="btn-success" text="Success"/>
            <MyButton class="btn-danger" text="Danger"/>
            <MyButton class="btn-warning" text="Warning"/>
            <MyButton class="btn-info" text="Info"/>
            <MyButton class="btn-light" text="Light"/>
            <MyButton class="btn-dark" text="Dark"/>
            <MyButton class="btn-link" text="Link"/>
        </>
    )
}

export default Container;