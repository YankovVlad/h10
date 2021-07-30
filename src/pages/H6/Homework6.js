import React from 'react'
import './index.css'
import data from './data.json'


export const Homework6 = () => {

    return (
        <div className="h6__wrap">
            {data.map(obj => {
                return (
                    <div key={obj._id} className="item">
                        <h3>{obj.name.first}</h3>
                        <h4>{obj.name.last}</h4>
                    </div>
                )
            })}
        </div>
    )
}
