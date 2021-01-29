import React from 'react';
import Post from './Post/Post'
import './MyPosts.module.css'

const ARR__POSTS = [
  "Большие города",
  "Пустые поезда",
  "Ни берега, ни дна",
  "Все начинать сначала",
  "Холодная война",
  "И время как вода",
  "Он не сошел с ума",
  "Ты ничего не знала",
];


const MyPosts = () => {

  return (
    <>
      <h2>My posts</h2>
      <ul className="list">
        {ARR__POSTS.map((item, index) => {
          return <Post key={index} item={item}/>
        })
        }
      </ul>
    </>
  )
}

export default MyPosts
