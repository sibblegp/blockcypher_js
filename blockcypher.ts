//import * as request from 'request-promise-native'
import request = require("request");


class BlockCypherAPI {
    //apiKey: string
    readonly apiUrl: string = 'https://api.blockcypher.com/v1'
    apiUrlExtension: string = ''

    getBlockChain(){
        let uri: string = this.apiUrl + this.apiUrlExtension + '/main'
        let req = {
            url: uri,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        request(req, function(error: any, response: object, body: any){
            console.log(body)
        })
        
    }

    _makeRequest(req: object){

    }
}

export class BTCApi extends BlockCypherAPI {
    apiUrlExtension: string = '/btc'
}

let btcChain = new BTCApi()
btcChain.getBlockChain()
