import { ChainKey, ChainId } from '@layerzerolabs/lz-sdk'
import { PoolId } from '../enums'
import {
    USDC_ADDRESS,
    USDT_ADDRESS,
    BUSD_ADDRESS,
    USDD_ADDRESS,
    SGETH_ADDRESS,
    DAI_ADDRESS,
    FRAX_ADDRESS,
    SUSD_ADDRESS,
    LUSD_ADDRESS,
    MAI_ADDRESS,
} from './addresses'

export const SHARE_DECIMALS = 6
export const SGETH_SHARE_DECIMALS = 18
export const USDD_SHARE_DECIMALS = 18
export const FRAX_SHARE_DECIMALS = 6
export const SUSD_SHARE_DECIMALS = 6
export const LUSD_SHARE_DECIMALS = 6
export const DAI_SHARE_DECIMALS = 6
export const MAI_SHARE_DECIMALS = 6

export const POOLS: {
    [chainKey in ChainKey]?: {
        [poolId in PoolId]?: {
            info: { sharedDecimals: number; address: string }
            deltaParams: {
                batched: boolean
                swapDeltaBP: number
                lpDeltaBP: number
                defaultSwapMode: boolean
                defaultLPMode: boolean
            }
            chainPaths: {
                weight: number
                dstChainId: ChainId
                dstPoolId: PoolId
            }[]
        }
    }
} = {
    ///////// MAINNET /////////

    [ChainKey.ETHEREUM]: {
        [PoolId.USDC]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDC_ADDRESS[ChainId.ETHEREUM],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                // -------------------------- loopback --------------------------------------------
                { weight: 0, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDT },

                // -------------------------- BSC --------------------------------------------
                { weight: 232, dstChainId: ChainId.BSC, dstPoolId: PoolId.BUSD },
                { weight: 284, dstChainId: ChainId.BSC, dstPoolId: PoolId.USDT },
                // -------------------------- AVALANCHE --------------------------------------
                { weight: 2007, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDC },
                { weight: 470, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDT },
                // -------------------------- POLYGON --------------------------------------
                { weight: 2322, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDC },
                { weight: 279, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM --------------------------------------
                { weight: 1808, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDC },
                { weight: 368, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM --------------------------------------
                { weight: 1458, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM --------------------------------------
                { weight: 770, dstChainId: ChainId.FANTOM, dstPoolId: PoolId.USDC },
            ],
        },

        [PoolId.USDT]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDT_ADDRESS[ChainId.ETHEREUM],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                // -------------------------- loopback --------------------------------------------
                { weight: 0, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDC },

                // -------------------------- BSC --------------------------------------------
                { weight: 260, dstChainId: ChainId.BSC, dstPoolId: PoolId.BUSD },
                { weight: 1649, dstChainId: ChainId.BSC, dstPoolId: PoolId.USDT },
                // -------------------------- AVALANCHE --------------------------------------
                { weight: 1698, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDC },
                { weight: 1899, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDT },
                // -------------------------- POLYGON --------------------------------------
                { weight: 871, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDC },
                { weight: 1200, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM --------------------------------------
                { weight: 574, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDC },
                { weight: 1043, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM --------------------------------------
                { weight: 564, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM --------------------------------------
                { weight: 242, dstChainId: ChainId.FANTOM, dstPoolId: PoolId.USDC },
            ],
        },

        [PoolId.SGETH]: {
            info: {
                sharedDecimals: SGETH_SHARE_DECIMALS,
                address: SGETH_ADDRESS[ChainId.ETHEREUM],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                { weight: 1, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.SGETH },
                { weight: 1, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.SGETH },
            ],
        },

        [PoolId.USDD]: {
            info: {
                sharedDecimals: USDD_SHARE_DECIMALS,
                address: USDD_ADDRESS[ChainId.ETHEREUM],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [{ weight: 1, dstChainId: ChainId.BSC, dstPoolId: PoolId.USDD }],
        },

        // ethereum dai
        [PoolId.DAI]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: DAI_ADDRESS[ChainId.ETHEREUM],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                { weight: 1, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.DAI },
                { weight: 1, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.DAI },
            ],
        },

        // ethereum frax
        [PoolId.FRAX]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: FRAX_ADDRESS[ChainId.ETHEREUM],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                { weight: 1, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.FRAX },
                { weight: 1, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.FRAX },
                { weight: 1, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.FRAX },
            ],
        },

        // ethereum sUSD
        [PoolId.SUSD]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: SUSD_ADDRESS[ChainId.ETHEREUM],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [{ weight: 1, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.SUSD }],
        },

        // ethereum LUSD
        [PoolId.LUSD]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: LUSD_ADDRESS[ChainId.ETHEREUM],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [{ weight: 1, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.LUSD }],
        },

        // ethereum MAI
        [PoolId.MAI]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: MAI_ADDRESS[ChainId.ETHEREUM],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                { weight: 1, dstChainId: ChainId.BSC, dstPoolId: PoolId.MAI },
                { weight: 1, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.MAI },
                { weight: 1, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.MAI },
                { weight: 1, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.MAI },
                { weight: 1, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.MAI },
            ],
        },
    },

    [ChainKey.BSC]: {
        [PoolId.BUSD]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: BUSD_ADDRESS[ChainId.BSC],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                { weight: 2665, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDC },
                { weight: 278, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDT },
                // -------------------------- AVALANCHE --------------------------------------
                { weight: 2637, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDC },
                { weight: 200, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDT },
                // -------------------------- POLYGON --------------------------------------
                { weight: 1606, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDC },
                { weight: 200, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM --------------------------------------
                { weight: 764, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDC },
                { weight: 200, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM --------------------------------------
                { weight: 365, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM --------------------------------------
                { weight: 506, dstChainId: ChainId.FANTOM, dstPoolId: PoolId.USDC },
            ],
        },

        [PoolId.USDT]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDT_ADDRESS[ChainId.BSC],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                { weight: 1018, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDC },
                { weight: 2209, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDT },
                // -------------------------- AVALANCHE --------------------------------------
                { weight: 935, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDC },
                { weight: 1200, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDT },
                // -------------------------- POLYGON --------------------------------------
                { weight: 1602, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDC },
                { weight: 1200, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM --------------------------------------
                { weight: 764, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDC },
                { weight: 200, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM --------------------------------------
                { weight: 365, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM --------------------------------------
                { weight: 506, dstChainId: ChainId.FANTOM, dstPoolId: PoolId.USDC },
            ],
        },

        [PoolId.USDD]: {
            info: {
                sharedDecimals: USDD_SHARE_DECIMALS,
                address: USDD_ADDRESS[ChainId.BSC],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [{ weight: 1, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDD }],
        },

        // bsc MAI
        [PoolId.MAI]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: MAI_ADDRESS[ChainId.BSC],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                { weight: 1, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.MAI },
                { weight: 1, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.MAI },
                { weight: 1, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.MAI },
                { weight: 1, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.MAI },
                { weight: 1, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.MAI },
            ],
        },
    },

    [ChainKey.AVALANCHE]: {
        [PoolId.USDC]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDC_ADDRESS[ChainId.AVALANCHE],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                { weight: 3367, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDC },
                { weight: 200, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDT },
                // -------------------------- BSC --------------------------------------
                { weight: 700, dstChainId: ChainId.BSC, dstPoolId: PoolId.BUSD },
                { weight: 614, dstChainId: ChainId.BSC, dstPoolId: PoolId.USDT },
                // -------------------------- POLYGON --------------------------------------
                { weight: 1793, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDC },
                { weight: 200, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM --------------------------------------
                { weight: 1865, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDC },
                { weight: 200, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM --------------------------------------
                { weight: 822, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM --------------------------------------
                { weight: 200, dstChainId: ChainId.FANTOM, dstPoolId: PoolId.USDC },
            ],
        },

        [PoolId.USDT]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDT_ADDRESS[ChainId.AVALANCHE],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                { weight: 1167, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDC },
                { weight: 1200, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDT },
                // -------------------------- BSC --------------------------------------
                { weight: 2089, dstChainId: ChainId.BSC, dstPoolId: PoolId.BUSD },
                { weight: 1200, dstChainId: ChainId.BSC, dstPoolId: PoolId.USDT },
                // -------------------------- POLYGON --------------------------------------
                { weight: 897, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDC },
                { weight: 1200, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM --------------------------------------
                { weight: 500, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDC },
                { weight: 1347, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM --------------------------------------
                { weight: 200, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM --------------------------------------
                { weight: 200, dstChainId: ChainId.FANTOM, dstPoolId: PoolId.USDC },
            ],
        },
        // avalanche frax
        [PoolId.FRAX]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: FRAX_ADDRESS[ChainId.AVALANCHE],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                { weight: 1, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.FRAX },
                { weight: 1, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.FRAX },
                { weight: 1, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.FRAX },
            ],
        },

        // avalanche MAI
        [PoolId.MAI]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: MAI_ADDRESS[ChainId.AVALANCHE],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                { weight: 1, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.MAI },
                { weight: 1, dstChainId: ChainId.BSC, dstPoolId: PoolId.MAI },
                { weight: 1, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.MAI },
                { weight: 1, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.MAI },
                { weight: 1, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.MAI },
            ],
        },
    },

    [ChainKey.POLYGON]: {
        [PoolId.USDC]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDC_ADDRESS[ChainId.POLYGON],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                { weight: 2596, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDC },
                { weight: 200, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDT },
                // -------------------------- BSC --------------------------------------
                { weight: 245, dstChainId: ChainId.BSC, dstPoolId: PoolId.BUSD },
                { weight: 325, dstChainId: ChainId.BSC, dstPoolId: PoolId.USDT },
                // -------------------------- AVALANCHE --------------------------------------
                { weight: 2236, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDC },
                { weight: 200, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM --------------------------------------
                { weight: 1734, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDC },
                { weight: 200, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM --------------------------------------
                { weight: 1265, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM --------------------------------------
                { weight: 999, dstChainId: ChainId.FANTOM, dstPoolId: PoolId.USDC },
            ],
        },

        [PoolId.USDT]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDT_ADDRESS[ChainId.POLYGON],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                { weight: 814, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDC },
                { weight: 1749, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDT },
                // -------------------------- BSC --------------------------------------
                { weight: 1012, dstChainId: ChainId.BSC, dstPoolId: PoolId.BUSD },
                { weight: 902, dstChainId: ChainId.BSC, dstPoolId: PoolId.USDT },
                // -------------------------- AVALANCHE --------------------------------------
                { weight: 1814, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDC },
                { weight: 1200, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM --------------------------------------
                { weight: 1042, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDC },
                { weight: 200, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM --------------------------------------
                { weight: 638, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM --------------------------------------
                { weight: 629, dstChainId: ChainId.FANTOM, dstPoolId: PoolId.USDC },
            ],
        },

        // polygon dai
        [PoolId.DAI]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: DAI_ADDRESS[ChainId.POLYGON],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                { weight: 1, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.DAI },
                { weight: 1, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.DAI },
            ],
        },

        // polygon MAI
        [PoolId.MAI]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: MAI_ADDRESS[ChainId.POLYGON],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                { weight: 1, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.MAI },
                { weight: 1, dstChainId: ChainId.BSC, dstPoolId: PoolId.MAI },
                { weight: 1, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.MAI },
                { weight: 1, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.MAI },
                { weight: 1, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.MAI },
            ],
        },
    },

    [ChainKey.ARBITRUM]: {
        [PoolId.USDC]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDC_ADDRESS[ChainId.ARBITRUM],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                { weight: 3840, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDC },
                { weight: 200, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDT },
                // -------------------------- BSC --------------------------------------
                { weight: 255, dstChainId: ChainId.BSC, dstPoolId: PoolId.BUSD },
                { weight: 200, dstChainId: ChainId.BSC, dstPoolId: PoolId.USDT },
                // -------------------------- AVALANCHE --------------------------------------
                { weight: 2206, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDC },
                { weight: 200, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDT },
                // -------------------------- POLYGON --------------------------------------
                { weight: 982, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDC },
                { weight: 200, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM --------------------------------------
                { weight: 1717, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM --------------------------------------
                { weight: 200, dstChainId: ChainId.FANTOM, dstPoolId: PoolId.USDC },
            ],
        },

        [PoolId.USDT]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDT_ADDRESS[ChainId.ARBITRUM],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                { weight: 775, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDC },
                { weight: 2000, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDT },
                // -------------------------- BSC --------------------------------------
                { weight: 1755, dstChainId: ChainId.BSC, dstPoolId: PoolId.BUSD },
                { weight: 6000, dstChainId: ChainId.BSC, dstPoolId: PoolId.USDT },
                // -------------------------- AVALANCHE --------------------------------------
                { weight: 2893, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDC },
                { weight: 200, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDT },
                // -------------------------- POLYGON --------------------------------------
                { weight: 2172, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDC },
                { weight: 235, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM --------------------------------------
                { weight: 1166, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM --------------------------------------
                { weight: 377, dstChainId: ChainId.FANTOM, dstPoolId: PoolId.USDC },
            ],
        },

        [PoolId.SGETH]: {
            info: {
                sharedDecimals: SGETH_SHARE_DECIMALS,
                address: SGETH_ADDRESS[ChainId.ARBITRUM],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                { weight: 8247, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.SGETH },
                { weight: 1753, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.SGETH },
            ],
        },

        // arbitrum frax
        [PoolId.FRAX]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: FRAX_ADDRESS[ChainId.ARBITRUM],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                { weight: 1, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.FRAX },
                { weight: 1, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.FRAX },
                { weight: 1, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.FRAX },
            ],
        },

        // arbitrum MAI
        [PoolId.MAI]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: MAI_ADDRESS[ChainId.ARBITRUM],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                { weight: 1, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.MAI },
                { weight: 1, dstChainId: ChainId.BSC, dstPoolId: PoolId.MAI },
                { weight: 1, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.MAI },
                { weight: 1, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.MAI },
                { weight: 1, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.MAI },
            ],
        },
    },

    [ChainKey.OPTIMISM]: {
        [PoolId.USDC]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDC_ADDRESS[ChainId.OPTIMISM],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                { weight: 2951, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDC },
                { weight: 328, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDT },
                // -------------------------- BSC --------------------------------------
                { weight: 637, dstChainId: ChainId.BSC, dstPoolId: PoolId.BUSD },
                { weight: 440, dstChainId: ChainId.BSC, dstPoolId: PoolId.USDT },
                // -------------------------- AVALANCHE --------------------------------------
                { weight: 2243, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDC },
                { weight: 282, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDT },
                // -------------------------- POLYGON --------------------------------------
                { weight: 956, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDC },
                { weight: 214, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM --------------------------------------
                { weight: 1443, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDC },
                { weight: 200, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDT },
                // -------------------------- FANTOM --------------------------------------
                { weight: 305, dstChainId: ChainId.FANTOM, dstPoolId: PoolId.USDC },
            ],
        },

        [PoolId.SGETH]: {
            info: {
                sharedDecimals: SGETH_SHARE_DECIMALS,
                address: SGETH_ADDRESS[ChainId.OPTIMISM],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                { weight: 3734, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.SGETH },
                { weight: 6266, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.SGETH },
            ],
        },

        // optimism dai
        [PoolId.DAI]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: DAI_ADDRESS[ChainId.OPTIMISM],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                { weight: 1, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.DAI },
                { weight: 1, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.DAI },
            ],
        },

        // optimism frax
        [PoolId.FRAX]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: FRAX_ADDRESS[ChainId.OPTIMISM],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                { weight: 1, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.FRAX },
                { weight: 1, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.FRAX },
                { weight: 1, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.FRAX },
            ],
        },

        // optimism sUSD
        [PoolId.SUSD]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: SUSD_ADDRESS[ChainId.OPTIMISM],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [{ weight: 1, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.SUSD }],
        },

        // optimism LUSD
        [PoolId.LUSD]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: LUSD_ADDRESS[ChainId.OPTIMISM],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [{ weight: 1, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.LUSD }],
        },

        // optimism MAI
        [PoolId.MAI]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: MAI_ADDRESS[ChainId.OPTIMISM],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                { weight: 1, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.MAI },
                { weight: 1, dstChainId: ChainId.BSC, dstPoolId: PoolId.MAI },
                { weight: 1, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.MAI },
                { weight: 1, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.MAI },
                { weight: 1, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.MAI },
            ],
        },
    },

    [ChainKey.FANTOM]: {
        [PoolId.USDC]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDC_ADDRESS[ChainId.FANTOM],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                // -------------------------- ETHEREUM --------------------------------------------
                { weight: 727, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDC },
                { weight: 322, dstChainId: ChainId.ETHEREUM, dstPoolId: PoolId.USDT },
                // -------------------------- BSC --------------------------------------
                { weight: 437, dstChainId: ChainId.BSC, dstPoolId: PoolId.BUSD },
                { weight: 2257, dstChainId: ChainId.BSC, dstPoolId: PoolId.USDT },
                // -------------------------- AVALANCHE --------------------------------------
                { weight: 1151, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDC },
                { weight: 200, dstChainId: ChainId.AVALANCHE, dstPoolId: PoolId.USDT },
                // -------------------------- POLYGON --------------------------------------
                { weight: 2185, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDC },
                { weight: 610, dstChainId: ChainId.POLYGON, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM --------------------------------------
                { weight: 232, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDC },
                { weight: 637, dstChainId: ChainId.ARBITRUM, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM --------------------------------------
                { weight: 1240, dstChainId: ChainId.OPTIMISM, dstPoolId: PoolId.USDC },
            ],
        },
    },

    ///////// TESTNET /////////

    [ChainKey.GOERLI]: {
        [PoolId.USDC]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDC_ADDRESS[ChainId.GOERLI],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                // test of loopback USDC <> USDT chainPaths for local chain rebalancing
                { weight: 0, dstChainId: ChainId.GOERLI, dstPoolId: PoolId.USDT }, // local USDC to local USDT

                // -------------------------- BSC_TESTNET --------------------------------------------
                { weight: 1200, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.BUSD },
                { weight: 800, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.USDT },
                // -------------------------- FUJI --------------------------------------
                { weight: 1600, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDC },
                { weight: 900, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDT },
                // -------------------------- MUMBAI --------------------------------------
                { weight: 1300, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDC },
                { weight: 700, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM_GOERLI --------------------------------------
                { weight: 800, dstChainId: ChainId.ARBITRUM_GOERLI, dstPoolId: PoolId.USDC },
                { weight: 400, dstChainId: ChainId.ARBITRUM_GOERLI, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM_GOERLI --------------------------------------
                { weight: 800, dstChainId: ChainId.OPTIMISM_GOERLI, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM_TESTNET --------------------------------------
                { weight: 1500, dstChainId: ChainId.FANTOM_TESTNET, dstPoolId: PoolId.USDC },
            ],
        },

        [PoolId.USDT]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDT_ADDRESS[ChainId.GOERLI],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                // test of loopback USDC <> USDT chainPaths for local chain rebalancing
                { weight: 525, dstChainId: ChainId.GOERLI, dstPoolId: PoolId.USDC }, // local USDT to local USDC

                // -------------------------- BSC_TESTNET --------------------------------------------
                { weight: 1200, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.BUSD },
                { weight: 800, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.USDT },
                // -------------------------- FUJI --------------------------------------
                { weight: 1600, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDC },
                { weight: 900, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDT },
                // -------------------------- MUMBAI --------------------------------------
                { weight: 1300, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDC },
                { weight: 700, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM_GOERLI --------------------------------------
                { weight: 800, dstChainId: ChainId.ARBITRUM_GOERLI, dstPoolId: PoolId.USDC },
                { weight: 400, dstChainId: ChainId.ARBITRUM_GOERLI, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM_GOERLI --------------------------------------
                { weight: 800, dstChainId: ChainId.OPTIMISM_GOERLI, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM_TESTNET --------------------------------------
                { weight: 1500, dstChainId: ChainId.FANTOM_TESTNET, dstPoolId: PoolId.USDC },
            ],
        },

        [PoolId.SGETH]: {
            info: {
                sharedDecimals: SGETH_SHARE_DECIMALS,
                address: SGETH_ADDRESS[ChainId.GOERLI],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                { weight: 1, dstChainId: ChainId.ARBITRUM_GOERLI, dstPoolId: PoolId.SGETH },
                { weight: 1, dstChainId: ChainId.OPTIMISM_GOERLI, dstPoolId: PoolId.SGETH },
            ],
        },

        [PoolId.USDD]: {
            info: {
                sharedDecimals: USDD_SHARE_DECIMALS,
                address: USDD_ADDRESS[ChainId.GOERLI],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [{ weight: 1, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.USDD }],
        },
    },

    [ChainKey.BSC_TESTNET]: {
        [PoolId.BUSD]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: BUSD_ADDRESS[ChainId.BSC_TESTNET],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                { weight: 2500, dstChainId: ChainId.GOERLI, dstPoolId: PoolId.USDC },
                { weight: 1500, dstChainId: ChainId.GOERLI, dstPoolId: PoolId.USDT },
                // -------------------------- FUJI --------------------------------------
                { weight: 1200, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDC },
                { weight: 600, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDT },
                // -------------------------- MUMBAI --------------------------------------
                { weight: 1000, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDC },
                { weight: 600, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM_GOERLI --------------------------------------
                { weight: 300, dstChainId: ChainId.ARBITRUM_GOERLI, dstPoolId: PoolId.USDC },
                { weight: 200, dstChainId: ChainId.ARBITRUM_GOERLI, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM_GOERLI --------------------------------------
                { weight: 500, dstChainId: ChainId.OPTIMISM_GOERLI, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM_TESTNET --------------------------------------
                { weight: 1600, dstChainId: ChainId.FANTOM_TESTNET, dstPoolId: PoolId.USDC },
            ],
        },

        [PoolId.USDT]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDT_ADDRESS[ChainId.BSC_TESTNET],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                { weight: 2500, dstChainId: ChainId.GOERLI, dstPoolId: PoolId.USDC },
                { weight: 1500, dstChainId: ChainId.GOERLI, dstPoolId: PoolId.USDT },
                // -------------------------- FUJI --------------------------------------
                { weight: 1200, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDC },
                { weight: 600, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDT },
                // -------------------------- MUMBAI --------------------------------------
                { weight: 1000, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDC },
                { weight: 600, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM_GOERLI --------------------------------------
                { weight: 300, dstChainId: ChainId.ARBITRUM_GOERLI, dstPoolId: PoolId.USDC },
                { weight: 200, dstChainId: ChainId.ARBITRUM_GOERLI, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM_GOERLI --------------------------------------
                { weight: 500, dstChainId: ChainId.OPTIMISM_GOERLI, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM_TESTNET --------------------------------------
                { weight: 1600, dstChainId: ChainId.FANTOM_TESTNET, dstPoolId: PoolId.USDC },
            ],
        },
        [PoolId.USDD]: {
            info: {
                sharedDecimals: USDD_SHARE_DECIMALS,
                address: USDD_ADDRESS[ChainId.BSC_TESTNET],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [{ weight: 1, dstChainId: ChainId.GOERLI, dstPoolId: PoolId.USDD }],
        },
    },

    [ChainKey.FUJI]: {
        [PoolId.USDC]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDC_ADDRESS[ChainId.FUJI],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                { weight: 999, dstChainId: ChainId.GOERLI, dstPoolId: PoolId.USDC },
                { weight: 888, dstChainId: ChainId.GOERLI, dstPoolId: PoolId.USDT },
                // -------------------------- BSC_TESTNET --------------------------------------
                { weight: 777, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.BUSD },
                { weight: 666, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.USDT },
                // -------------------------- MUMBAI --------------------------------------
                { weight: 555, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDC },
                { weight: 444, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM_GOERLI --------------------------------------
                { weight: 333, dstChainId: ChainId.ARBITRUM_GOERLI, dstPoolId: PoolId.USDC },
                { weight: 222, dstChainId: ChainId.ARBITRUM_GOERLI, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM_GOERLI --------------------------------------
                { weight: 111, dstChainId: ChainId.OPTIMISM_GOERLI, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM_TESTNET --------------------------------------
                { weight: 1111, dstChainId: ChainId.FANTOM_TESTNET, dstPoolId: PoolId.USDC },
            ],
        },

        [PoolId.USDT]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDT_ADDRESS[ChainId.FUJI],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                { weight: 999, dstChainId: ChainId.GOERLI, dstPoolId: PoolId.USDC },
                { weight: 888, dstChainId: ChainId.GOERLI, dstPoolId: PoolId.USDT },
                // -------------------------- BSC_TESTNET --------------------------------------
                { weight: 777, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.BUSD },
                { weight: 666, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.USDT },
                // -------------------------- MUMBAI --------------------------------------
                { weight: 555, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDC },
                { weight: 666, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM_GOERLI --------------------------------------
                { weight: 777, dstChainId: ChainId.ARBITRUM_GOERLI, dstPoolId: PoolId.USDC },
                { weight: 888, dstChainId: ChainId.ARBITRUM_GOERLI, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM_GOERLI --------------------------------------
                { weight: 999, dstChainId: ChainId.OPTIMISM_GOERLI, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM_TESTNET --------------------------------------
                { weight: 1111, dstChainId: ChainId.FANTOM_TESTNET, dstPoolId: PoolId.USDC },
            ],
        },
    },

    [ChainKey.MUMBAI]: {
        [PoolId.USDC]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDC_ADDRESS[ChainId.MUMBAI],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                { weight: 555, dstChainId: ChainId.GOERLI, dstPoolId: PoolId.USDC },
                { weight: 666, dstChainId: ChainId.GOERLI, dstPoolId: PoolId.USDT },
                // -------------------------- BSC_TESTNET --------------------------------------
                { weight: 555, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.BUSD },
                { weight: 666, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.USDT },
                // -------------------------- FUJI --------------------------------------
                { weight: 1299, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDC },
                { weight: 699, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM_GOERLI --------------------------------------
                { weight: 700, dstChainId: ChainId.ARBITRUM_GOERLI, dstPoolId: PoolId.USDC },
                { weight: 400, dstChainId: ChainId.ARBITRUM_GOERLI, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM_GOERLI --------------------------------------
                { weight: 500, dstChainId: ChainId.OPTIMISM_GOERLI, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM_TESTNET --------------------------------------
                { weight: 1000, dstChainId: ChainId.FANTOM_TESTNET, dstPoolId: PoolId.USDC },
            ],
        },

        [PoolId.USDT]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDT_ADDRESS[ChainId.MUMBAI],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                { weight: 2399, dstChainId: ChainId.GOERLI, dstPoolId: PoolId.USDC },
                { weight: 1399, dstChainId: ChainId.GOERLI, dstPoolId: PoolId.USDT },
                // -------------------------- BSC_TESTNET --------------------------------------
                { weight: 900, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.BUSD },
                { weight: 600, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.USDT },
                // -------------------------- FUJI --------------------------------------
                { weight: 1300, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDC },
                { weight: 700, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM_GOERLI --------------------------------------
                { weight: 700, dstChainId: ChainId.ARBITRUM_GOERLI, dstPoolId: PoolId.USDC },
                { weight: 400, dstChainId: ChainId.ARBITRUM_GOERLI, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM_GOERLI --------------------------------------
                { weight: 500, dstChainId: ChainId.OPTIMISM_GOERLI, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM_TESTNET --------------------------------------
                { weight: 1000, dstChainId: ChainId.FANTOM_TESTNET, dstPoolId: PoolId.USDC },
            ],
        },
    },

    [ChainKey.ARBITRUM_GOERLI]: {
        [PoolId.USDC]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDC_ADDRESS[ChainId.ARBITRUM_GOERLI],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                { weight: 2500, dstChainId: ChainId.GOERLI, dstPoolId: PoolId.USDC },
                { weight: 1500, dstChainId: ChainId.GOERLI, dstPoolId: PoolId.USDT },
                // -------------------------- BSC_TESTNET --------------------------------------
                { weight: 900, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.BUSD },
                { weight: 600, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.USDT },
                // -------------------------- FUJI --------------------------------------
                { weight: 999, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDC },
                { weight: 499, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDT },
                // -------------------------- MUMBAI --------------------------------------
                { weight: 998, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDC },
                { weight: 497, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM_GOERLI --------------------------------------
                { weight: 500, dstChainId: ChainId.OPTIMISM_GOERLI, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM_TESTNET --------------------------------------
                { weight: 1000, dstChainId: ChainId.FANTOM_TESTNET, dstPoolId: PoolId.USDC },
            ],
        },

        [PoolId.USDT]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDT_ADDRESS[ChainId.ARBITRUM_GOERLI],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                { weight: 2500, dstChainId: ChainId.GOERLI, dstPoolId: PoolId.USDC },
                { weight: 1500, dstChainId: ChainId.GOERLI, dstPoolId: PoolId.USDT },
                // -------------------------- BSC_TESTNET --------------------------------------
                { weight: 900, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.BUSD },
                { weight: 600, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.USDT },
                // -------------------------- FUJI --------------------------------------
                { weight: 1000, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDC },
                { weight: 500, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDT },
                // -------------------------- MUMBAI --------------------------------------
                { weight: 1000, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDC },
                { weight: 500, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM_GOERLI --------------------------------------
                { weight: 500, dstChainId: ChainId.OPTIMISM_GOERLI, dstPoolId: PoolId.USDC },
                // -------------------------- FANTOM_TESTNET --------------------------------------
                { weight: 1000, dstChainId: ChainId.FANTOM_TESTNET, dstPoolId: PoolId.USDC },
            ],
        },

        [PoolId.SGETH]: {
            info: {
                sharedDecimals: SGETH_SHARE_DECIMALS,
                address: SGETH_ADDRESS[ChainId.ARBITRUM_GOERLI],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                { weight: 1, dstChainId: ChainId.GOERLI, dstPoolId: PoolId.SGETH },
                { weight: 1, dstChainId: ChainId.OPTIMISM_GOERLI, dstPoolId: PoolId.SGETH },
            ],
        },
    },

    [ChainKey.OPTIMISM_GOERLI]: {
        [PoolId.USDC]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDC_ADDRESS[ChainId.OPTIMISM_GOERLI],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                { weight: 2500, dstChainId: ChainId.GOERLI, dstPoolId: PoolId.USDC },
                { weight: 1500, dstChainId: ChainId.GOERLI, dstPoolId: PoolId.USDT },
                // -------------------------- BSC_TESTNET --------------------------------------
                { weight: 900, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.BUSD },
                { weight: 600, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.USDT },
                // -------------------------- FUJI --------------------------------------
                { weight: 1000, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDC },
                { weight: 500, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDT },
                // -------------------------- MUMBAI --------------------------------------
                { weight: 1000, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDC },
                { weight: 500, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM_GOERLI --------------------------------------
                { weight: 300, dstChainId: ChainId.ARBITRUM_GOERLI, dstPoolId: PoolId.USDC },
                { weight: 200, dstChainId: ChainId.ARBITRUM_GOERLI, dstPoolId: PoolId.USDT },
                // -------------------------- FANTOM_TESTNET --------------------------------------
                { weight: 1000, dstChainId: ChainId.FANTOM_TESTNET, dstPoolId: PoolId.USDC },
            ],
        },

        [PoolId.SGETH]: {
            info: {
                sharedDecimals: SGETH_SHARE_DECIMALS,
                address: SGETH_ADDRESS[ChainId.OPTIMISM_GOERLI],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                { weight: 1, dstChainId: ChainId.GOERLI, dstPoolId: PoolId.SGETH },
                { weight: 1, dstChainId: ChainId.ARBITRUM_GOERLI, dstPoolId: PoolId.SGETH },
            ],
        },
    },

    [ChainKey.FANTOM_TESTNET]: {
        [PoolId.USDC]: {
            info: {
                sharedDecimals: SHARE_DECIMALS,
                address: USDC_ADDRESS[ChainId.FANTOM_TESTNET],
            },
            deltaParams: {
                batched: true,
                swapDeltaBP: 500,
                lpDeltaBP: 500,
                defaultSwapMode: false,
                defaultLPMode: false,
            },
            chainPaths: [
                // -------------------------- RINKEBY --------------------------------------------
                { weight: 2500, dstChainId: ChainId.GOERLI, dstPoolId: PoolId.USDC },
                { weight: 1500, dstChainId: ChainId.GOERLI, dstPoolId: PoolId.USDT },
                // -------------------------- BSC_TESTNET --------------------------------------
                { weight: 900, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.BUSD },
                { weight: 600, dstChainId: ChainId.BSC_TESTNET, dstPoolId: PoolId.USDT },
                // -------------------------- FUJI --------------------------------------
                { weight: 1300, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDC },
                { weight: 700, dstChainId: ChainId.FUJI, dstPoolId: PoolId.USDT },
                // -------------------------- MUMBAI --------------------------------------
                { weight: 1000, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDC },
                { weight: 500, dstChainId: ChainId.MUMBAI, dstPoolId: PoolId.USDT },
                // -------------------------- ARBITRUM_GOERLI --------------------------------------
                { weight: 300, dstChainId: ChainId.ARBITRUM_GOERLI, dstPoolId: PoolId.USDC },
                { weight: 200, dstChainId: ChainId.ARBITRUM_GOERLI, dstPoolId: PoolId.USDT },
                // -------------------------- OPTIMISM_GOERLI --------------------------------------
                { weight: 500, dstChainId: ChainId.OPTIMISM_GOERLI, dstPoolId: PoolId.USDC },
            ],
        },
    },
}
