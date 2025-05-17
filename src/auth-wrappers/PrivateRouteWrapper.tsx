import { ReactElement, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../hook/useAuthContext'

type Props = {
  component: ReactNode
}

const PrivateRouteWrapper = ({ component }: Props): ReactElement => {
  const { isLoggedIn } = useAuthContext()

  if (!isLoggedIn) {
    return <Navigate to="/" replace />
  }

  return <>{component}</>
}

export default PrivateRouteWrapper
