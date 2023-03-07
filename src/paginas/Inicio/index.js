import React from 'react'
import styles from './Inicio.module.css'
import posts from 'json/posts.json'
import Post from 'componentes/PostCard'

export default function Inicio() {
  return (
    
    <ul className={styles.posts}>
      {posts.map((postitem) => (
        <li key={postitem.id}>
          <Post post={postitem} />
        </li>
      ))}
    </ul>
    
  )
}
