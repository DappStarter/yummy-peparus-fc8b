require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'just problem forget venture strike crawl screen comic install office army gesture'; 
let testAccounts = [
"0x1c503ac20227381c57ac1f1fcbf68c5dfd04558930fed6c36649d429b6c13bea",
"0x0bcf719cecd2998b724e17b0499a956eba8a026281d3ec21578e341fe2e34fbd",
"0x717ccb11e709a057e8e656f416aec1f0522e3fc98ea46bb9d5e6d352b7259be7",
"0x564fd26a0ad97e000d11df61311f8fe000eb1e6b944d5c2e23eeace18625171a",
"0x9d408b367146380fafc0642271e386152d9865cdb081d29e85f30bf29084cbe9",
"0x8d3d2dd203bee8b69fd8d55a4b58c5e3badb3fbde0e0d31cb153e08f4216b4ad",
"0x476be89ca3c5a2f3a497c81f773e3d97de24df044eea2f8516a6dc6b4ca5d7bc",
"0x68036e43737aad0916818c6b7b037ff34173769d36c15b7de67365470b580aa2",
"0x1b136c2e9801f7fe179efda8c7a93ee9ac6204e623429af811b404ae0f934c67",
"0xd7a396679ffb2f14eb8ccecc703c7a577937ff1fdf5740c8e136a3e936657586"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


