import { BlockCypherAPI } from '../../blockcypher'

interface BTCTXInputInterface {
    prev_hash?: string
    output_index?: number
    output_value?: number
    script_type: string
    script: string
    addresses: string[]
    sequence: number
    age?: number
    wallet_name?: string
    wallet_token?: string
}

interface BTCTXOutputInterface {
    value: number
    script: string
    addresses: string[]
    script_type: string
    spent_by?: string
    data_hex?: string
    data_string?: string
}

export interface BTCTransactionInterface {
    block_height: number
    hash: string
    addresses: string[]
    total: number
    fees: number
    size: number
    preference: string
    relayed_by: string          //This doesn't appear to be working
    received: string
    ver: number
    lock_time: number
    double_spend: boolean
    vin_sz: number
    vout_sz: number
    confirmations: number
    inputs: BTCTXInputInterface[]
    outputs: BTCTXOutputInterface[]
    
    //Optional
    out_in_rbf?: boolean
    confidence?: number
    confirmed?: string          //Time transaction was confirmed
    receive_count?: number
    change_address?: string
    block_hash?: string
    block_index?: number
    double_of?: string
    data_protocol?: string
    hex?: string
    next_inputs?: string
    next_outputs?: string
}