import { ChainId, ChainKey } from '../enums'

export const CHAIN_KEY: { [chainId in ChainId]: ChainKey } = {
    [ChainId.ETHEREUM]: ChainKey.ETHEREUM,
    [ChainId.GOERLI]: ChainKey.GOERLI,
    [ChainId.GOERLI_SANDBOX]: ChainKey.GOERLI_SANDBOX,
    [ChainId.BSC]: ChainKey.BSC,
    [ChainId.BSC_TESTNET]: ChainKey.BSC_TESTNET,
    [ChainId.BSC_TESTNET_SANDBOX]: ChainKey.BSC_TESTNET_SANDBOX,
    [ChainId.AVALANCHE]: ChainKey.AVALANCHE,
    [ChainId.FUJI]: ChainKey.FUJI,
    [ChainId.FUJI_SANDBOX]: ChainKey.FUJI_SANDBOX,
    [ChainId.POLYGON]: ChainKey.POLYGON,
    [ChainId.MUMBAI]: ChainKey.MUMBAI,
    [ChainId.MUMBAI_SANDBOX]: ChainKey.MUMBAI_SANDBOX,
    [ChainId.ARBITRUM]: ChainKey.ARBITRUM,
    [ChainId.ARBITRUM_GOERLI]: ChainKey.ARBITRUM_GOERLI,
    [ChainId.OPTIMISM]: ChainKey.OPTIMISM,
    [ChainId.OPTIMISM_GOERLI]: ChainKey.OPTIMISM_GOERLI,
    [ChainId.FANTOM]: ChainKey.FANTOM,
    [ChainId.FANTOM_TESTNET]: ChainKey.FANTOM_TESTNET,
    [ChainId.FANTOM_TESTNET_SANDBOX]: ChainKey.FANTOM_TESTNET_SANDBOX,
    [ChainId.SWIMMER]: ChainKey.SWIMMER,
    [ChainId.SWIMMER_TESTNET]: ChainKey.SWIMMER_TESTNET,
    [ChainId.SWIMMER_TESTNET_SANDBOX]: ChainKey.SWIMMER_TESTNET_SANDBOX,
    [ChainId.DFK]: ChainKey.DFK,
    [ChainId.DFK_TESTNET]: ChainKey.DFK_TESTNET,
    [ChainId.DFK_TESTNET_SANDBOX]: ChainKey.DFK_TESTNET_SANDBOX,
    [ChainId.HARMONY]: ChainKey.HARMONY,
    [ChainId.HARMONY_TESTNET]: ChainKey.HARMONY_TESTNET,
    [ChainId.HARMONY_TESTNET_SANDBOX]: ChainKey.HARMONY_TESTNET_SANDBOX,
    [ChainId.HARMONY_1]: ChainKey.HARMONY_1,
    [ChainId.HARMONY_1_TESTNET]: ChainKey.HARMONY_1_TESTNET,
    [ChainId.ARCANA]: ChainKey.ARCANA,
    [ChainId.ARCANA_TESTNET]: ChainKey.ARCANA_TESTNET,
    [ChainId.ARCANA_TESTNET_SANDBOX]: ChainKey.ARCANA_TESTNET_SANDBOX,
    [ChainId.DEXALOT]: ChainKey.DEXALOT,
    [ChainId.DEXALOT_TESTNET]: ChainKey.DEXALOT_TESTNET,
    [ChainId.DEXALOT_TESTNET_SANDBOX]: ChainKey.DEXALOT_TESTNET_SANDBOX,
    [ChainId.CASTLECRUSH]: ChainKey.CASTLECRUSH,
    [ChainId.CASTLECRUSH_TESTNET]: ChainKey.CASTLECRUSH_TESTNET,
    [ChainId.CASTLECRUSH_TESTNET_SANDBOX]: ChainKey.CASTLECRUSH_TESTNET_SANDBOX,
    [ChainId.CELO]: ChainKey.CELO,
    [ChainId.CELO_TESTNET]: ChainKey.CELO_TESTNET,
    [ChainId.CELO_TESTNET_SANDBOX]: ChainKey.CELO_TESTNET_SANDBOX,
    [ChainId.MOONBEAM]: ChainKey.MOONBEAM,
    [ChainId.MOONBEAM_TESTNET]: ChainKey.MOONBEAM_TESTNET,
    [ChainId.MOONBEAM_TESTNET_SANDBOX]: ChainKey.MOONBEAM_TESTNET_SANDBOX,
    [ChainId.PORTAL]: ChainKey.PORTAL,
    [ChainId.PORTAL_TESTNET]: ChainKey.PORTAL_TESTNET,
    [ChainId.PORTAL_TESTNET_SANDBOX]: ChainKey.PORTAL_TESTNET_SANDBOX,
    [ChainId.AURORA]: ChainKey.AURORA,
    [ChainId.AURORA_TESTNET]: ChainKey.AURORA_TESTNET,
    [ChainId.AURORA_TESTNET_SANDBOX]: ChainKey.AURORA_TESTNET_SANDBOX,
    [ChainId.INTAIN]: ChainKey.INTAIN,
    [ChainId.INTAIN_TESTNET]: ChainKey.INTAIN_TESTNET,
    [ChainId.INTAIN_TESTNET_SANDBOX]: ChainKey.INTAIN_TESTNET_SANDBOX,
    [ChainId.BOBA]: ChainKey.BOBA,
    [ChainId.BOBA_TESTNET]: ChainKey.BOBA_TESTNET,
    [ChainId.BOBA_TESTNET_SANDBOX]: ChainKey.BOBA_TESTNET_SANDBOX,
    [ChainId.FUSE]: ChainKey.FUSE,
    [ChainId.FUSE_TESTNET]: ChainKey.FUSE_TESTNET,
    [ChainId.FUSE_TESTNET_SANDBOX]: ChainKey.FUSE_TESTNET_SANDBOX,
    [ChainId.GNOSIS]: ChainKey.GNOSIS,
    [ChainId.GNOSIS_TESTNET]: ChainKey.GNOSIS_TESTNET,
    [ChainId.GNOSIS_TESTNET_SANDBOX]: ChainKey.GNOSIS_TESTNET_SANDBOX,
    [ChainId.ASTAR]: ChainKey.ASTAR,
    [ChainId.ASTAR_TESTNET]: ChainKey.ASTAR_TESTNET,
    [ChainId.ASTAR_TESTNET_SANDBOX]: ChainKey.ASTAR_TESTNET_SANDBOX,
    [ChainId.ZKSYNC]: ChainKey.ZKSYNC,
    [ChainId.ZKSYNC_TESTNET]: ChainKey.ZKSYNC_TESTNET,
    [ChainId.SHRAPNEL]: ChainKey.SHRAPNEL,
    [ChainId.SHRAPNEL_TESTNET]: ChainKey.SHRAPNEL_TESTNET,
    [ChainId.DOS]: ChainKey.DOS,
    [ChainId.DOS_TESTNET]: ChainKey.DOS_TESTNET,
    [ChainId.APTOS]: ChainKey.APTOS,
    [ChainId.APTOS_TESTNET]: ChainKey.APTOS_TESTNET,
    [ChainId.APTOS_TESTNET_SANDBOX]: ChainKey.APTOS_TESTNET_SANDBOX,
    [ChainId.KLAYTN]: ChainKey.KLAYTN,
    [ChainId.KLAYTN_TESTNET]: ChainKey.KLAYTN_TESTNET,
    [ChainId.METIS]: ChainKey.METIS,
    [ChainId.METIS_TESTNET]: ChainKey.METIS_TESTNET,
    [ChainId.COREDAO]: ChainKey.COREDAO,
    [ChainId.COREDAO_TESTNET]: ChainKey.COREDAO_TESTNET,
}
