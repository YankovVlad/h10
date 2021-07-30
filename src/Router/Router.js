import './style.css'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Homework5 } from '../pages/H5/Homework5';
import { Homework6 } from '../pages/H6/Homework6';
import { Homework7 } from '../pages/H7/Homework7';
import { Homework9 } from '../pages/H9/Homework-9';
import { PizzaApp } from '../pages/PizzaMaker/App/PizzaApp';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className={'nav__list'}>.

            <li className={'nav__item'}>
              <Link to="/homework-5">Homework 5</Link>
            </li>

            <li className={'nav__item'}>
              <Link to="/homework-6">Homework 6</Link>
            </li>

            <li className={'nav__item'}>
              <Link to="/homework-7">Homework 7</Link>
            </li>

            <li className={'nav__item'}>
              <Link to="/homework-9">Homework 9</Link>
            </li>

            <li className={'nav__item'}>
              <Link to="/pizza">Pizza</Link>
            </li>

          </ul>
        </nav>


        <main className={'app'}>
          <Switch>
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


          </Switch>
        </main>

      </div>
    </Router>
  );
}
