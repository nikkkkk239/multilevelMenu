import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './Menu'

function App() {
const menuData=[
  {label:'menu 1'},
  {label:'menu 2',subMenu:[{label:'sub menu 1'},{label:'sub menu 2'}]},
  {label:'menu 3',subMenu:[{label:'sub menu 1'},{label:'sub menu 2'},{label:'sub menu 3'},{label:'sub menu 4',subMenu:[{label:'sub sub menu 1'},{label:'sub sub menu 2'}]}]},
  {label:'menu 4',subMenu:[{label:'sub menu 1'},{label:'sub menu 2'}]}
]
  return (
    <ul>
    {
      menuData.map((menu,i)=>{
        return <Menu menuDetails={menu} key={i}/>
      })
    }
    </ul>
  )
}

export default App
