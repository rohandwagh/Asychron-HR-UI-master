import React from 'react';
import styles from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import hoc from '../../../hoc/hoc';

const sideDrawer=(props)=>{
    let attachedClasses = [styles.SideDrawer, styles.Close];
    if(props.open){
        attachedClasses = [styles.SideDrawer, styles.Open];
    }
    return(
        <hoc>
        <Backdrop show={props.open} clicked={props.closed}/>
     
        <div className={attachedClasses.join(' ')}>
            <Logo height="11%"/>
            <nav>
                <NavigationItems />
                </nav>
        </div>
        
        </hoc>
    );
};

export default sideDrawer;
