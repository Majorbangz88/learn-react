import React from 'react';
import CallPerson from '../../../Assets/Images/icon (1).svg'
import SecondIcon from '../../../Assets/Images/icon (2).svg'
import styles from './index.module.css'

export const ReputationSection = () => {
  return (
        <div className={styles.mainContainer}>
            <p>
                Our Reputation
            </p>
            <div className={styles.firstInnerDiv}>
                <div className={styles.indDivs}>
                    <img src={CallPerson} alt="" className={styles.smallIcon} />
                    <p className={styles.divCaption}>
                        Best Services
                    </p>
                    <p className={styles.captionText}>
                        Nullam senectus porttitor in <br />eget. Eget rutrum leo interdum.
                    </p>
                </div>
                <div className={styles.indDivs}>
                    <img src={CallPerson} alt="" className={styles.smallIcon} />
                    <p className={styles.divCaption}>
                        Best Teams
                    </p>
                    <p className={styles.captionText}>
                        Cursus semper tellus volutpat <br /> aliquet lacus. 
                    </p>
                </div>
                <div className={styles.lastDiv}>
                    <img src={SecondIcon} alt="" className={styles.smallIcon} />
                    <p className={styles.divCaption}>
                        Best Designs
                    </p>
                    <p className={styles.captionText}>
                        Ultricies at ipsum nunc, <br /> tristique nam lectus.
                    </p>
                </div>
            </div>
        </div> 
  )
}

