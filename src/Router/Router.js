import './style.css'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Homepage } from '../pages/Homepage/Homepage';
import { Homework3 } from '../pages/H3/Homework3';
import { Homework4 } from '../pages/H4/Homework4';
import { Homework5 } from '../pages/H5/Homework5';
import { Homework6 } from '../pages/H6/Homework6';
import { Homework7 } from '../pages/H7/Homework7';
import { Homework9 } from '../pages/H9/Homework-9';
import { Homework11 } from '../pages/H11/Homework11'
import { PizzaApp } from '../pages/PizzaMaker/App/PizzaApp';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className={'nav__list'}>

            <li className={'nav__item'}>
              <Link className={'nav__link'} to="/">Home</Link>
            </li>

            <li className={'nav__item'}>
              <Link className={'nav__link'} to="/homework-3">Homework 3</Link>
            </li>

            <li className={'nav__item'}>
              <Link className={'nav__link'} to="/homework-4">Homework 4</Link>
            </li>

            <li className={'nav__item'}>
              <Link className={'nav__link'} to="/homework-5">Homework 5</Link>
            </li>

            <li className={'nav__item'}>
              <Link className={'nav__link'} to="/homework-6">Homework 6</Link>
            </li>

            <li className={'nav__item'}>
              <Link className={'nav__link'} to="/homework-7">Homework 7</Link>
            </li>

            <li className={'nav__item'}>
              <Link className={'nav__link'} to="/homework-9">Homework 9</Link>
            </li>

            <li className={'nav__item'}>
              <Link className={'nav__link'} to="/pizza">Pizza</Link>
            </li>

            <li className={'nav__item'}>
              <Link className={'nav__link'} to="/homework-11">Homework 11</Link>
            </li>

          </ul>
        </nav>


        <main className={'app'}>
          <Switch>

            <Route path="/homework-11/:figure">
              <Homework11 />
            </Route>

            <Route path="/homework-11/">
              <Homework11 />
            </Route>

            <Route path="/pizza">
              <PizzaApp />
            </Route>

            <Route path="/homework-9">
              <Homework9 />
            </Route>

            <Route path="/homework-7">
              <Homework7 />
            </Route>

            <Route path="/homework-6">
              <Homework6 />
            </Route>

            <Route path="/homework-5">
              <Homework5 />
            </Route>

            <Route path="/homework-4">
              <Homework4 />
            </Route>

            <Route path="/homework-3">
              <Homework3 />
            </Route>

            <Route path="/">
              <Homepage />
            </Route>


          </Switch>
        </main>

      </div>
    </Router>
  );
}
