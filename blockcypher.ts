import * as requestPromise from 'request-promise-native'
import { UrlOptions } from 'request';
import { BTCChainInterface, BTCChain } from './models/btc/chain'
import {BTCBlockInterface, BTCBlock } from './models/btc/block'
import { BTCTransactionInterface } from './models/btc/transaction'
//import request = require("request");


export class BlockCypherAPI {
    apiKey?: string
    readonly apiUrl: string = 'https://api.blockcypher.com/v1'
    apiUrlExtension: string = ''

    constructor(apiKey?: string){
        if(apiKey){
            this.apiKey = apiKey
        }
    }
    
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

    async getBlock(hash: string){
        let uri: string = this.apiUrl + this.apiUrlExtension + '/main/blocks/' + hash + '?limit=500'
        let req = {
            url: uri,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        let results: BTCBlockInterface = <BTCBlockInterface> await this._makeRequest(req)
        let block: BTCBlock = new BTCBlock(results, this)
        console.log(block)
        let p = new Promise<BTCBlock>(function(resolve, reject) {
            resolve(block)
        })
        return p
    }

    async getTransaction(hash: string){
        let uri: string = this.apiUrl + this.apiUrlExtension + '/main/txs/' + hash + '?limit=500'
        let req = {
            url: uri,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        let results: BTCTransactionInterface = <BTCTransactionInterface> await this._makeRequest(req)
        return results
        // let block: BTCBlock = new BTCBlock(results, this)
        // console.log(block)
        // let p = new Promise<BTCBlock>(function(resolve, reject) {
        //     resolve(block)
        // })
        // return p
    }
}

export class BTCApi extends BlockCypherAPI {
    apiUrlExtension: string = '/btc'
}

async function test(){
    let btc = new BTCApi()
    //btc.getBlockChain()
    //let block = await btc.getBlock('0000000000000000189bba3564a63772107b5673c940c16f12662b3e8546b412')
    //block.getPreviousBlock()
    btc.getTransaction('9cabfdef4010558f59da271aae13a57aa5f91901c132aa2709ee096d324c05b0')
}

test()