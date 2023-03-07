import PostModelo from 'componentes/PostModelo'
import React from 'react'
import styles from './About.module.css'
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from 'assets/sobre_mim_foto.png'

export default function About() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre"
    >
      <h3 className={styles.subtitulo}>Olá, sou a Marcela</h3>

      <img 
        src={fotoSobreMim}
        alt="foto da marcela"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. 
        It has roots in a piece of classical Latin literature from 45 BC, making 
        it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney 
        ollege in Virginia, looked up one of the more obscure Latin words, consectetur, 
        from a Lorem Ipsum passage, and going through the cites of the word in 
        classical literature, discovered the undoubtable source. Lorem Ipsum comes 
        from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
        The Extremes of Good and Evil by Cicero, written in 45 BC. This book is 
        a treatise on the theory of ethics, very popular during the Renaissance. 
        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", 
        comes from a line in section 1.10.32.
      </p>
      
      <p className={styles.paragrafo}>
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below 
        for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum 
        et Malorum" by Cicero are also reproduced in their exact original form, 
        accompanied by English versions from the 1914 translation by H. Rackham.
      </p>

      

    </PostModelo>
  )
}
