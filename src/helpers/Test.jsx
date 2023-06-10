import React, {useEffect, useState} from "react";


const Test = () => {
    const [test, setTest] = useState(true)
    return(
        <>
            <button onClick={changeState}>Изменить стейт</button>
            <button onClick={changeState2}>Изменить стейт</button>
        </>
    )
}

export default Test;