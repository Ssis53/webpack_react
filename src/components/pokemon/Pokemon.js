import React from 'react'
import './Pokemon.css';

export const Pokemon = ({ base_experience, height, image, name, weight }) => (
  <div className="card" style={{ width: '200px' }}>
    <img className="card-img-top" src={image} alt="load fail" />
    <div className="card-body">
      <h3 className="card-title">{name}</h3>
      <p className="card-text">
        <span>
          height:
        </span>
        <span>
          {height}
        </span>
      </p>
      <p className="card-text">
        <span>
          weight:
        </span>
        <span>
          {weight}
        </span>
      </p>
      <p className="card-text">
        <span>
          base_experience:
        </span>
        <span>
          {base_experience}
        </span>
      </p>
    </div>
  </div>
)
