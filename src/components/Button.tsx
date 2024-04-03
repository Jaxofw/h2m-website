import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconProp
}

const Button = ({ className, children, icon, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`flex items-center justify-center border-[1px] border-white/25 text-white ${icon && 'space-x-2'} ${className}`}
    >
      {children}
      {icon && <FontAwesomeIcon icon={icon} />}
    </button>
  )
}

export default Button
