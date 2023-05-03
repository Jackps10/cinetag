import { Banner } from 'components/Banner';
import { Card } from 'components/Card';
import { Titulo } from 'components/Titulo';
import styles from './Inicio.module.css';
import React, { useEffect, useState } from 'react'

export const Inicio = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/Jackps10/cinetag-api/videos`)
    .then(respostas => respostas.json())
    .then(dados =>{
      setVideos(dados);
    })
  },[])

  return (
    <> 
      <Banner imagem ='home'/>
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
           return <Card {...video} key={video.id} />
        })}
      </section>
    </>
   
  )
}
