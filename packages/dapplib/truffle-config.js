require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remember mistake install infant flower teach'; 
let testAccounts = [
"0x75abd6fd5f21f6a933d519656219ea00afda4e293b927d9bd425f8eafe1a905d",
"0x6472a313c1346c90bdd66e0794bb81993b3173f4dc0437900d2828a60988404a",
"0xe8bda35668637efa55f4642f62bb2bc65b82bd9a439afe89293bf3beff42af30",
"0x8fc1d110904224d35372b1d6638a7a60e40b3e3c7439477a507f119b2f2c0ed3",
"0x473ba8efbc966bfa44ba1e20088557e3a9262dffeec20bde7a402bbb14eacca7",
"0xd944382304fc41884a72c3b838a3cdd2857a09316089625d95d02100e46426d5",
"0xa501f47856febebe29bf354002a261166c358beb1de164f25d457ba12ddf9a56",
"0x3b8376926ad0fcb47580d4f3dd1e72344fc941f913232d71473e8740a1a892b2",
"0x4c0951c4d9f85810f5c83fd6cb77aa49ea36f51f52ee1ecb698f2e38d84cc0ba",
"0xd95796e779daa7a9a74259019b7f8e8725324ac24594e59eafa8e8ea0f3a88fd"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

