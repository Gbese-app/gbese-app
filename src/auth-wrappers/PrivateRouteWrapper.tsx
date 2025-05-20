import { ReactElement, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../hook/useAuthContext'
import { toast } from 'sonner'

type Props = {
  component: ReactNode
}

const PrivateRouteWrapper = ({ component }: Props): ReactElement => {
  const { isLoggedIn } = useAuthContext()

  if (!isLoggedIn) {
    toast.success('Login to access this page')
    return <Navigate to="/login" replace />
  }

  return <>{component}</>
}

export default PrivateRouteWrapper
