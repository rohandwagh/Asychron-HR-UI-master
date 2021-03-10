import React from 'react';
import asychron from '../../assets/images/asychron.jpeg';
import styles from './Logo.module.css';

const logo =(props)=>(

        <div className={styles.Logo}
        style={{height: props.height}}>
            <img src={asychron} alt="Asychron-Logo" />
        </div>

);
export default logo; 