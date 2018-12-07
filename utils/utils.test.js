const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);
      expect(res).toBe(44).toBeA('number');
    });
  })
  
  it('should aync add two numbers', (done) => {
    var res = utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });
  
  it('should square a number', () => {
    var res = utils.square(5);
    expect(res).toBe(25).toBeA('number');
  });
  
  it('should aync square a number', (done) => {
    var res = utils.asyncSquare(5, (square) => {
      expect(square).toBe(25).toBeA('number');
      done();
    });
  });  
});

it('should verify first and last name', () => {
  var user = {location: 'Chennai', age: 24};
  var res = utils.setName(user, 'Riya Kapuria');
  expect(res).toInclude({
    firstName: 'Riya',
    lastName: 'Kapuria'
  });
});

// it('should expect some value', () => {
//   // expect(12).toNotBe(12);
//   // expect({name: 'riya'}).toNotEqual({name: 'Riya'});
//   // expect([2,3,4]).toInclude(2);
//   // expect([2,3,4]).toExclude(1);
//   expect({
//     name: 'Riya',
//     age: 24,
//     location: 'Chennai'
//   }).toInclude({
//     age: 24
//   })
// });