import { faDiscord, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div className="flex h-[168px] flex-col items-center justify-center bg-footer text-white">
      <h1 className="text-lg font-semibold">Follow Us</h1>
      <div className="flex space-x-8 pt-4 text-xl">
        <a href="https://discord.gg/TBuqVx5Fdn">
          <div className="flex items-center justify-center rounded-full bg-[#5e64eb] p-2">
            <FontAwesomeIcon icon={faDiscord} />
          </div>
        </a>
        <a href="https://twitter.com/H2Multiplayer">
          <div className="flex items-center justify-center rounded-full bg-black p-2">
            <FontAwesomeIcon icon={faXTwitter} />
          </div>
        </a>
      </div>
    </div>
  )
}

export default Footer
