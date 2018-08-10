import { BlockCypherAPI } from '../../blockcypher'

export interface BTCChainInterface {
    name: string
    height: number
    hash: string
    time: string
    latest_url: string
    previous_hash: string
    previous_url: string
    peer_count: number
    high_fee_per_kb: number
    medium_fee_per_kb: number
    low_fee_per_kb: number
    unconfirmed_count: number
    last_fork_height?: number
    last_fork_hash?: string
}

export class BTCChain{
    name: string
    height: number
    hash: string
    time: string
    latest_url: string
    previous_hash: string
    previous_url: string
    peer_count: number
    high_fee_per_kb: number
    medium_fee_per_kb: number
    low_fee_per_kb: number
    unconfirmed_count: number
    last_fork_height?: number
    last_fork_hash?: string
    api: BlockCypherAPI

    constructor(results: BTCChainInterface, api: BlockCypherAPI){
        this.name = results.name
        this.height = results.height
        this.hash = results.hash
        this.time = results.time
        this.latest_url = results.latest_url
        this.previous_hash = results.previous_hash
        this.previous_url = results.previous_url
        this.peer_count = results.peer_count
        this.high_fee_per_kb = results.high_fee_per_kb
        this.medium_fee_per_kb = results.medium_fee_per_kb
        this.low_fee_per_kb = results.low_fee_per_kb
        this.unconfirmed_count = results.unconfirmed_count
        if(results.last_fork_height){
            this.last_fork_height = results.last_fork_height
        }
        if(results.last_fork_hash){
            this.last_fork_hash = results.last_fork_hash
        }
        this.api = api
    }
}