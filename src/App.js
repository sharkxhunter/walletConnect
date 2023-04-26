import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon, bsc, cronos } from 'wagmi/chains'

import { Web3Button } from '@web3modal/react'
import Navbar from './components/Navbar'
import Texts from './components/Texts'

const chains = [arbitrum, mainnet, polygon, bsc, cronos]
const projectId = '6f0c5fe7fc24b43690934804bcb4fa62'

const { provider } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider
})
const ethereumClient = new EthereumClient(wagmiClient, chains)

function App() {
  return (
    <div className='w-full flex justify-center bg-[#141414]'>
      <div className='w-full mx-[100px]'>
        <Navbar></Navbar>
        <div className='w-full flex flex-col justify-evenly'>
          <img className="w-full min-h-[700px] max-h-[700px] rounded-3xl my-1" src="./bg.jpeg" alt="..." />
          <div className='absolute self-center items-center text-center flex flex-col'>
            <img src="./logo_mark.svg"></img>
            <div className='text-white'>
              <h1 className=' font-extrabold text-[72px]'>CONNECT<br></br>ING WEB3</h1>
              <p className='text-lg'>THE COMMUNICATIONS PROTOCOL FOR WEB3,<br></br> WALLETCONNECT BRINGS THE ECOSYSTEM<br></br>TOGETHER BY ENABLING WALLETS AND APPS TO<br></br>SECURELY CONNECT AND INTERACT.</p>
            </div>
            <div className='flex flex-row my-4 mx-2'>
              <div className='px-3'>
                <WagmiConfig client={wagmiClient}>
                  <Web3Button className=' rounded-full' accentColor="blueviolet"/>
                </WagmiConfig>
                <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
              </div>
              <button className=' rounded-full px-3 py-2 bg-gray-200 hover:bg-gray-400'>EXPLORER WALLETS & APPS</button>
            </div>
          </div>
        </div>
        <br></br>
        <Texts></Texts>
        <br></br>
        <div className='text-white text-[50px] font-bold font-sans'>WE MAKE IT EASY FOR<br></br>YOU TO PLUG INTO<br></br>WEB3</div>
        <div className='flex flex-row'>
          <img className="w-full" src="./connection.jpeg"></img>
        </div>
      </div>
    </div>
  )
}

export  default App;
