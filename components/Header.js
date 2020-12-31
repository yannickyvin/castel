import styles from './Header.module.scss'
import {useState} from 'react'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);


  const changeShowMenu = () => {
    console.log('changeShowMenu' + showMenu)
    setShowMenu(!showMenu)
  }

  return (
    <header className={styles['header']}>
      <title>Castel Furets Header</title>
      <nav className={styles['flex-nav']}>
        <div className={styles['logo-area']}>
          <img src="logo-150x150.png"></img>
        </div>

        <div onClick={changeShowMenu} className={styles['menu-btn'] + ' ' + (showMenu ? styles['open'] : '')}>
          <div className={styles['menu-btn__burger']} />
        </div>
        <div className={styles['content-links'] + ' ' + (showMenu ? styles['active'] : '')}>
          <ul>
            <li><a className="link" href="/">Accueil</a></li>
            <li><a className="link" href="/generalites">Généralités</a></li>
            <li>Guides</li>
            <li>Furets</li>
            <li>Forum</li>
          </ul>
        </div>
        <div className={styles['network-area']}>
          <img src="f_logo_RGB-Blue_58.png"></img>
        </div>
      </nav>
    </header>
  )
}

export default Header;