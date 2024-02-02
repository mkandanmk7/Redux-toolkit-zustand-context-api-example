import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [active, setActive] = useState("");
  const navList = [{
    path: "users",
    title: "Users",
  },
  {
    path: "home",
    title: "Home"
  }]
  const handleActive = (page) => {
    setActive(page);
  }

  return (
    <div className='flex items-center gap-x-2'>
      {navList.map((nav,i) => {
        return <Link key={i} className={`${nav.path === active  ? "px-2 py-1 rounded-md bg-white text-black" : ""}`}
          onClick={() => handleActive(nav.path)}
          to={`/${nav.path}`}>
          {nav.title}
        </Link>
      })}
    </div>
  )
}

export default Navbar
