pragma solidity ^0.4.22;

contract OrganicChecker {

    struct Supplier {
        string name;
        uint identifier;
        bool isCertified;
        bool isLabVerified;
    }

    mapping (address => Supplier) suppliers;
    address[] public supplierList;

    function setSupplier(address _address, string _name, uint _identifier, bool _isCertified, bool _isLabVerified) public {
        suppliers[_address].name = _name;
        suppliers[_address].identifier = _identifier;
        suppliers[_address].isCertified = _isCertified;
        suppliers[_address].isLabVerified = _isLabVerified;

        supplierList.push(_address) - 1;
    }

    function getAllSuppliers() view public returns(address[]) {
        return supplierList;
    }

    function getSupplierByAddress(address _address) view public returns (string, uint, bool, bool) {
        return (suppliers[_address].name, suppliers[_address].identifier, suppliers[_address].isCertified, suppliers[_address].isLabVerified);
    }

    function countSuppliers() view public returns (uint) {
        return supplierList.length;
    }

    function updateSupplier(address _address, bool _isCertified, bool _isLabVerified) public {
        suppliers[_address].isCertified = _isCertified;
        suppliers[_address].isLabVerified = _isLabVerified;
    }

    // TODO: Emit event
    // require that the certifiying body is on the approved list which is hard coded OR points to an oracle
}