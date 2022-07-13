import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'WhimsyFoxlerCollaboration',
  tokenName: 'WhimsChameleon X Foxler',
  tokenSymbol: 'FXW2',
  hiddenMetadataUri: 'ipfs://QmSMYBC8GzbZodoSxoLjwtCGciArToKT8C3rxiu2pGQzMf/hidden.json',
  maxSupply: 5000,
  whitelistSale: {
    price: 0.0001,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.0002,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.0003,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0xF119cF0f9F791A22682714dFbf7620436bd1b96A",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
