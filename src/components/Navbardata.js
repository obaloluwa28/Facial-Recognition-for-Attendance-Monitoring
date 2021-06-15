import React from 'react';
import * as ImIcons from "react-icons/im";
import * as FiIcons from "react-icons/fi";

export const Navbardata =[
    {
        title: 'DASHBOARD',
        path: '/',
        icons: <FiIcons.FiMonitor />,
        cName: 'nav-text'
    },

    {
        title: 'USERS',
        path: '/user',
        icons: <FiIcons.FiUsers />,
        cName: 'nav-text'
    },

    {
        title: 'ATTENDANCE',
        path: '/attendance',
        icons: <ImIcons.ImStatsBars />,
        cName: 'nav-text'
    },

    {
        title: 'SETTINGS',
        path: '/settings',
        icons: <FiIcons.FiSettings/>,
        cName: 'nav-text'
    }
]
