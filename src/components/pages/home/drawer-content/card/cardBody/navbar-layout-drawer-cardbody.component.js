import React from 'react'
import classes from './navbar-layout-drawer-cardbody.module.scss'


export const CardBody = props => {

    return (
        <div className={classes.cardBody}>
            <p className={classes.date}>March 20 2015</p>
            
            <h2>{props.title}</h2>
            
            <p className={classes.bodyContent}>{props.text}</p>
        </div>
    )
}