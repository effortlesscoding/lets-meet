import React from 'react'
import { CardHeader } from './cardheader/navbar-layout-drawer-cardheader.component'
import { CardBody } from './cardBody/navbar-layout-drawer-cardbody.component'

export const Card = () => {
    return (
        <article>
            <CardHeader name={"MIKE"}/>
            <CardBody title= {'Birth of a Legend'} text={'Hi, my name is mike and im always online!'} />
        </article>
    )
}