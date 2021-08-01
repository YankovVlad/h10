import './style.css'
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import { useState } from 'react';
import { Figure } from './Figure';

export function Homework11() {

    const figures = [1, 2]
    const colors = ['red', 'gray', 'blue', 'cyan', 'yellow', 'orange']

    const { figure } = useParams()
    const { color } = useParams()

    const [figureParam, setFigureParam] = useState(0)
    const [colorParam, setColorParam] = useState('red')

    const onClickFigure = (value) => {
        setFigureParam(value)
    }
    const onClickColor = (value) => {
        setColorParam(value)
    }

    return (
        <Router>
            <div>
                <nav>
                    <ul className={'nav__list'}>

                        {figures.map((elem) => {
                            return (
                                <Link onClick={() => onClickFigure(elem)}
                                    className={'h11-nav__list'} key={elem} to={`/homework-11/${elem}/${colorParam}`}>{elem}

                                </Link>
                            )
                        })}

                    </ul>
                    <ul>
                        {colors.map((elem) => {
                            return (
                                <Link onClick={() => onClickColor(elem)} className={'h11-nav__list'} key={elem} to={`/homework-11/${figureParam}/${elem}`}>{elem}</Link>
                            )
                        })}
                    </ul>
                </nav>


                <main className={'app'}>
                    <Switch>

                        <Route path="/homework-11/:figure/:color">
                            <Figure />
                        </Route>

                    </Switch>
                </main>

            </div>
        </Router>
    );
}
