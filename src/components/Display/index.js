import React from 'react';
import './style.css';

export default (parametro) => {
  return (
    <div className="display">
      {parametro.valor}
    </div>
  )
}
