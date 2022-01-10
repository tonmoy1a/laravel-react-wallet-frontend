import { useEffect, useState } from "react"
import { useHistory, } from "react-router-dom/cjs/react-router-dom.min"
import WalletService from "../services/WalletService"

const SendMoneyComponant = () => {
    const history = useHistory()

    const [walletId, setWalletId] = useState('')
    const [note, setNote] = useState('')
    const [amount, setAmount] = useState('')
    const [isFormSubmited, setIsFormSubmited] = useState(false)
    const [error, setError] = useState("");

    const submitTrensection = async (e) => {
        e.preventDefault()
        setIsFormSubmited(true)
        setError('');
        let create = await WalletService.sendMoney(walletId, note, amount);
        if(create.success){
            history.push('/wallet')
        }else{
            setError(create.response.error)
        }

        setIsFormSubmited(false)
    }

    return(
        <div className=" row justify-content-center">
            
            <div className="col-md-6 mt-5">
                <div className="card">
                    <div className="card-header">
                        Send Money
                    </div>
                    <div className="card-body">
                        {error!=="" && <div className="alert alert-danger">{error}</div>}
                    
                        <form onSubmit={submitTrensection}>
                            <div className="form-group mb-2">
                                <label>User Wallet Email</label>
                                <input type="text" onChange={(e) => setWalletId(e.target.value)} value={walletId} className="form-control" placeholder="User Wallet Email" required/>
                            </div>

                            <div className="form-group mb-2">
                                <label>Amount</label>
                                <input type="number" onChange={(e) => setAmount(e.target.value)} value={amount} className="form-control" placeholder="0" required/>
                            </div>


                            <div className="form-group mb-2">
                                <label>Note</label>
                                <textarea className="form-control" onChange={(e) => setNote(e.target.value)} value={note} placeholder="Add Some note"></textarea>
                            </div>
                            
                            <button type="submit" className="btn btn-primary" disabled={isFormSubmited}>{isFormSubmited ? <>Working</>:<>Submit</>}</button>
                        </form>
                    </div>
                </div>
                    
            </div>     
        </div>
    )
}

export default SendMoneyComponant