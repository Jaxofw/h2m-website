import './Home.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

import Background from '@/assets/background.png'
import Homepage1 from '@/assets/homepage_1.png'
import Homepage2 from '@/assets/homepage_2.png'
import Homepage3 from '@/assets/homepage_3.png'

import Button from '@/components/Button'
import Footer from '@/components/Footer'

const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <div
        style={{ background: `url(${Background}) no-repeat fixed center center` }}
        className="flex w-full flex-col items-center justify-center"
      >
        <div className="inline-shadow my-64 h-auto w-auto rounded-3xl bg-black/0 px-20 py-20 backdrop-blur-lg">
          <div className="flex h-full flex-col items-center justify-center space-y-8 text-white">
            <h1 className="font-heebo text-[21px]">A MOD FOR</h1>
            <h1 className="font-['helvetica'] text-6xl font-bold text-green">
              Modern Warfare Remastered
            </h1>
            <h1 className="text-2xl">Recreating all of MW2 Multiplayer with new twists</h1>
            <div className="flex items-center justify-center space-x-4">
              <Button
                icon={faArrowRight}
                className="h-14 rounded-2xl bg-button-primary px-14 text-white outline outline-1 outline-white/25 hover:bg-button-hover"
                onClick={() => navigate('/install')}
              >
                <h1 className="font-heebo text-md">PLAY NOW</h1>
              </Button>
              <Button
                className="h-14 rounded-2xl bg-button-secondary px-16 text-white outline outline-1 outline-white/25 hover:bg-button-hover"
                onClick={() => navigate('/about')}
              >
                <h1 className="font-heebo text-md">READ MORE</h1>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex max-h-[364px] w-full items-center bg-transparent">
        <img src={Homepage1} alt="homepage1" className="h-auto w-1/3" />
        <img src={Homepage2} alt="homepage2" className="h-auto w-1/3" />
        <img src={Homepage3} alt="homepage3" className="h-auto w-1/3" />
      </div>
      <Footer />
    </>
  )
}

export default Home
