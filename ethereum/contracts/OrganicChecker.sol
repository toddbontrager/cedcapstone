pragma solidity ^0.4.22;

contract OrganicChecker {
    address public owner = msg.sender;

    struct Supplier {
        string name;
        uint licenseNumber;
        string email;
        string phone;
        bool isCertified;
        bool isLabVerified;
    }

    mapping (address => Supplier) suppliers;
    address[] public supplierList;

    function setSupplier(address _address, string _name, uint _licenseNumber, string _email, string _phone) public {
        suppliers[_address].name = _name;
        suppliers[_address].licenseNumber = _licenseNumber;
        suppliers[_address].email = _email;
        suppliers[_address].phone = _phone;

        supplierList.push(_address) - 1;
    }

    function getAllSuppliers() view public returns(address[]) {
        return supplierList;
    }

    function getSupplierByAddress(address _address) view public returns (string, uint, string, string, bool, bool) {
        return (suppliers[_address].name, suppliers[_address].licenseNumber, suppliers[_address].email, suppliers[_address].phone, suppliers[_address].isCertified, suppliers[_address].isLabVerified);
    }

    function countSuppliers() view public returns (uint) {
        return supplierList.length;
    }

    function updateSupplier(address _address, bool _isCertified, bool _isLabVerified) public {
        require(msg.sender == owner);
        suppliers[_address].isCertified = _isCertified;
        suppliers[_address].isLabVerified = _isLabVerified;
    }
}