import { useEffect } from 'react'
import AddTransactionCard from './Components/AddTransection'
import Navbar from './Components/Navbar'
import './App.css'
import {
  isWallectConnected,
  checkIfTransactionExist,
  connectWallet,
} from './Intermediate/Transaction'
import { useGlobalState } from './Data/data'

const App = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  useEffect(() => {
    isWallectConnected()
    checkIfTransactionExist()
  }, [])

  return (
    <>
      < Navbar/>
 
      {!connectedAccount ? (
        <div className='App'>
          <div className='App_Container'>
            <h1>Connecting your wallet <i className="fas fa-wallet" aria-hidden="true"/></h1>
            
          <button
            onClick={connectWallet}
            className="button"
          >
            Connect Wallet
          </button>
        </div>
        </div>
      ) : (
        <>
          
          <AddTransactionCard />
        </>
      )}
    </>
  )
}

export default App