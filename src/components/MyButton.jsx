import React from "react";
import classes from "classnames"

const MyButton = (props) => {
    return(
        <button className={classes('btn',props.class)}>{props.text}</button>
    )
}

export default MyButton;