import web3 from './web3';
import OrganicChecker from './build/OrganicChecker.json';

const instance = new web3.eth.Contract(
    JSON.parse(OrganicChecker.interface),
    '0x568cbe8DB4BC846a02beea564909148ee0EBcc54'
);

export default instance;