import { TezosToolkit } from '@taquito/taquito';
const Tezos = new TezosToolkit('https://hangzhounet.api.tez.ie');
Tezos.tz
    .getBalance('tz1h3rQ8wBxFd8L9B3d7Jhaawu6Z568XU3xY')
    .then((balance) => console.log(`${balance.toNumber() / 1000000} ꜩ`))
    .catch((error) => console.log(JSON.stringify(error)));
