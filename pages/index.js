import Head from 'next/head'
import Header from '../components/Header'
import TopOfPage from '../components/TopOfPage'
import styles from './home.module.scss'

import dynamic from 'next/dynamic'

const SliderNoSSR = dynamic(
  () => import('../components/Slider'),
  { ssr: false }
)

const SpiderNoSSR = dynamic(
  () => import('../components/Splider'),
  { ssr: false }
)

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Castel Furets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main className={styles['main-content']}>
        <div className={styles.diapo}>
        </div>
        <TopOfPage h1="Bienvenue sur CastelFurets !" h2="Le site d'une amatrice amoureuse des furets" p="Venez découvrir l'objet de ma passion" image="P1013943-Grand.jpg"/>
        <Cards />
        <h2>Mais pourquoi Castel furets ?</h2>
        <p>En référence à la petite cité de caractère de Châteaugiron en Ille et Vilaine (35) où nous habitons et qui fait de nous des castelgironnais et de nos furets des castelfurets. D'ailleurs, si vous en avez l'occasion, n'hésitez pas à venir visiter la ville et le magnifique château médiéval qui trône en plein centre.</p>
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
      <Card img={"sparrow_grass.JPG"} titre={"Les furets du Castel"} 
        description={"« Les furets du Castel » se focalise sur la vie de nos deux petits poilus, Sparrow et Pearl, en photos en en vidéos, leur petit nid et peut-être un jour leur descendance…"}/>
      <Card img={"sparrow_salon.JPG"} titre={"Références documentaires"} 
        description={"Référencement de quelques livres, sites internet et réseaux sociaux sur le sujet"}/>
      <Card img={"sparrow_curieux.JPG"} titre={"Forum"} 
        description="Le « Forum » est un espace d’échange pour s’apporter des conseils mutuels, poster les photos de vos bébés ou se filer de bons tuyaux…" />
    </div>
  )
}

const Card = (props) => {
  return (
    <div className={styles['card__content']}>
      <a href="/generalites">
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

