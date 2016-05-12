// /* eslint-env angular/mocks, mocha */
// /* eslint no-unused-expressions:0 */
// const { expect } = require('chai');
// import AuthFactory from './Auth.factory';
// const { beforeEach, describe, it, ngModule, inject } = global;
//
// describe('Auth Factory', () => {
//   let Auth;
//   let $httpBackend;
//   let LoopBackAuth;
//   const credentials = { email: 'test@test.com', password: 'secret' };
//   const token = {
//     id: 'LUKdpsBhMmgVdnL4BjkE60nis12ItONe4gU2IrEnFJj2BMXOnsAXHbAUQWMTDROl',
//     ttl: 1209600,
//     created: Date.now(),
//     userId: 1,
//     user: {
//       status: 'active',
//       username: 'admin',
//       realm: null,
//       created: Date.now(),
//       lastUpdated: Date.now(),
//       id: 1,
//     },
//   };
//
//   beforeEach(ngModule(AuthFactory));
//   beforeEach(inject((_Auth_, _$httpBackend_, _LoopBackAuth_) => {
//     Auth = _Auth_;
//     $httpBackend = _$httpBackend_;
//     LoopBackAuth = _LoopBackAuth_;
//   }));
//
//   beforeEach(() => {
//     $httpBackend.whenRoute('POST', '/api/Admins/login', credentials)
//       .respond(200, token);
//     $httpBackend.whenPOST('/api/Admins/logout')
//       .respond(204);
//   });
//
//   afterEach(() => {
//     LoopBackAuth.clearUser();
//     LoopBackAuth.clearStorage();
//   });
//
//   describe('API', () => {
//     describe('isAuthenticated', () => {
//       it('Should be a function', () => {
//         expect(Auth.isAuthenticated).to.be.a('function');
//       });
//       it('Should return a boolean', () => {
//         expect(Auth.isAuthenticated()).to.be.a('boolean');
//       });
//     });
//
//     describe('login', () => {
//       it('Should be a function', () => {
//         expect(Auth.login).to.be.a('function');
//       });
//     });
//
//     describe('logout', () => {
//       it('Should be a function', () => {
//         expect(Auth.logout).to.be.a('function');
//       });
//     });
//
//     describe('streamCurrentUser', () => {
//       it('Should be a function', () => {
//         expect(Auth.streamCurrentUser).to.be.a('function');
//       });
//     });
//
//     describe('currentUser', () => {
//       it('Should should be an empty object', () => {
//         expect(Auth.currentUser).to.be.an('object');
//         expect(Auth.currentUser).to.eql({});
//       });
//     });
//   });
//
//   describe('Before logging in', () => {
//     beforeEach(() => { Auth.streamCurrentUser(); });
//     it('Should not be authenticated', () => {
//       expect(Auth.isAuthenticated()).to.be.false;
//     });
//     it('Should have an empty currentUser', () => {
//       expect(Auth.currentUser).to.eql({});
//     });
//   });
//
//   describe('After logging in', () => {
//     beforeEach(() => {
//       Auth.streamCurrentUser();
//       Auth.login(credentials);
//       $httpBackend.flush();
//     });
//     it('Should be authenticated', () => {
//       expect(Auth.isAuthenticated()).to.be.true;
//     });
//     it('Should have a currentUser', () => {
//       expect(Auth.currentUser).to.eql(token.user);
//     });
//   });
//
//   describe('After logging out', () => {
//     beforeEach(() => {
//       Auth.streamCurrentUser();
//       Auth.login(credentials);
//       Auth.logout();
//       $httpBackend.flush();
//     });
//     it('Should not be authenticated', () => {
//       expect(Auth.isAuthenticated()).to.be.false;
//     });
//     it('Should have an empty currentUser', () => {
//       expect(Auth.currentUser).to.eql({});
//     });
//   });
// });
