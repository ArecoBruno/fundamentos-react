import React from "react";

export default props => {
    return (
        <div>
            <div>{props.text}</div>
            <div>{props.numero}</div>
            <div>{props.bool ? 'Verdadeiro' : 'Falso'}</div>
        </div>
    )
}