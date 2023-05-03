import React from 'react';
import { Banner } from 'components/Banner';
import { Titulo } from 'components/Titulo';
import { Card } from 'components/Card';
import { useFavoritosContext } from 'contextos/Favoritos';
import styles from './Favoritos.module.css';

export const Favoritos = () => {
  const { favorito } = useFavoritosContext();
  return (
    <>
        <Banner imagem='favoritos'/>
        <Titulo>
            <h1>Meus Favoritos</h1>
        </Titulo>
        <section className={styles.container}>
          {favorito.map((fav) => {
            return <Card {...fav} key={fav.id} />
          })}
        </section>
    </>
    
  )
}
