import Head from 'next/head'
import Header from '../../components/Header'
import TopOfPage from '../../components/TopOfPage'
import styles from './generalites.module.scss'

import dynamic from 'next/dynamic'

export default function Generalites() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Généralites sur les furets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main className={styles['main-content']}>
        <div className={styles.diapo}>
        </div>
        <TopOfPage h1="Généralités sur les furets" h2="Son origine, son éducation" image="pearl_home.jfif" />
        <Articles />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site créé par {' '}
          <img src="/logo-150x150.png" alt="Castel furet Logo" className={styles.logo} />
        </a>
      </footer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Arial;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

const Articles = () => {
  return (
    <div className={styles['articles-content']}>
      <Article titre="Origine et histoire" image="sparrow_curieux.JPG" contenu="Saviez-vous que le furet est un animal domestiqué depuis plus de 2000 ans ? Voici l'histoire de ce petit mustélidé."/>
      <Article titre="Choix d'un furet" image="sparrow_grass.JPG" contenu="Pourquoi un furet et pas un chien, un chat ou un lapin ? Quels sont les caractéristiques de ce NAC ?"/>
      <Article titre="Morphologie et robes" image="sparrow_salon.JPG" contenu="Poils courts, angora ; black, chocolat, cannelle, albinos, zibeline ; ici, on parle charme et beauté."/>
      <Article titre="Bien nourrir son furet" image="Moyen_pearl_home.jfif" contenu="Carnivore strict, l'alimentation du furet est exigeante et fait partie du choix d'adoption."/>
      <Article titre="Bien loger son furet" image="" contenu="Même s'il dort beaucoup, le furet a besoin de se défouler. Bien organiser son espace de vie est primordial."/>
      <Article titre="Bien éduquer son furet" image="" contenu="Comme le chien, le chat et beaucoup d'autres animaux, un furet s'éduque à l'appel, à la propreté, aux sorties et à la non-morsure."/>
    </div>
  )
}

const Article = (props) => {
  return (
    <div className={styles['article-content']} >
    <div className={styles['article-bloc-image']}>
      <img src={props.image} className={styles['article-image']}/>
    </div>
    <div className={styles['article-description']}>
      <h3>
        {props.titre}
      </h3>
      <p>
        {props.contenu}
      </p>
      <p>
        Lire plus
      </p>
    </div>
  </div>
  )
}
