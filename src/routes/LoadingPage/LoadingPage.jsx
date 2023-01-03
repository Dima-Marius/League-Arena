import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import style from './loadingPage.module.css'

const LoadingPage = () => {
  return (
 <div className={style.container}>
    <div className={style.nav}>
      <Navbar/>
    </div>
    <div className={style['loading-container']}>
      <div>
        <div className={style.loader}>
        <div className={style.inner}>
        </div>
        </div>
       <p className={style['website-title']}>League Arena <i className="fa-solid fa-chess-knight"></i></p>
      </div>
    </div>
    <div className={style.footer}>
      <Footer/>
      </div>
 </div>
  )
}

export default LoadingPage