
import styles from './Slider.module.scss'
import {useEffect} from 'react'

const Slider = () => {

  useEffect(() => {

    const slides = document.querySelectorAll('.' + styles.slide);
    let index = 0;
    const time = 5000;

    slides[index].classList.add(styles.active);

    setInterval(() => {
      slides[index].classList.remove(styles.active);
      
      //Go over each slide incrementing the index
      index++;
      
      // If you go over all slides, restart the index to show the first slide and start again
      if (index === slides.length) index = 0; 
      
      slides[index].classList.add(styles.active);

    }, time);
  
  }, [])

  return(
    <div className={styles['slides']}>
      <div className={`${styles['slide']} ${styles['fade']}`}>
        <img src="sparrow_curieux.JPG" alt=""/>
        <h2 className={styles['description']}>Bienvenue sur CastelFuret !</h2>
      </div>
      <div className={`${styles['slide']} ${styles['fade']}`}>
        <img src="sparrow_grass.JPG" alt=""/>

        <h2 className={styles['description']}>Site d'élevage des furets du pays de Châteaugiron</h2>
      </div>
      <div className={`${styles['slide']} ${styles['fade']}`}>
        <img src="sparrow_salon.JPG" alt=""/>

        <h2 className={styles['description']}>Informations, guides, forum</h2>
      </div>
    </div>
  )
}

export default Slider;