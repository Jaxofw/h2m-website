import { useState } from 'react'

import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useLocation, useNavigate } from 'react-router-dom'

import Config from '@/../config.ts'
import Button from '@/components/Button'
import Logo from '@/components/Logo'


const items = [
  {
    label: 'HOME',
    path: '/',
  },
  {
    label: 'ABOUT',
    path: '/about',
  },
  {
    label: 'INSTALL',
    path: '/install',
  },
]

const Navbar = () => {
  const { discord } = Config.Links
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuClick = (path: string) => {
    setMenuOpen(false)
    navigate(path)
  }

  return (
    <nav className="flex h-[100px] w-full items-center justify-around bg-transparent px-5 outline outline-1 outline-white/25 lg:justify-between">
      <div className="hidden space-x-4 lg:flex">
        {items.map(({ label, path }) => (
          <button
            key={label}
            onClick={() => navigate(path)}
            className={`flex w-[116px] items-center justify-center border-b-2 pb-2 pt-16 outline-none ${
              pathname === path ? 'border-white' : 'border-transparent hover:border-white/50'
            }`}
          >
            <h1 className="font-heebo text-lg text-white">{label}</h1>
          </button>
        ))}
      </div>
      <Logo width={160} />
      <div className="hidden h-full items-end space-x-4 lg:flex">
        <Button
          icon={faDiscord}
          className="h-11 rounded-b-none rounded-t-xl bg-button-secondary px-6 hover:bg-button-hover"
          onClick={() => window.open(discord, '_blank')}
        >
          <h1 className="font-heebo text-md">OUR DISCORD</h1>
        </Button>
        <Button
          icon={faArrowRight}
          className="h-11 rounded-b-none rounded-t-xl bg-button-primary px-10 hover:bg-button-hover"
          onClick={() => navigate('/install')}
        >
          <h1 className="font-heebo text-md">PLAY NOW</h1>
        </Button>
      </div>
      <button
        className="absolute right-0 mr-10 rounded-md bg-secondary p-2 hover:bg-white/20 lg:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      {menuOpen && (
        <div className="absolute top-[6.25rem] z-50 w-full bg-black lg:hidden">
          <ul className="text-center text-white">
            {items.map(({ label, path }) => (
              <li key={label}>
                <button
                  onClick={() => handleMenuClick(path)}
                  className="font-heebo w-full border-b-2 py-2 text-lg hover:bg-white/20"
                >
                  {label}
                </button>
              </li>
            ))}
            <li>
              <button
                className="font-heebo w-full border-b-2 py-2 text-lg hover:bg-white/20"
                onClick={() => window.open(discord, '_blank')}
              >
                OUR DISCORD
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
