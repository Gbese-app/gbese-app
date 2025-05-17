import { createContext, ReactNode, useState } from 'react'

export const GlobalContext = createContext({})

const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentUserId, setCurrentUserId] = useState<string | number>('')
  return (
    <GlobalContext.Provider value={{ currentUserId, setCurrentUserId }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider
