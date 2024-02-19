import React from 'react';
import styles from './index.module.css'
import FilledButton from '../../../Components/Buttons/FilledButton/index'

const Hero = () => {
  return (
      <div  className={styles.heroMain}>
        <p>Building things <br /> is our mission.</p>
        <div className={styles.underg}>
            <div className={styles.heroSecondDiv}>
                <p>
                    Feature Projects
                </p>
                <p id={styles.nationalUni}>
                    The National University of <br /> Architecture
                </p>
                <div className={styles.heroBtn}>
                    <FilledButton img text={'Back'} background={'black'} color={'white'} padding={'15px 135px'} />

                    <FilledButton img text={'Back'} background={'black'} color={'white'} padding={'15px 135px'} />
                </div>
            </div>
        </div>
        
      </div>

  )
}

export default Hero
