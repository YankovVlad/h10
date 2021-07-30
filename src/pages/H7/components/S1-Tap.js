import React from 'react'


export const Tap = ({ label, getArg, onClick }) => {

    return (
        <button onClick={() => onClick(label)}>{label}</button>
    )
}

