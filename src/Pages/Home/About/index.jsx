import React from 'react'
import MaleImage from '../../../Assets/Images/unsplash_6anudmpILw4.png'
import FilledButton from '../../../Components/Buttons/FilledButton/index'
import styles from './index.module.css'

const About = () => {
  return (
    <div className={styles.mainContainer}>
            <div>
                <img src={MaleImage} alt="" className={styles.maleImage} />
            </div>
            
            <div className={styles.textDiv}>
                    <p className={styles.aboutText}>
                        About us
                    </p>
                    <p className={styles.aboutInnerText}>
                         For more than 30 years we have been <br />delivering world-class construction <br /> and we’ve built many lasting <br /> relationships along the way. <br /> <br /> We’ve matured into an industry leader <br /> and trusted resource for those seeking <br />quality, innovation and reliability when <br /> building in the U.S.
                    </p>
                    <FilledButton text={'More on Our History'} background={'white'} padding={'15px 35px'} border={'none'} cursor={'pointer'} fontFamily={'Work Sans'} fontSize={'15px'} fontWeight={'bold'} color={'rgb(41, 71, 169)'}  />
            </div>
    </div>
  )
}

export default About
