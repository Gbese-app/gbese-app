import { createContext, useContext, useState, ReactNode } from 'react'

interface WalletContextProps {
  userAddress: string | null
  setUserAddress: (addr: string | null) => void
}

const WalletContext = createContext<WalletContextProps | undefined>(undefined)

export function WalletProvider({ children }: { children: ReactNode }) {
  const [userAddress, setUserAddress] = useState<string | null>(null)
  return (
    <WalletContext.Provider value={{ userAddress, setUserAddress }}>
      {children}
    </WalletContext.Provider>
  )
}

export function useWallet() {
  const ctx = useContext(WalletContext)
  if (!ctx) throw new Error('useWallet must be used inside WalletProvider')
  return ctx
}
