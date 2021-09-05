const Web3 = require("web3");
const utils = require("./utils");
//{ "infura": { "mainnet": "", "rinkerby": "" } }
const secrets = require("./secrets.json");
const constants = require("./constants.json");
const cliArgs = utils.extractCliArgs();
const ethEnvt = cliArgs?.ethEnvt;
const ethAddr = cliArgs?.ethAddr;

if (!ethEnvt || !ethAddr) {
  console.log(
    "Env and/or address not provided eg -> --ethEnvt=mainnet --ethAddr=0xf880FCd62e27495aA3c9427c4c70A5De66D8d0d2 "
  );
  return;
}

const rpcURL = constants.infuraURL[ethEnvt];
const infuraKey = secrets.infura[ethEnvt];

if (!rpcURL || !infuraKey) {
  console.log("Key or URL not found for ethEnvt");
  return;
}

const web3 = new Web3(rpcURL);

web3.eth.getBalance(ethAddr, (err, wei) => {
  balance = web3.utils.fromWei(wei, "ether");
  console.log("ETH Balance", balance);
});

// Contract code

const abi = constants.devsForRevolutionContract.ABI;
const contractAddress = constants.devsForRevolutionContract.address;
const contract = new web3.eth.Contract(abi, contractAddress);

contract.methods.totalSupply().call((err, result) => {
  console.log("Contract Token supply", result);
});
contract.methods.name().call((err, result) => {
  console.log("Contract Name", result);
});
contract.methods.symbol().call((err, result) => {
  console.log("Contract Symbol", result);
});
contract.methods.balanceOf(ethAddr).call((err, result) => {
  console.log("Account Tokens for contract", result);
});
