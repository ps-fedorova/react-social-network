import React from 'react';
import s from './Like.module.css'

const Like = () => {
  return (
    <button className={`button ${s.like}`}>&#10084;</button>
  )
}

export default Like;
