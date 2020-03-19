import React from 'react';

import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import style from './sideNav.module.css'

const SideNavItems = () => {

    const items = [
        {
            type: style.option,
            icon: 'home',
            text: 'Home',
            link: '/'
        },
        {
            type: style.option,
            icon: 'far fa-newspaper',
            text: 'News',
            link: '/news'
        },
        {
            type: style.option,
            icon: 'play',
            text: 'videos',
            link: '/videoss'
        },
        {
            type: style.option,
            icon: 'fas fa-sign-in-alt',
            text: 'sign in',
            link: '/sign-in'
        },
        {
            type: style.option,
            icon: 'fas fa-sign-out-alt',
            text: 'sign out ',
            link: '/sign-out'
        },

    ]


    const showItems = () => {
        return items.map((item,i) => {
            return (
                <div key={i} className={item.type}>
                    <Link to={item.link}>
                        <FontAwesome name={item.icon}/>
                {item.text}
            </Link>
                </div>
            )
        })
    }

    return (
        <div>
            {showItems()}
        </div>

    )
}



export default SideNavItems;