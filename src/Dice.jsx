import { useState } from "react";

export default function Dice({num, on, id, toggleDice}) {
    function handleClick() {
        toggleDice(id)
    }
    return (
        <>
        <button className={`dice-button button-${on}`} onClick={handleClick} id={id}>
            <h2 className="dice-num">{num}</h2>
        </button>
        </>
    )
}