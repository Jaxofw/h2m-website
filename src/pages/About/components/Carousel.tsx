import useEmblaCarousel from 'embla-carousel-react'

interface CarouselProps {
  type: 'left' | 'right'
  title: string
  description: string
  images: string[]
}

const Carousel = ({ type, title, description, images }: CarouselProps) => {
  const [emblaRef] = useEmblaCarousel()

  const cover = () => {
    return (
      <div className="flex w-1/2 flex-col items-center justify-center space-y-10 px-20 text-lg">
        <h1 className="font-['helvetica'] text-[56px] font-semibold text-green">{title}</h1>
        <p className="text-center font-['helvetica'] text-lg font-semibold leading-[1.8] text-white">
          {description}
        </p>
      </div>
    )
  }

  return (
    <div
      className={`flex h-auto w-full items-center justify-between ${type === 'left' ? 'bg-secondary pl-[70px]' : 'pr-[70px]'}`}
    >
      {type === 'right' && cover()}
      <div className="h-full w-full py-12">
        <div className="w-full overflow-hidden" ref={emblaRef}>
          <div className="flex space-x-2">
            {images.map((image, index) => (
              <div className="flex min-w-0 flex-[0_0_70%]" key={index}>
                <img src={image} className="h-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {type === 'left' && cover()}
    </div>
  )
}

export default Carousel
