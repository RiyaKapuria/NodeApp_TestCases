const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

it('should reuturn hello world response!', (done) => {
  request(app)
    .get('/')
    .expect(404)
    .expect((res) => {
      expect(res.body).toInclude({
        error: 'Page not found.'
      });
    })
    .end(done);
})

it('should reuturn user object!', (done) => {
  request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude({
        name: 'Ankar',
        age: 22
      });
    })
    .end(done);
})