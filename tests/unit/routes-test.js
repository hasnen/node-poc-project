/**
 * Created by hasnen on 27/11/16.
 */
var express  = require('express');
var app = express();
var chai = require('chai'), chaiHttp = require('chai-http');

var expect = chai.expect; // we are using the "expect" style of Chai
var CartSummary = require('./../../app/routes.js');
chai.use(chaiHttp);
var request = require('supertest')
var FacebookStrategy = require('passport-facebook').Strategy;


it('pass, as expected !!', function(done) { // <= Pass in done callback
    chai.request('http://localhost:8080')
        .get('/')
        .end(function(err, res) {
            expect(res).to.have.status(200);
            done();                               // <= Call done to signal callback end
        });
}) ;



it('should login the user out', function (done) {
    request('http://localhost:8080')
        .post('/signup').
    send({email: 'username', password: 'password'})
        .end(function (err, res) {
            if (err) return done(err);
            // Logging out should have redirected you...
                expect(res).to.have.status(302);
                done();
        });
});
/*
 * Test the /POST route
 */
describe('/POST signup', function (done) {
    it('it should not POST a book without pages field', function (done) {
        var book = {
            email: "hasnen",
            password: "hasnen"
        }
        request('http://localhost:8080')
            .post('/signup')
            .send(book)
            .end(function (err, res) {
                expect(res).to.have.status(302);
                done();
            });
    });
})
/////////////////////////////////////////////////////////////////////////

    describe('Strategy#userProfile', function() {

        describe('fetched from default endpoint', function () {
            var strategy = new FacebookStrategy({
                clientID: '707698209388609',
                clientSecret: '1e50751d909701b50a3b752505e85acd'
            }, function () {
            });

            strategy._oauth2.get = function (url, accessToken, callback) {
                if (url != 'https://graph.facebook.com/v2.5/me') {
                    return callback(new Error('incorrect url argument'));
                }
                if (accessToken != 'token') {
                    return callback(new Error('incorrect token argument'));
                }

                var body = '{"id":"500308595","name":"Hasnen laxmidhar","first_name":"Jared","last_name":"Hanson","link":"http:\\/\\/www.facebook.com\\/me","username":"hasnen","gender":"male","email":"jaredhanson\\u0040example.com"}';
                callback(null, body, undefined);
            };

            var profile;

            before(function(done) {
                strategy.userProfile('token', function(err, p) {
                    if (err) { return done(err); }
                    profile = p;
                    done();
                });
            });

            it('should parse profile', function() {
                expect(profile.provider).to.equal('facebook');

                expect(profile.id).to.equal('500308595');
                expect(profile.username).to.equal('hasnen');
                expect(profile.displayName).to.equal('Hasnen laxmidhar');
                expect(profile.gender).to.equal('male');
                expect(profile.profileUrl).to.equal('http://www.facebook.com/me');
                expect(profile.emails).to.have.length(1);
                expect(profile.photos).to.be.undefined;
            });

            it('should set raw property', function() {
                expect(profile._raw).to.be.a('string');
            });

            it('should set json property', function() {
                expect(profile._json).to.be.an('object');
            });
        }); // fetched from default endpoint

    })