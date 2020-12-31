import styles from './TopOfPage.module.scss';

const TopOfPage = (params) => {
  return (
    <div className={styles['top-content']}>
      <div className={styles['top-blockimg']}>
        <img className={styles['top-image']} src={params.image} />
      </div>
      <div className={styles['top-description']}>
        <h1>{params.h1}</h1>
        <h2>{params.h2}</h2>
        <p>{params.p}</p>
      </div>
    </div>
  )
}

export default TopOfPage;