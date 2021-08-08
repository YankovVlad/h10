import './style.css'

import axios from 'axios'
import { useEffect, useState } from 'react'

export const Homework12 = () => {

    const pageButtons = []
    const getPageButtons = (value) => {
        for (let i = 1; i <= value; i++) {
            pageButtons.push(i)
        }

    }
    getPageButtons(12)


    const [images, setImages] = useState([])
    const [page, setPage] = useState(1)


    const getImages = async (value) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${value}&_limit=12`)
        setImages(response.data)
    }
    const onClickButton = (value) => {
        setPage(value)
        getImages(value)

    }

    useEffect(() => {
        getImages()
    }, [])

    return (
        <div className={'wrap'}>
            <div className={'h12__images'}>
                {images.map(image => {
                    return (
                        <img key={image.id} className={'h12__img'} src={image.url} alt={'placeholder'}></img>
                    )
                })}
            </div>
            <div className={'h12__buttons'}>
                {pageButtons.map(value => {
                    return (
                        <button key={value}
                            className={'h12__button'}
                            onClick={() => onClickButton(value)}>{value}</button>
                    )
                })}
            </div>
        </div>
    )
}