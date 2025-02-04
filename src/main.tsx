import { PrivyProvider } from '@privy-io/react-auth'
import { toSolanaWalletConnectors } from '@privy-io/react-auth/solana'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const solanaConnectors = toSolanaWalletConnectors({
  // By default, shouldAutoConnect is enabled
  shouldAutoConnect: true,
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrivyProvider
      appId="cm6q1dv6d02gj13nnk8mgqo4o"
      config={{
        // Display email and wallet as login methods
        loginMethods: ['email', 'wallet', 'google'],
        // Customize Privy's appearance in your app
        appearance: {
          theme: 'dark',
          accentColor: '#22c55e',
          walletChainType: 'ethereum-and-solana',
          showWalletLoginFirst: false,
        },
        externalWallets: {
          walletConnect: {
            enabled: true,
          },
          coinbaseWallet: {
            connectionOptions: 'all',
          },
          solana: {
            connectors: solanaConnectors,
          },
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          // createOnLogin: 'users-without-wallets', // for ethereum wallets
          // // @ts-expect-error solana wallet works but not in ts
          // solana: {
          //   createOnLogin: 'users-without-wallets',
          // },
        },
        // solanaClusters: [{ name: 'mainnet-beta' }],
      }}
    >
      <App />
    </PrivyProvider>
  </StrictMode>
)
