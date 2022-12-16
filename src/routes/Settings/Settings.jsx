import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import AuthContext from '../../context/AuthContext';
import useGetUserInfo from '../../hooks/useGetUserInfo';
import style from './settings.module.css'
import UserDataForm from './UserDataForm/UserDataForm';
import UserGameForm from './UserGameForm/UserGameForm';
import UserSecurityForm from './UserSecurityForm/UserSecurityForm';

const Settings = () => {

    const user = useGetUserInfo();
    const userUrl = `http://localhost:3500/users/${user.id}`
    const authCtx = useContext(AuthContext)
    const [updateAuth, setUpdateAuth] = useState({accessToken: authCtx.auth.accessToken, user:authCtx.auth.user})
    const [userData, setUserData] = useState(user)

    const components = [
    <UserDataForm userUrl={userUrl} userData={userData} authCtx={authCtx} setUserData={setUserData} updateAuth={updateAuth} setUpdateAuth={setUpdateAuth}/>,
    <UserGameForm userUrl={userUrl} userData={userData} authCtx={authCtx} setUserData={setUserData} updateAuth={updateAuth} setUpdateAuth={setUpdateAuth}/>,
    <UserSecurityForm userUrl={userUrl} userData={userData} authCtx={authCtx} setUserData={setUserData} updateAuth={updateAuth} setUpdateAuth={setUpdateAuth}/>,
  ]
  
  
  const [tabs, setTabs] = useState(
    [true,false,false]
    )

  const tabClickHandler = (idx) => {
      setTabs(prev => prev.map((item,index) => index === idx ? true : false))
  }

/*   const onButtonClick = (clickedSection) => {
    setTabs(clickedSection)
  } */

  let activeTab = tabs.findIndex(tab => tab === true)



  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <Navbar/>
      </div>
       <div className={style['background-pattern']}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
       </div>
      <div className={style.main}>
        <div className={style.title}>
            <h2>Account Settings <i className="fa-solid fa-gears"></i></h2>
        </div>
        <div className={style['navigation-container']}>
         <ul className={style.navigation}>
           <li>
               <button onClick={() => tabClickHandler(0)} className={`${tabs[0] && style.clicked}`}>
                 <h2>Details <span><i className="fa-solid fa-id-card"></i></span></h2>
               </button>
           </li>
           <li>
               <button onClick={() => tabClickHandler(1)} className={`${tabs[1] && style.clicked}`}>
                 <h2>Gaming <span><i className="fa-solid fa-puzzle-piece"></i></span></h2>
               </button>
           </li>
           <li>
               <button onClick={() => tabClickHandler(2)} className={`${tabs[2] && style.clicked}`}>
                 <h2>Security <span><i className="fa-solid fa-user-shield"></i></span></h2>
               </button>
           </li>
         </ul>
        </div>
        <div className={style['account-settings']}>
          {components[activeTab]}
        </div>
      </div>
        <div className={style.footer}>
          <Footer/>
        </div>
    </div>
  )
}

export default Settings