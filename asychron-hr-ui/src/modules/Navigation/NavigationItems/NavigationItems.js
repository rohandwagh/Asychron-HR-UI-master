import React from 'react';
import styles from './NavigationItems.module.css';
import {FaUsers, FaComments, FaUserCircle} from 'react-icons/fa';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems =()=>(
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/" exact ><FaUsers size="25px"/></NavigationItem>
        <NavigationItem link="/message"><FaComments size="25px"/></NavigationItem>
         <NavigationItem link="/user"><FaUserCircle size="25px"/></NavigationItem>
    </ul>
);

export default navigationItems;