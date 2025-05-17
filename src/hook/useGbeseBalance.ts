import { useEffect, useState } from 'react'
import { BrowserProvider, Contract } from 'ethers'
import GbeseTokenArtifact from '../abis/GbeseToken.json'

const GBT_ADDRESS = '0xC6dd34113889f23b0bf06FA77b3EBf441cB388eF'
const GbeseTokenABI = GbeseTokenArtifact.abi // <— only the ABI array

export function useGbeseBalance(userAddress: string | null) {
  const [balance, setBalance] = useState<string | null>(null)

  useEffect(() => {
    if (!userAddress || !window.ethereum) {
      setBalance(null)
      return
    }

    const provider = new BrowserProvider(window.ethereum)
    // Pass **only** the ABI array, not the full artifact
    const contract = new Contract(GBT_ADDRESS, GbeseTokenABI, provider)

    async function fetchBalance() {
      try {
        const raw = await contract.balanceOf(userAddress)
        const formatted = Number(raw.toString()) / 1e18
        setBalance(formatted.toFixed(4))
      } catch (err) {
        console.error('Failed to fetch GBT balance', err)
      }
    }

    fetchBalance()

    const eth = window.ethereum as any
    eth.on?.('accountsChanged', fetchBalance)
    eth.on?.('chainChanged', fetchBalance)

    return () => {
      eth.removeListener?.('accountsChanged', fetchBalance)
      eth.removeListener?.('chainChanged', fetchBalance)
    }
  }, [userAddress])

  return balance
}
