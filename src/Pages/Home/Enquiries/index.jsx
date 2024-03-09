import React from 'react'
import FilledButton from '../../../Components/Buttons/FilledButton/index'
import styles from './index.module.css'

const Enquiries = () => {
  return (
    <div className={styles.mainContainer}>
        <p className={styles.boldText}>
            What can us do for you?
        </p>
        <p className={styles.smallTexts}>
            We are ready to work on a project of any complexity, <br /> whether it’s commercial or residential.
        </p>

        <form action="" className={styles.formContent}>
            <div className={styles.inputOneDiv}>
                <input type="text" name="name" id="" placeholder='Your Name' required className={styles.divOneBoxes} />

                <input type="text" name="Email" id="" placeholder='Email' required className={styles.divOneBoxes} />
            </div>
            <div className={styles.inputTwoDiv}>
                <select name="Reason" id="" required className={styles.selectOption}>
                    <option value="" >
                        Reason for Contacting</option>
                </select>
                <input type="text" name="PhoneNumber" id="" placeholder='Phone' className={styles.divOneBoxes} />
            </div>
            <div>
                <textarea name="Message" id="" cols="90" rows="10" placeholder='Message' className={styles.textArea}></textarea>
                <p className={styles.required}>
                    <span>* </span>
                    Indicates a required field
                </p>
            </div>
            <FilledButton text={'Submit'} padding={'14px 80px'} background={'rgb(41, 71, 169'} color={'white'} border={'none'} fontFamily={'Work Sans'} fontSize={'15px'} />
        </form>
    </div>
  )
}

export default Enquiries
