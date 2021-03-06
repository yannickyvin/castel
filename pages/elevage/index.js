import Head from 'next/head'
import Header from '../../components/Header'
import TopOfPage from '../../components/TopOfPage'
import styles from './elevage.module.scss'

import dynamic from 'next/dynamic'

const SliderNoSSR = dynamic(
  () => import('../../components/Slider'),
  { ssr: false }
)

const SpiderNoSSR = dynamic(
  () => import('../../components/Splider'),
  { ssr: false }
)

export default function Elevage() {
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
        <TopOfPage h1="Généralités sur les furets" h2="Tout ce que vous devez savoir sur les furets" image="pearl_home.jfif" />
        <Cards />
        <Map />
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

const ElevageTop = () => {
  return (
    <div className={styles['elevage-top__content']}>
      <div className={styles['elevage-top__blockimg']}>
        <img className={styles['elevage-top__image']} src="P1013943-Grand.jpg" />
      </div>
      <div className={styles['elevage-top__description']}>
        <h1>Bienvenue sur CastelFuret !</h1>
        <h2>Conseils, guides, forum sur les furets</h2>
      </div>
    </div>
  )
}

const Map = () => {
  return (
    <div className={styles['map__content']}>
      <div className={styles['map__body']}>
        <div className={styles['map__body-img']}>
          <img className={styles['map__image']} src="chateaugiron.png"></img>
        </div>
        <div className={styles['map__body-description']}>
          <p>
            Nos furets habitent à Châteaugiron, petite cité de caractère.
          </p>
          <SpiderNoSSR />
          <div className={styles['map__body-description-triangle']} />
        </div>
      </div>
    </div>
  )
}

const Cards = () => {
  return (
    <div className={styles['cards__content']}>
      <Card img={"pearl_home.jfif"} titre={"Généralités"} 
        description={"A découvrir dans « Généralités », toutes les informations pratiques sur le furet, son histoire, sa morphologie, son alimentation, son habitat, etc… Le passage incontournable si vous ne connaissez pas encore bien les furets."}/>
      <Card img={"sparrow_grass.JPG"} titre={"Nos furets"} 
        description={"« Les furets du Castel » se focalise sur la vie de nos deux petits poilus, Sparrow et Pearl, en photos en en vidéos, leur petit nid et peut-être un jour leur descendance…"}/>
      <Card img={"sparrow_salon.JPG"} titre={"Revues"} 
        description={"Notre revue de livres vous permettra de vous y retrouver dans la littérature pour furets."}/>
      <Card img={"sparrow_curieux.JPG"} titre={"Forum"} 
        description="Le « Forum » est un espace d’échange pour s’apporter des conseils mutuels, poster les photos de vos bébés ou se filer de bons tuyaux…" />
    </div>
  )
}

const Card = (props) => {
  return (
    <div className={styles['card__content']}>
      <a href="/elevage">
        <div className={styles['card__content-media']}>
          <img src={props.img}></img>
          <div className={styles['card__content-media-badge']}>
            <img src={props.img}></img>
          </div>
        </div>

        <div className={styles['card__content-body']}>
          <h3>{props.titre}</h3>
          <p>{props.description}</p>
        </div>

        <div className={styles['card__content-footer']}>
          <div className={styles["card__content-footer-cta"]}>Voir Plus</div>
        </div>
      </a>
    </div>
  )
}

