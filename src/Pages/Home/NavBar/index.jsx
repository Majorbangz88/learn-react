import React from 'react'
import Logo from '../../../Assets/Images/Random Symboles 3.svg'
import TheBox from '../../../Assets/Images/TheBox.svg'
import styles from '../NavBar/index.module.css'

const NavBar = () => {
  return (
    <div className={styles.navBarDiv}>
        <div className={styles.companyLogo}>
            <img src={Logo}  alt="" className={styles.theLogo} />
            <img src={TheBox} alt="" className={styles.theName} />
        </div>
        <div className={styles.features}>
            <p>Home</p>
            <p>About Us</p>
            <p>Projects</p>
            <p>Services</p>
            <p id={styles.contactButton}>Contact Us</p>
        </div>
    </div>
  )
}

export default NavBar
