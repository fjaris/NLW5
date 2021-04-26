import '../styles/global.scss'

import { Header } from '../components/Header'
import { Player } from '../components/Player'
import styles from '../styles/app.module.scss'
import { PlayerContextProvider } from '../contexts/PlayerContext'



function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      < div className={styles.wrapper} >
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player></Player>
      </div >
    </PlayerContextProvider>
  )
}

export default MyApp

// o arquivo app ele é exibido em toda a página da aplicação, se eu quero que um componente sempre esteja visivel na minha aplicação eu tenho que coloca-lo no app
// por exemplo, se o header é o mesmo em todas as páginas, eu renderizo o header aqui
