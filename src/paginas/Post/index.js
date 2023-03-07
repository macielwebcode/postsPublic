import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import posts from 'json/posts.json'
import PostModelo from 'componentes/PostModelo';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import './Post.css'
import NotFound from 'paginas/NotFound';
import PaginaDefault from 'componentes/PaginaDefault';
import styles from './Post.module.css'
import PostCard from 'componentes/PostCard';

export default function Post() {

  const param = useParams();

  const post = posts.find((postitem) => {
    return postitem.id === Number(param.id);
  })

  if(!post){
    return <NotFound />
  }

  const postRecomendados = posts
    .filter((post) => post.id !== Number(param.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);
  
  return (
    <Routes>
      <Route path="*" element={<PaginaDefault />}>
        <Route  index element={
          <PostModelo
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
          
          >
            <div className='post-markdown-container'>
              <ReactMarkdown>
                {post.texto}
              </ReactMarkdown>
            </div>

          <h2 className={styles.tituloOutrosPosts}>Posts que você pode curtir</h2>  

          <ul className={styles.postsRecomendados}>
            {postRecomendados.map((postmapitem) => (
              <li key={postmapitem.id}>
                  <PostCard post={postmapitem} />
              </li>
            ))}
          </ul>

          </PostModelo>
        }/>
      </Route>
    </Routes>
  )
}
