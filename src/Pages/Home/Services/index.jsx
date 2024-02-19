import React from 'react';
import IconOne from '../../../Assets/Images/New folder/iconOne.svg';
import IconTwo from '../../../Assets/Images/New folder/iconTwo.svg';
import IconThree from '../../../Assets/Images/New folder/iconThree.svg';
import IconFour from '../../../Assets/Images/New folder/iconFour.svg';
import IconFive from '../../../Assets/Images/New folder/iconFive.svg';
import IconSix from '../../../Assets/Images/New folder/iconSix.svg';
import styles from './index.module.css'

const Services = () => {
  return (
    <div className={styles.mainContainer}>
            <p>
                    Services
            </p>
            <div className={styles.innerDiv}>
                <div className={styles.whiteBox}>
                    <img src={IconOne} alt="" className={styles.boxIcons} />
                    <hr />
                    <p>
                        Construction
                    </p>
                </div>

                <div className={styles.blueBox}>
                    <img src={IconTwo} alt="" className={styles.boxIcons} />
                    <hr />
                    <p>
                        Renovation
                    </p>
                </div>

                <div className={styles.whiteBox}>
                    <img src={IconThree} alt="" className={styles.boxIcons} />
                    <hr />
                    <p>
                        Consultation
                    </p>
                </div>

                <div className={styles.blueBox}>
                    <img src={IconFour} alt="" className={styles.boxIcons} />
                    <hr />
                    <p>
                        Repair Services
                    </p>
                </div>

                <div className={styles.whiteBox}>
                    <img src={IconFive} alt="" className={styles.boxIcons} />
                    <hr />
                    <p>
                        Architecture
                    </p>
                </div>

                <div className={styles.blueBox}>
                    <img src={IconSix} alt="" className={styles.boxIcons} />
                    <hr />
                    <p>
                        Electric
                    </p>
                </div>
            </div>
    </div>
  )
}

export default Services
