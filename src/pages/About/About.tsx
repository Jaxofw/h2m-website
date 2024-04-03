import Carousel from './components/Carousel'

import Config from '@/../config.ts'

import Button from '@/components/Button'
import Footer from '@/components/Footer'

const About = () => {
  const { header, carousels } = Config.About

  return (
    <>
      <div className="flex h-auto flex-col items-center justify-center space-y-4 bg-secondary py-12">
        <h1 className="font-['helvetica'] text-[56px] font-bold text-green">{header.title}</h1>
        <p className="mx-[29rem] pb-5 text-center font-['helvetica'] text-lg leading-[1.8] text-white">
          {header.description}
        </p>
        <Button
          className="font-poppins-semibold rounded-lg bg-[#27B62A] px-3 py-2.5 text-black transition-all duration-200 hover:rounded-3xl"
          onClick={() => window.open(header.button.link, '_blank')}
        >
          {header.button.text}
        </Button>
      </div>
      {carousels.map((carousel, index) => (
        <Carousel key={index} {...carousel} type={carousel.type as 'left' | 'right'} />
      ))}
      <Footer />
    </>
  )
}

export default About
