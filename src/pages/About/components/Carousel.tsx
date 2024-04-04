import useEmblaCarousel from 'embla-carousel-react'

interface CarouselProps {
  type: 'left' | 'right'
  title: string
  description: string
  images: string[]
}

const Carousel = ({ type, title, description, images }: CarouselProps) => {
  const [emblaRef] = useEmblaCarousel()

  const cover = ({ type }: { type: 'left' | 'right' }) => {
    return (
      <div
        className={`flex w-full flex-col items-center justify-center space-y-10 px-4 text-center md:px-20 md:text-left lg:w-1/2 lg:text-lg ${type === 'left' ? 'pb-10 lg:pt-10' : 'pt-10 lg:pb-10'}`}
      >
        <h1 className="text-center font-['helvetica'] text-4xl font-semibold text-green lg:text-5xl">
          {title}
        </h1>
        <p className="text-center font-['helvetica'] font-semibold leading-[1.8] text-white">
          {description}
        </p>
      </div>
    )
  }

  return (
    <div
      className={`flex w-full flex-col items-center justify-between lg:h-auto lg:flex-row ${type === 'left' ? 'bg-secondary pl-4 lg:pl-[70px]' : 'pr-4 lg:pr-[70px]'}`}
    >
      {type === 'right' && cover({ type: 'right' })}
      <div className="h-full w-full py-12">
        <div className="w-full overflow-hidden" ref={emblaRef}>
          <div className="flex space-x-2">
            {images.map((image, index) => (
              <div className="flex min-w-0 flex-[0_0_70%] md:flex-[0_0_70%]" key={index}>
                <img src={image} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {type === 'left' && cover({ type: 'left' })}
    </div>
  )
}

export default Carousel
