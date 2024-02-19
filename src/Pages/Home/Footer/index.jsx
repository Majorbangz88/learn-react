import React from "react";
import styles from "./index.module.css";
import TheBox from "../../../Assets/Images/Random Symboles 3.svg";
import CompanyName from "../../../Assets/Images/TheBox.svg";
import FilledButton from "../../../Components/Buttons/FilledButton";
import { FaFacebook } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.footerCenter}>
           <div className={styles.footerFirstInner}>
                <p>
                  <span>ADDRESS: </span>
                  6391 Elgin St. Celina, Delaware 10299
                </p>

                <p>
                  <span>PHONE:    </span>
                    +84 1102 2703
                </p>

                <p>
                    <span> EMAIL:    </span>
                    hello@thebox.com
                </p>

                <div className={styles.companyDetails}>
                    <img src={TheBox} alt="" className={styles.theBox} />
                    <img src={CompanyName} alt="" className={styles.companyName} />
                </div>
            </div>
                  

            <div className={styles.footerSecondInner}>
                <p>
                    Newsletter
                    <form action="">
                        <input type="text" placeholder="Your email here" />
                        <FilledButton text={"Subscribe"} background={'rgb(249, 153,93)'} padding={'11px 40px'} cursor={'pointer'} border={'none'} borderRadius={'5px'} color={'white'} fontSize={'16px'}  />
                    </form>
                    <p>Social:</p>
                    <div className={styles.socialIconsDiv}>
                        <FaFacebook className={styles.socialIcons} />
                        <ImLinkedin className={styles.socialIcons} />
                        <AiFillTwitterCircle className={styles.socialIcons} />
                    </div>
                </p>
            </div>
        </div>

        <div className={styles.footerLastDiv}>
             <p>TheBox Company © 2022. All Rights Reserved</p>
        </div>

    </div>
  );
};

export default Footer;
