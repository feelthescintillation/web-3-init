# web-3-init

This will

1. fetch ETH balance for the account supplied
2. List contract details for contract details in constant file ( Devs for Revolution committed)

Pre - requisites

- [x] infura.io account with a valid ETH project created, you will need the key/url
- [x] Valid ETH address, if you do not have a wallet you can get any address from from etherscan.io

How to run

1. Add secrets.json and populate it with keys from infura //{ "infura": { "mainnet": "", "rinkerby": "" } }
2. Run

```shell
 node index.js --ethEnvt=mainnet --ethAddr=0xf880FCd62e27495aA3c9427c4c70A5De66D8d0d2

 null 0.056381898798532817
```
