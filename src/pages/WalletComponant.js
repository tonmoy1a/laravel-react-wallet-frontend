import { useEffect, useState } from "react"
import { Button, Card, Col, Row, Table } from "react-bootstrap"
import Moment from "react-moment";
import AuthService from "../services/AuthService";
import WalletService from "../services/WalletService";
const WalletComponant = () => {

    const [userWallet, setUserWallet] = useState({});
    const [userWalletTrensction, setUserWalletTrensction] = useState([]);
    const [user, setUser] = useState(AuthService.getLogedUser())

    useEffect(()=> {
        getUserWallet();
        getUserTrensections();
    }, []);

    const getUserWallet = async () => {
        let wallet = await WalletService.userWaller();

        setUserWallet(wallet);
    }

    const getUserTrensections = async() =>{
        let wallet = await WalletService.userWallerTrensections();
        console.log(wallet)
        setUserWalletTrensction(wallet);
    }

    return (
        <Card>
            <Card.Header>
                User One Wallet
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col md={6}>
                        <Card.Title>Third Highest Amount</Card.Title>
                        <h1>{userWallet.third_hightest_amount*userWallet.currency_price}</h1>
                    </Col>
                    <Col md={6}>
                        <Card.Title>Wallet Details</Card.Title>
                        <p>Wallet ID : {userWallet.uid}</p>
                        <p>Currency : {userWallet.currency}</p>
                    </Col>
                </Row>
                
                <hr/>
                <Card.Title>Transactions</Card.Title>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Details</th>
                        <th>Trensection Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userWalletTrensction.map((val,key) => (
                            <tr key={key}>
                                <td>{val.id}</td>
                                {val.from_wallet_id===parseInt(user.userId) ? 
                                <td className="text-danger">
                                    Money Sent. Amount {val.amount*userWallet.currency_price} {userWallet.currency}
                                </td>
                                :
                                <td className="text-success">
                                    Money Received. Amount {val.amount*userWallet.currency_price} {userWallet.currency}
                                </td>
                                }
                                
                                <td>
                                    <Moment date={val.created_at} format="DD, MMM YYYY | HH:mm:ss"/>
                                </td>
                            </tr>
                        ))}
                        

                    </tbody>
                </Table>
            </Card.Body>
        </Card>

    )
}

export default WalletComponant