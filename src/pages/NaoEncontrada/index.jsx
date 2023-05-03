import React from 'react';
import styles from './NaoEncontrada.module.css';

export const NaoEncontrada = () => {
  return (
    <section className={styles.container}>
        <h2>Ops!</h2>
        <p>O conteúdo que você procura não foi encontrada!</p>
    </section>
  )
}
