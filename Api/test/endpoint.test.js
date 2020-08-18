import chai from 'chai';
import chaiHttp from 'chai-http';


let url = 'http://localhost:5000';

chai.should();
chai.use(chaiHttp);


describe("Endpoint test", () => {
it("check status", (done) => {
  chai.request(url)
    .get("/phoneNumbers")
    .end((err,res) => {
        
       res.should.have.status(200);
      
       done();
    })
 })
 
 it("check array", (done) => {
    chai.request(url)
      .get("/phoneNumbers")
      .end((err,res) => {
          
        
         res.body.correctNumbers.should.be.a('array')
         done();
      })
   })
   
   it("check length of arrays", (done) => {
    chai.request(url)
      .get("/phoneNumbers")
      .end((err,res) => {
          
        
         res.body.correctNumbers.length.should.be.eq(463)
         res.body.incorrectNumbers.length.should.be.eq(296)
         res.body.AddedPrefix.length.should.be.eq(73)
         res.body.PreFixModified.length.should.be.eq(53)
         
         done();
      })
   })

})

 

