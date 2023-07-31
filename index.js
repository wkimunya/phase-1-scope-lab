// Declare customerName to be 'bob' in global scope
var customerName = 'bob';

// 1) Returns the customerName
function returnCustomerName() {
  return customerName;
}

// 2) Modifies the customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3) setBestCustomer
function setBestCustomer() {
    bestCustomer = 'not bob'; 
  }
  
  // 4) Overwrites the best customer
  function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; 
  }
  const leastFavoriteCustomer = 'John';

  // 5) Unsuccessfully tries to reassign the least favorite customer (throws an error due to changing a constant)
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Mark'; 
  }
  describe('changeLeastFavoriteCustomer()', () => {
    it('unsuccessfully tries to reassign the least favorite customer', () => {
      expect(() => changeLeastFavoriteCustomer()).to.throw('Cannot reassign a constant value.');
    });
  });
  