import React from 'react';
import PetsIcon from '@mui/icons-material/Pets';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Button } from '@mui/material';
import '../CSS/Sidebar.css';
function SideBard() {
  return (
    <section className='sideBar'>
        <div className="sideBar__containLogo">
            <PetsIcon className='sideBar__logo'/>
        </div>
        <div className="sideBar__sideBarOption">
            <SidebarOption Icon={<HomeIcon style={{fontSize:'32px'}}/>} option={"Home"}  />
            <SidebarOption Icon={<NotificationsIcon style={{fontSize:'32px'}}/>} option={"Notification"}  />
            <SidebarOption Icon={<EmailIcon style={{fontSize:'32px'}}/>} option={"Messages"}  />
            <SidebarOption Icon={<AccountBoxIcon style={{fontSize:'32px'}}/>} option={"Profil"}  />
            <Button className='sideBar__sideBarOptionBtn'>Swiish</Button>
        </div>
    </section>
  )
}

export default SideBard
