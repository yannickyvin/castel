const Header = () => {
  return (
    <header>
      <title>Castel Furets Header</title>
      <nav className="flex-nav">
        <div className="logo-area">
          <img src="vercel.svg"></img>
        </div>
        <div className="content-links">
          <ul>
            <li>Accueil</li>
            <li><a href="/elevage">Elevage</a></li>
            <li>Guides</li>
            <li>Furets</li>
            <li>Forum</li>
          </ul>
        </div>
        <div className="network-area">
          <img src="f_logo_RGB-Blue_58.png"></img>
        </div>
      </nav>
    <style jsx>{`
      header {
        border-bottom: 1px solid rgba(0,0,0,.125);
        position: sticky;
        top: 0;
        width: 100%;
      }

      .flex-nav {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        margin: 0;
        width: 100%;
        background-color: white;
        
      }

      img {
        width: 100%;
      }

      ul {
        list-style: none;
      }

      li {
        display: inline-block;
        margin: 0 3em;
      }

      .logo-area {
        width: 50px;
      }

      .network-area {
        width: 50px;
      }

    `}</style>
    </header>
  )
}

export default Header;