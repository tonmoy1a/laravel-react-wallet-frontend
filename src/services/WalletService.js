import http from "../Util/Http"

class WalletService{

    static async sendMoney(walletId, note, amount){
        
        try {
            let response = await http.post('/api/wallet-trensection', {
                walletId:walletId, note:note, amount:amount
            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });

            return {success:true};
        } catch (error) {
            if(error.response){
                if(error.response.status===422){
                    return {
                        success:false,
                        response:error.response.data
                    }
                }
            }
            return {
                success:false,
                response:'Something is wrong'
            }
        }
    }

    static async userWaller(){
        
        try {
            let response = await http.get('/api/user-wallet',
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });

            return {success:true, ...response.data };

        } catch (error) {
            return {
                success:false,
                response:'Something is wrong'
            }
        }
    }

    static async userWallerTrensections(){
        
        try {
            let response = await http.get('/api/user-wallet-trensection',
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });

            return response.data;

        } catch (error) {
            return {
                success:false,
                response:'Something is wrong'
            }
        }
    }

}

export default WalletService
