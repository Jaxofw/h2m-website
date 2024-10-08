import { faDiscord, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Config from '@/../config.ts'

type FooterProps = {
  className?: string
}

const Footer = ({ className }: FooterProps) => {
  const { discord, twitter } = Config.Links

  return (
    <div
      className={`flex h-1/6 flex-col items-center justify-center space-y-1 text-white ${className && className}`}
    >
      <h1 className="text-lg font-semibold">Follow Us</h1>
      <div className="flex space-x-8 pt-4 text-xl">
        <button
          className="flex items-center justify-center rounded-full bg-[#5e64eb] p-2"
          onClick={() => window.open(discord, '_blank')}
        >
          <FontAwesomeIcon icon={faDiscord} />
        </button>
        <button
          className="flex items-center justify-center rounded-full bg-black p-2"
          onClick={() => window.open(twitter, '_blank')}
        >
          <FontAwesomeIcon icon={faXTwitter} />
        </button>
      </div>
    </div>
  )
}

export default Footer
