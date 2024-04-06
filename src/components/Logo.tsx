import { useNavigate } from 'react-router-dom'

import H2MLogo from '@/assets/logo.png'

export default function Logo({ width }: { width: number }) {
  const navigate = useNavigate()

  return (
    <button onClick={() => navigate('/')}>
      <img src={H2MLogo} alt="logo" width={width} />
    </button>
  )
}
