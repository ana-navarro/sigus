import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { IoCalendarNumberOutline } from 'react-icons/io5';

export const Data = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Empresas',
    path: '/company',
    icon: <IoIcons.IoMdBusiness />,
    cName: 'nav-text',
  },
  {
    title: 'Instalações',
    path: '/installations',
    icon: <FaIcons.FaCog />,
    cName: 'nav-text',
  },
  // {
  //     title: 'Clientes',
  //     path: '/clients',
  //     icon: <IoIcons.IoMdContacts />,
  //     cName: 'nav-text'
  // },
  {
    title: 'Admins',
    path: '/users',
    icon: <AiIcons.AiOutlineUsergroupDelete />,
    cName: 'nav-text',
  },
  {
    title: 'Crédito',
    path: '/credit',
    icon: <FaIcons.FaFileAlt />,
    cName: 'nav-text',
  },
  {
    title: 'Manutenção',
    path: '/maintenance',
    icon: <AiIcons.AiFillTool />,
    cName: 'nav-text',
  },
];
