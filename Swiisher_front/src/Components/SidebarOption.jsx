import React from 'react';
import '../CSS/SidebarOption.css';

function SidebarOption({Icon, option}) {
  return (
    <div className='sidebarOption'>
      <div className="sidebarOption__content">
        <div className="sidebarOption__logo">
        {Icon}
        </div>
        <div className='sidebarOption__option'>
        {option}
        </div>
      </div>
    </div>
  )
}

export default SidebarOption
