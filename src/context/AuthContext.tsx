import { createContext, ReactNode } from 'react'
import usePersistedState from '../hook/usePersistedState'
import { QueryCache } from '@tanstack/react-query'

const queryCache = new QueryCache()

const defaultValues = {
  isLoggedIn: false,
  setIsLoggedIn: () => undefined,
  // eslint-disable @typescript-eslint/no-unused-vars
  login: (_user: any) => {}, // Update to return void (implicitly)
  logout: () => undefined,
  token: undefined,
  // eslint-disable @typescript-eslint/no-unused-vars
  saveUser: (_user: any) => {}, // Update to return void (implicitly)
  user: {},
}

export const AuthContext = createContext(defaultValues)

export default function AuthContextProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = usePersistedState({
    key: 'gbese-user-loggedIn',
    defaultValue: false,
  })

  const [token, setToken] = usePersistedState({
    key: 'gbese-auth-token',
    defaultValue: undefined,
  })

  const [user, setUser] = usePersistedState({
    key: 'current-user',
    defaultValue: {},
  })

  const login = (user: any) => {
    const { token } = user
    if (token) {
      setToken(token)
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
    // No return statement, meaning it implicitly returns void
  }

  const saveUser = (user: any) => {
    setUser(user)
  }

  const logout = () => {
    setIsLoggedIn(false)
    queryCache.clear()
    setToken(undefined)
    return undefined // Explicitly return undefined to satisfy the expected type
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        login,
        logout,
        token,
        saveUser,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
