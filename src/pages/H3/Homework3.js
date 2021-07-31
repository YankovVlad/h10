import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Square } from './Square'

export const Homework3 = () => {
  return (
    <div className="wrap">
      <Square label="BIG square" cssClass="square big-square" />
      <Square label="A less square" cssClass="square middle-square" />
      <Square label="The smallest one" cssClass="square small-square" />
    </div>
  )
}

