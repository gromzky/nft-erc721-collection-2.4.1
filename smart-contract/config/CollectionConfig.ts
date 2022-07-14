import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.polygonTestnet,
  mainnet: Networks.polygonMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'WhimsyFoxlerCollaboration',
  tokenName: 'WhimsChameleon X Foxler',
  tokenSymbol: 'FXW2',
  hiddenMetadataUri: 'ipfs://QmSMYBC8GzbZodoSxoLjwtCGciArToKT8C3rxiu2pGQzMf/hidden.json',
  maxSupply: 5000,
  whitelistSale: {
    price: 3,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 3,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 3,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0x9756345da9157c3EE044C6695895b28E0C81CBe2",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
