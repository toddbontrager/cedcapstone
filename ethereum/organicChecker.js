import web3 from './web3';
import OrganicChecker from './build/OrganicChecker.json';

const instance = new web3.eth.Contract(
    JSON.parse(OrganicChecker.interface),
    '0xF752080345ff166aDfF00663076DC11df4dfbAb8'
);

export async function getSuppliers() {
    const allSuppliers = await instance.methods.getAllSuppliers().call();
    
    const suppliers = allSuppliers.map(async address => {
      const result = await instance.methods.getSupplierByAddress(address).call();
      return result;
    });
    const awaitedSuppliers = await Promise.all(suppliers);
    return awaitedSuppliers;
}

export default instance