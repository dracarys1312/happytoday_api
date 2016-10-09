var chai = require('chai');
var should = chai.should();
var User = require('../models/user');
var Product = require('../models/product');

describe('User Model', function() {
    it('should create a new user', function(done) {
        var user = new User({
            email: 'test@gmail.com',
            password: 'password'
        });
        user.save(function(err) {
            if (err) return done(err);
            done();
        })
    });
    // it('should correctly update an existing account', function(done) {
    //     var body = {
    //         email: 'test1312@gmail.com',
    //         password: 'password1312'
    //     };
    //     var userId = User[1];
    //     User
    //     .put('/api/v1/users/', userId)
    //     .send(body)
    //     .expect('Content-Type', /json/)
    //     .expect(200) //Status code
    //     .end(function(err, res) {
    //         if (err) {
    //             throw err;
    //         }
    //         // .put('/api/v1/users/')
    //         // Should.js fluent syntax applied
    //         // res.body.should.have.property('_id');
    //         // res.body.firstName.should.equal('JP');
    //         // res.body.lastName.should.equal('Berd');
    //         // res.body.creationDate.should.not.equal(null);
    //         done();
    //     });
    // });
    it('should delete a user', function(done) {
        User.remove({
            email: 'test@gmail.com'
        }, function(err) {
            if (err) return done(err);
            done();
        });
    });
});

describe('Product Model', function() {
    it('should create a new product', function(done) {
        var product = new Product({
            name: 'test123456',
            description: '123456test'
        });
        product.save(function(err) {
            if (err) return done(err);
            done();
        })
    });
    it('should delete a product', function(done) {
        Product.remove({
            name: 'test123456'
        }, function(err) {
            if (err) return done(err);
            done();
        });
    });
});
