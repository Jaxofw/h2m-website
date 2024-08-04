import Carousel from './components/Carousel'

import Config from '@/../config.ts'
import Button from '@/components/Button'
import Footer from '@/components/Footer'

const About = () => {
  const { header, carousels } = Config.About

  return (
    <>
      <div className="flex h-auto flex-col items-center justify-center space-y-6 bg-secondary px-10 py-12">
        <h1 className="text font-['helvetica'] text-3xl font-bold text-green lg:text-[3.5rem]">
          {header.title}
        </h1>
        <p className="pb-5 text-center font-['helvetica'] text-lg leading-[1.8] text-white lg:w-1/2">
          {header.description}
        </p>
        <Button
          className="font-poppins-semibold rounded-lg bg-[#27B62A] px-3 py-2.5 text-black transition-all duration-200 hover:rounded-3xl"
          onClick={() => window.open(header.button.link, '_blank')}
        >
          {header.button.text}
        </Button>
      </div>
      {carousels.map((carousel, key) => (
        <Carousel
          key={key}
          {...carousel}
          id={key}
          type={carousel.type as 'left' | 'right'}
          className="hidden lg:flex"
        />
      ))}
      {/* MOBILE CAROUSELS */}
      {carousels.map((carousel, key) => (
        <Carousel
          {...carousel}
          id={key}
          type="right"
          className={`flex lg:hidden ${key === 0 || (key === 2 && 'bg-secondary')} `}
        />
      ))}
      <Footer className="bg-black" />
    </>
  )
}

export default About
