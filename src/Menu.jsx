import React, { useState } from 'react'

function Menu({menuDetails}) {
    const [menuClicked,setMenuClicked]=useState(false)
    return (
    <li >
        <span onClick={()=>{setMenuClicked(!menuClicked)}}>{menuDetails.label}</span>
        {menuClicked && menuDetails.subMenu && <ul>
            {menuDetails.subMenu.map((menu,i)=>{
                return <Menu menuDetails={menu} key={i}/>
            })}
            </ul>}
    </li>
  )
}

export default Menu