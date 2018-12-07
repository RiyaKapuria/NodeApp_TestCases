const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  }
  app.__set__('db', db)

  it('should call the spy correctly',() => {
    var spy = expect.createSpy();
    spy('Riya', 24);
    expect(spy).toHaveBeenCalledWith('Riya', 24);
  });

  it('should call saneUser with user object',() => {
    var email = 'riyakapuria.1992@gmail.com';
    var password = 'riya1234';
    
    app.handleSingup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });

})