const request = require('supertest');

var app =  require('./server').app;

it('Should return hello world',(done) =>{
   request(app)
   .get('/')
   .expect('Hello World')
   .end(done);
   
})