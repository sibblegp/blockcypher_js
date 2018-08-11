import { BlockCypherAPI } from '../../blockcypher'
import { resolve } from 'url';

export interface BTCBlockInterface {
    hash: string
    height: number
    chain: string
    total: number
    fees: number
    ver: number
    time: string
    received_time: string
    bits: number
    nonce: number
    n_tx: number
    prev_block: string
    mrkl_root: string
    txids: string[]
    depth: number
    prev_block_url: string
    tx_url: string
    next_txids?: string
}

export class BTCBlock{
    hash: string
    height: number
    chain: string
    total: number
    fees: number
    ver: number
    time: string
    received_time: string
    bits: number
    nonce: number
    n_tx: number
    prev_block: string
    mrkl_root: string
    txids: string[]
    depth: number
    prev_block_url: string
    tx_url: string
    next_txids?: string
    api: BlockCypherAPI

    constructor(results: BTCBlockInterface, api: BlockCypherAPI){
        this.hash = results.hash
        this.height = results.height
        this.chain = results.chain
        this.total = results.total
        this.fees = results.fees
        this.ver = results.ver
        this.time = results.time
        this.received_time = results.received_time
        this.bits = results.bits
        this.nonce = results.nonce
        this.n_tx = results.n_tx
        this.prev_block = results.prev_block
        this.mrkl_root = results.mrkl_root
        this.txids = results.txids
        this.depth = results.depth
        this.prev_block_url = results.prev_block_url
        this.tx_url = results.tx_url
        
        if(results.next_txids){
            this.next_txids = results.next_txids
        }
        this.api = api
    }

    async getPreviousBlock(){
        let previousBlock: BTCBlock = await this.api.getBlock(this.prev_block)
        let p = new Promise<BTCBlock>((resolve, reject) => {
            resolve(previousBlock)
        })
        return p
    }
}