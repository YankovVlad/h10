import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'

export const Figure = () => {

    const { figure } = useParams()
    const { color } = useParams()

    const [figureParam, setFigureParam] = useState(0)
    const [colorParam, setColorParam] = useState('red')

    useEffect(() => {
        setFigureParam(figure)
        setColorParam(color)
    }, [figure, color])

    return (

        <div className={'wrap'}>
            <div style={{ backgroundColor: colorParam }} className={`figure ${figureParam == 2 ? ' circle' : ''}`}> {figureParam ? (figureParam === 1 ? 'Square' : 'Circle') : ''}</div>
        </div>

    )
}