import * as requestPromise from 'request-promise-native'
import { UrlOptions } from 'request';
import { BTCChainInterface, BTCChain } from './models/btc/chain'
//import request = require("request");


export class BlockCypherAPI {
    //apiKey: string
    readonly apiUrl: string = 'https://api.blockcypher.com/v1'
    apiUrlExtension: string = ''

    async _makeRequest(req: UrlOptions){
        let results: object = JSON.parse(await requestPromise(req))
        console.log(results)
        let p = new Promise<object>(function(resolve, reject) {
            resolve(results)
        })
        return p
    }

    async getBlockChain(){
        let uri: string = this.apiUrl + this.apiUrlExtension + '/main'
        let req = {
            url: uri,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        let results: BTCChainInterface = <BTCChainInterface> await this._makeRequest(req)
        let chain: BTCChain = new BTCChain(results, this)
        console.log(chain)
        let p = new Promise<BTCChain>(function(resolve, reject) {
            resolve(chain)
        })
        return p
    }
}

export class BTCApi extends BlockCypherAPI {
    apiUrlExtension: string = '/btc'
}

let btcChain = new BTCApi()
btcChain.getBlockChain()
