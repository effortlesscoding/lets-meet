import React from 'react'
import classes from './navbar-layout-drawer-cardheader.module.scss'


export const CardHeader = props => {

    console.log(props.name)
    var style = {
        backgroundImage: 'url(https://source.unsplash.com/user/erondu/600x400)',
    };

    return (
        <header 
        style={style}
        className={classes.cardHeader}>
            <h4 className={classes.cardHeaderTitle}>Mike</h4>
        </header>
    )
}