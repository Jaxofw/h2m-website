import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useLocation, useNavigate } from 'react-router-dom'

import Button from '@/components/Button'
import Logo from '@/components/Logo'

import Config from '@/../config.ts'

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

  return (
    <nav className="flex h-[100px] w-full items-center justify-between bg-transparent px-5 outline outline-1 outline-white/25">
      <div className="flex space-x-4">
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
      <div className="flex h-full items-end space-x-4">
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
    </nav>
  )
}

export default Navbar
