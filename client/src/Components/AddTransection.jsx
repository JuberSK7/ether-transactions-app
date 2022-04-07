import { useGlobalState, setGlobalState } from '../Data/data'
import { useState } from 'react'
import { sendMoney } from '../Intermediate/Transaction'
import styled from 'styled-components'

const AddTransactionCard = () => {
  const [modal] = useGlobalState('modal')
  const [connectedAccount] = useGlobalState('connectedAccount')
  const [address, setAddress] = useState('')
  const [amount, setAmount] = useState('')
  const [remark, setRemark] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    if (!address || !amount || !remark) return
    setLoading(true)

    sendMoney({ connectedAccount, address, amount, remark })
      .then(() => {
        setGlobalState('transaction', { address, amount, remark })
        setLoading(false)
        setGlobalState('modal', '')
        resetForm()
      })
      .catch((error) => {
        setLoading(false)
        console.log(error)
      })
  }

  const resetForm = () => {
    setAddress('')
    setAmount('')
    setRemark('')
  }

  return (
    <TransactionDiv>
      <SecondDiv>
        <MainTransaction>
          <HeadingTop>
            <p> Transfer Ethers <i className="fa-duotone fa-money-check-dollar" aria-hidden="true"/></p><i class="fa-duotone fa-money-check-dollar"></i>
          
          </HeadingTop>

          <InputDiv>
            <input
              className="input_feild"
              type="text"
              name="address"
              placeholder="To"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
          </InputDiv>

          <InputDiv>
            <input
              className="input_feild"
              type="number"
              step={0.0001}
              name="amount"
              placeholder="Amount (Eth)"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
            />
          </InputDiv>

          <InputDiv>
            <input
              className="input_feild"
              type="text"
              name="remark"
              placeholder="Enter middle 25 to 100 any value"
              onChange={(e) => setRemark(e.target.value)}
              value={remark}
            />
          </InputDiv>

          <SubmitDiv>
            {!loading ? (
              <button
                type="submit"
                onClick={handleSubmit}
                className='button2'
                
              >
                Send Ethers
              </button>
            ) : (
              <button
              className='button2'
               
                disabled
              >

          
              
<i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
<span className="sr-only">Loading...</span>
              </button>
            )}
          </SubmitDiv>
        </MainTransaction>
      </SecondDiv>
    </TransactionDiv>
  )
}

export default AddTransactionCard


const TransactionDiv = styled.div`
display: flex;
justify-content: center;
text-align: center;
margin: 32px;



`
const SecondDiv = styled.div`

box-shadow: 5px 10px #c0bdbd;
border-radius:  15px;
background-color: #D5D8DC;

height: 400px;
width: 400px;
`

const MainTransaction = styled.div`
padding: 12px;`


const HeadingTop = styled.div`
p {
    font-size: 24px;
}
`
const InputDiv = styled.div`
border: none;
padding: 8px;

input{
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 3px solid #555;
    outline: none;
}


`

const SubmitDiv = styled.div`
.button2 {
  
     border: none;
     border-radius: 1rem;
     cursor: pointer;
     color: #fff;
     background-color: #154360;
     font-size: 1rem;
     font-weight: 100;
     overflow: hidden;
     padding: 1rem 2rem;
     position: relative;
     text-decoration: none;
     transition: .2s transform ease-in-out;
     will-change: transform;
     z-index: 0;
   }
   i {
       font-size: 24px;
       color: green;
   }
   `