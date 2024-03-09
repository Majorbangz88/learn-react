import React from 'react';
import ProjectOne from '../../../Assets/Images/New folder/unsplash_T0iFfJw 1-rB0.svg';
import ProjectTwo from '../../../Assets/Images/New folder/unsplash_8oRCwrBn_Fc 2.svg';
import ProjectThree from '../../../Assets/Images/New folder/unsplash_UV81E0oXXWQ 3.svg';
import ProjectFour from '../../../Assets/Images/New folder/unsplash_gMes5dNykus 4.svg';
import FilledButton from '../../../Components/Buttons/FilledButton/index';
import styles from './index.module.css'

const Projects = () => {
  return (
    <div className={styles.mainContainer}>
        <p>
            Projects
        </p>
        <div className={styles.mainInnerDiv}>
            <div className={styles.categories}>
                <p id={styles.all}>All</p>
                <p>Commercial</p>
                <p>Residential</p>
                <p>Other</p>
            </div>
            
            <div className={styles.projectSamples}>
                <div className={styles.projectImagesDiv}>
                    <img src={ProjectOne} alt="" className={styles.projectImages} />
                    <div className={styles.imageTexts}>
                        <p className={styles.description}>
                            Wildstone Infra Hotel
                        </p>
                        <p className={styles.subDescription}>
                            2715 Ash Dr. San Jose, South Dakota
                        </p>
                    </div>
                </div>
                
                <div className={styles.projectImagesDiv}>
                    <img src={ProjectTwo} alt="" className={styles.projectImages} />
                    <div className={styles.imageTexts}>
                        <p className={styles.description}>
                            Wish Stone Building
                        </p>
                        <p className={styles.subDescription}>
                            2972 Westheimer Rd. Santa Ana, Illinois 
                        </p>
                    </div>
                </div>

                <div className={styles.projectImagesDiv}>
                    <img src={ProjectThree} alt="" className={styles.projectImages} />
                    <div className={styles.imageTexts}>
                        <p className={styles.description}>
                            Mr. Parkinston’s House
                        </p>
                        <p className={styles.subDescription}>
                            3517 W. Gray St. Utica, Pennsylvania
                        </p>
                    </div>
                </div>

                <div className={styles.projectImagesDiv}>
                    <img src={ProjectFour} alt="" className={styles.projectImages} />
                    <div className={styles.imageTexts}>
                        <p className={styles.description}>
                            Oregano Height
                        </p>
                        <p className={styles.subDescription}>
                            2464 Royal Ln. Mesa, New Jersey 
                        </p>
                    </div>
                </div>

                <div className={styles.sectionBtn}>
                    <FilledButton background={'black'} color={'white'} padding={'14px 100px'} text={'Back'} />
                    <FilledButton background={'black'} color={'white'} padding={'14px 100px'} text={'Next'} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
