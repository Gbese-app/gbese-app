interface Window {
    ethereum?: {
      isMetaMask?: boolean;
      isTrust?: boolean; 
      request: (opts: { method: string; params?: any[] }) => Promise<any>;
    };
    coinbaseWalletExtension?: any;
    keplr?: any;
    WalletConnect?: any;
}


interface EthereumProvider {
    isMetaMask?: boolean;
    isTrust?: boolean;             
    request: (opts: { method: string; params?: any[] }) => Promise<any>;
  }
  