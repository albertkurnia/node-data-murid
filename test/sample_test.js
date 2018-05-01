let chai = require('chai');
let expect = require('chai').expect;
let chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('API Testing', () => {

  it('it should success to retrive all data', (done) => {
    chai.request('localhost:8081') // chai meminta base URL dan port kita
        .get('/') // 'get' disini adalah REST method dan '/' adalah endpoint kita 
        .end((err, res) => {
          // kita melakukan response assertion disini
          expect(res.body).to.have.status(200);
          expect(res.body).to.have.property('fullname');
          expect(res.body[0].year).to.equal(2014);
        });
     done();
  });
});